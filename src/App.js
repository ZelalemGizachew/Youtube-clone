import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<div className="app__page">
								<Sidebar />
								<RecommendedVideos />
							</div>
						}
					/>
					<Route
						path="/search/:searchText"
						element={
							<div className="app__page">
								<Sidebar />
								<SearchPage />
							</div>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
