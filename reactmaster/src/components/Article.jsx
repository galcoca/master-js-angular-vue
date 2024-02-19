import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Global from "../Global";
import Moment from "react-moment";
import Swal from 'sweetalert2'

const Article = () => {
    const articleID = useParams().id;  
    const [article, setArticle] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const getArticle = () => {
            axios
                .get(Global.url+"article/"+articleID)
                .then((response) => {
                    setArticle(response.data.article);
                })
                .catch((error) =>{
                    console.log(error + "Cannot get the article");
                    setArticle({});
                });
        };

        getArticle(articleID);
    }, [articleID, navigate]);

    useEffect(() => {
        setArticle({});
    }, [articleID]);

    const handleDelete = (id) => {
        Swal.fire({
          title: "Confirmation",
          text: "Are you sure you want to delete this article?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(Global.url + "article/" + id)
              .then(() => {
                Swal.fire({
                  title: "Success",
                  text: "Article deleted successfully",
                  icon: "success",
                  confirmButtonText: "OK",
                }).then(() => {
                  navigate("/blog");
                });
              })
              .catch((error) => {
                console.log(error + "Cannot delete the article");
                navigate("/edit/" + id);
              });
          }
        });
      };

    if(Object.keys(article).length > 0){
        let articleEditURL = "/article/edit/"+article._id;
        return (
            <section id="content">
                <article className="articleItem articleDetail">
                    <div className="imageWrap">
                        {article.image !== null ? (
                            <img
                                src={Global.url + "image/" + article.image}
                                alt={article.title}
                            />
                        ) : (
                            <img
                                src="https://placehold.co/1000x400"
                                alt={article.title}
                            />
                        )}
                    </div>
                    <h1 className="subHeader">{article.title}</h1>
                    <span className="date">
                        <Moment fromNow>{article.date}</Moment>
                    </span>
                    <p>{article.content}</p>

                    <div className="buttons">
                        <NavLink to={articleEditURL} className={() => ['btnSmall', 'btnWarning'].join(" ")} end>Edit</NavLink>
                        <button className="btnSmall btnDanger" onClick={() => handleDelete(article._id)}>Delete</button>
                    </div>
                    <div className="clearfix"></div>
                </article>
            </section>
        );
    } else {
        return (
            <section id="content">
                <article className="articleItem articleDetail">
                    <h2 className="subHeader" style={{ textAlign: "center" }}>El articulo no existe</h2>
                </article>
            </section>
        );
    }
}

export default Article;
