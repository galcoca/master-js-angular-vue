import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import RouterApp from "./RouterApp";

function App() {
	const buttonString = "Check Blog";

	return (
		<div className="App">
			<Header />
			<Slider title="Welcome to the Master: React" btn={buttonString} />
			<div className="center">
				<RouterApp />
				<Sidebar />
				<div className="clearfix"></div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
