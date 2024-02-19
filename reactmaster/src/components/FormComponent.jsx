import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Global from "../Global";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const validationSchema = Yup.object({
	title: Yup.string().required("Title is required"),
	content: Yup.string().required("Content is required"),
});

const FormComponent = (props) => {
	const navigate = useNavigate();
	let { articleID, typeOfForm } = props;
	const [selectedImage, setSelectedImage] = useState(null);

	const [articleValues, setArticleValues] = useState({
		_id: "",
		title: "",
		content: "",
		image: "",
	});

	useEffect(() => {
		if (articleID) {
			axios
				.get(Global.url + "article/" + articleID)
				.then((response) => {
					setArticleValues(response.data.article);
				})
				.catch((error) => {
					navigate(`/blog`);
				});
		}
	}, [articleID, navigate]);

    const handleSubmit = (values) => {
        if (articleID) {
          let axiosURL = Global.url + "article/" + articleID;
          if (selectedImage !== null && selectedImage.name !== articleValues.image && articleValues.image !== null) {
            axiosURL = Global.url + "article/" + articleID + "/" + articleValues.image;
          }
          axios
            .put(axiosURL, values)
            .then((response) => {
              if (selectedImage !== null) {
                values.image = selectedImage;
                const formData = new FormData();
                formData.append("file0", selectedImage, selectedImage.name);
                axios
                  .post(Global.url + "uploadImage/" + articleID, formData)
                  .then((response) => {
                    Swal.fire({
                      title: "Success",
                      text: "Article updated successfully",
                      icon: "success",
                      confirmButtonText: "OK",
                    }).then(() => {
                      navigate(`/article/` + articleID);
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                    navigate(`/blog`);
                  });
              } else {
                Swal.fire({
                  title: "Success",
                  text: "Article updated successfully",
                  icon: "success",
                  confirmButtonText: "OK",
                }).then(() => {
                  navigate(`/article/` + articleID);
                });
              }
            })
            .catch(() => {
              Swal.fire({
                title: "Error",
                text: "Failed to update the article",
                icon: "error",
                confirmButtonText: "OK",
              });
              navigate(`/blog`);
            });
        } else {
          axios
            .post(Global.url + "save/", values)
            .then((response) => {
              articleID = response.data.article._id;
              if (selectedImage !== null) {
                values.image = selectedImage;
                const formData = new FormData();
                formData.append("file0", selectedImage, selectedImage.name);
                axios
                  .post(Global.url + "uploadImage/" + articleID, formData)
                  .then((response) => {
                    Swal.fire({
                      title: "Success",
                      text: "Article created successfully",
                      icon: "success",
                      confirmButtonText: "OK",
                    }).then(() => {
                      setArticleValues(response.data.article);
                      navigate(`/article/` + articleID);
                    });
                  })
                  .catch((error) => {
                    console.log("Error: " + error);
                    navigate(`/blog`);
                  });
              } else {
                Swal.fire({
                  title: "Success",
                  text: "Article created successfully",
                  icon: "success",
                  confirmButtonText: "OK",
                }).then(() => {
                  navigate(`/article/` + articleID);
                });
              }
            })
            .catch((error) => {
              Swal.fire({
                title: "Error",
                text: "Failed to create the article",
                icon: "error",
                confirmButtonText: "OK",
              });
              console.log("Error: " + error);
              navigate(`/blog`);
            });
        }
      };
      

	const handleImageChange = (event) => {
		setSelectedImage(event.target.files[0]);
	};


	return (
		<Formik
			initialValues={articleValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			enableReinitialize={true}
		>
			<Form className="midForm">
				<div className="formGroup">
					<label htmlFor="title">Title</label>
					<Field type="text" name="title" />
					<ErrorMessage
						name="title"
						component="div"
						className="error"
					/>
				</div>

				<div className="formGroup">
					<label htmlFor="content">Content</label>
					<Field as="textarea" name="content" />
					<ErrorMessage
						name="content"
						component="div"
						className="error"
					/>
				</div>
				{typeOfForm === "edit" && (
					<div>
						<h2 className="subHeader">Image Preview</h2>
						{(selectedImage !== null || articleValues.image !== null) ? (
							<div>
								<h3>Image Selected</h3>
								<div className="imageWrap">
									<img
										className="imagePreview"
										alt="none"
										src={
											Global.url +
											"image/" +
											articleValues.image
										}
									/>
								</div>
							</div>
						) : (
							<div>
								<h3>
									No image has been saved for this article
								</h3>
							</div>
						)}
					</div>
				)}
				<div className="formGroup">
					<div>
						{typeOfForm === "edit" ? (
							<h2 className="subHeader">Change Image</h2>
						) : (
							<h2 className="subHeader">Select Image</h2>
						)}
						<input
							type="file"
							name="file0"
							onChange={handleImageChange}
						/>
					</div>
				</div>

				<div className="clearfix"></div>

				<button type="submit" className="btn btnSuccess">
					Save
				</button>
			</Form>
		</Formik>
	);
};

export default FormComponent;
