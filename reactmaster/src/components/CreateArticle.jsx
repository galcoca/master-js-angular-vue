import React from "react";
import { useParams } from "react-router-dom";
import FormComponent from "./FormComponent";

const CreateArticle = () => {
  const { id: articleID } = useParams();

  if (articleID) {
    return (
        <section id="content">
          <h2 className="subHeader">Modify Article</h2>
          <FormComponent articleID={articleID} typeOfForm="edit"/>
        </section>
      );
  } else {
    return (
      <section id="content">
        <h2 className="subHeader">Create Article</h2>
        <FormComponent/>
      </section>
    );
  }
};

export default CreateArticle;
