import React, { useState, useEffect } from "react";
import axios from "axios";
import Global from "../Global";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";

const Articles = ({ home, search }) => {
	const [articles, setArticles] = useState([]);
	const [status, setStatus] = useState(null);

	useEffect(() => {
		const getArticles = (isHome, isSearch) => {
			let axiosURL = Global.url + "articles";
			if (isHome) {
				axiosURL = Global.url + "articles/5";
			}
			if (isSearch) {
				axiosURL = Global.url + "search/" + search;
			}
			axios
				.get(axiosURL)
				.then((response) => {
					setArticles(response.data.articles);
					setStatus("success");
				})
				.catch((error) => {
					console.log(error + " Cannot get articles");
				});
		};

		getArticles(home === "true", search);
	}, [home, search]);

	useEffect(() => {
		setArticles([]);
		setStatus(null);
	}, [search]);

	if (articles.length >= 1) {
		const articleList = articles.map((article, key) => (
			<article className="articleItem" key={key}>
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
				<h2>{article.title}</h2>
				<span className="date">
					<Moment fromNow>{article.date}</Moment>
				</span>
				<NavLink to={"/article/" + article._id}>Read More</NavLink>
				<div className="clearfix"></div>
			</article>
		));

		return <div id="articles">{articleList}</div>;
	} else if ((articles.length === 0 && status === "success") || search) {
		return (
			<div id="articles">
				<h2 className="subHeader">
					Unable to find articles or doesn't exist
				</h2>
			</div>
		);
	} else {
		return (
			<div id="articles">
				<h1>Loading...</h1>
			</div>
		);
	}
};

export default Articles;
