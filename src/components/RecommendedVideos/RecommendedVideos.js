import React from "react";
import "./RecommendedVideos.css";
import Video from "./Video.js";

function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<div className="recommendedVideos__videos">
				<Video
					image="https://i.ytimg.com/vi/Ap6LuRkg7rk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ2cR1BEstUKdK1IERMjrXm2jEZw"
					title="Ethiopia | እጅጋየሁ ሽባባው(ጂጂ) - ካህኔ | Egigayehu Shibabaw (Gigi) - Kahne  Design by Nik Design"
					channelImage="https://yt3.ggpht.com/ytc/AMLnZu8oGRKJmhYACbytqwO0zsL8UsUeyBWgfzOufjNN=s68-c-k-c0x00ffffff-no-rj"
					channel="NIK Graphics"
					views="1.1M views"
					timestamp="3 years ago"
				/>
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</div>
	);
}

export default RecommendedVideos;
