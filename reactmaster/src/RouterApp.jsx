import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import ErrorComponent from "./components/ErrorComponent";
import TestSection from "./components/TestSection";
import RootTemplate from "./components/RootTemplate";
import BlankTemplate from "./components/BlankTemplate";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Article from "./components/Article";
import Search from "./components/Search";
import CreateArticle from "./components/CreateArticle";

const RouterApp = () => {
	const buttonString = "Check Blog";

	return (
		<Router>
			<Routes>
				<Route
					exact path="/"
					element={
						<RootTemplate
							size="sliderBig"
							sliderTitle="Welcome to the Master: React"
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<Home />} />
				</Route>
				<Route
					exact path="/home"
					element={
						<RootTemplate
							size="sliderBig"
							sliderTitle="Welcome to the Master: React"
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<Home />} />
				</Route>
				<Route
					exact path="/blog"
					element={
						<RootTemplate
							size="sliderSmall"
							sliderTitle="Blog"
							buttonString={buttonString}
							createButton="true"
						/>
					}
				>
					<Route index element={<Blog />} />
				</Route>
				<Route
					exact path="/form"
					element={
						<RootTemplate
							size="sliderSmall"
							sliderTitle="Form"
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<Form />} />
				</Route>
				<Route
					exact path="/movies"
					element={
						<RootTemplate
							size="sliderSmall"
							sliderTitle="Movies"
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<Movies />} />
				</Route>
				<Route
					exact path="/testpage"
					element={
						<RootTemplate
							size="sliderSmall"
							sliderTitle="Test Page"
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<TestSection />} />
				</Route>
				<Route
					exact path="/article/:id"
					element = {<BlankTemplate/>}
				>
					<Route index element={<Article />} />
				</Route>
				<Route
					exact path="/article/create"
					element = {<BlankTemplate/>}
				>
					<Route index element={<CreateArticle />} />
				</Route>
				<Route
					exact path="/article/edit/:id"
					element = {<BlankTemplate/>}
				>
					<Route index element={<CreateArticle />} />
				</Route>
				<Route
					exact path="/article/save"
					element = {<BlankTemplate/>}
				>
					<Route index element={<CreateArticle />} />
				</Route>
				<Route
					exact path="/search/:search"
					element={
						<RootTemplate
							size="sliderSmall"
							sliderTitle="Search Results of: "
							buttonString={buttonString}
						/>
					}
				>
					<Route index element={<Search />} />
				</Route>
				<Route path="*" element={<ErrorComponent />} />
			</Routes>
		</Router>
	);
}
export default RouterApp;


/*
    {exact path: 'blog/article/:id', component: ArticleComponent},
    {exact path: 'article/create', component: CreateArticleComponent},
    {exact path: 'article/edit/:id', component: EditArticleComponent},
    {exact path: 'search/:search', component: SearchComponent},
    {exact path: '**', component: ErrorComponent}
*/