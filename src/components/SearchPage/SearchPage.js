import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				channel="freeCodeCamp.org"
				verified={true}
				subs="7.05M"
				noOfVideos={400}
				username="@freecodecamp"
				description="Learn to code for free."
			/>
			<hr />
			<VideoRow
				image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg"
				title="Learn Python - Full Course for Beginners [Tutorial]"
				channel="freeCodeCamp.org"
				views="38M"
				channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				verified={true}
				timestamp="4 years ago"
				description="⭐️ Contents ⭐ ⌨️ (0:00) Introduction ⌨️ (1:45) Installing Python & PyCharm ⌨️ (6:40) Setup & Hello World ⌨️ (10:23) ..."
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg"
				title="Learn Python - Full Course for Beginners [Tutorial]"
				channel="freeCodeCamp.org"
				views="38M"
				channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				verified={true}
				timestamp="4 years ago"
				description="⭐️ Contents ⭐ ⌨️ (0:00) Introduction ⌨️ (1:45) Installing Python & PyCharm ⌨️ (6:40) Setup & Hello World ⌨️ (10:23) ..."
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg"
				title="Learn Python - Full Course for Beginners [Tutorial]"
				channel="freeCodeCamp.org"
				views="38M"
				channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				verified={true}
				timestamp="4 years ago"
				description="⭐️ Contents ⭐ ⌨️ (0:00) Introduction ⌨️ (1:45) Installing Python & PyCharm ⌨️ (6:40) Setup & Hello World ⌨️ (10:23) ..."
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg"
				title="Learn Python - Full Course for Beginners [Tutorial]"
				channel="freeCodeCamp.org"
				views="38M"
				channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				verified={true}
				timestamp="4 years ago"
				description="⭐️ Contents ⭐ ⌨️ (0:00) Introduction ⌨️ (1:45) Installing Python & PyCharm ⌨️ (6:40) Setup & Hello World ⌨️ (10:23) ..."
			/>
			<VideoRow
				image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg"
				title="Learn Python - Full Course for Beginners [Tutorial]"
				channel="freeCodeCamp.org"
				views="38M"
				channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
				verified={true}
				timestamp="4 years ago"
				description="⭐️ Contents ⭐ ⌨️ (0:00) Introduction ⌨️ (1:45) Installing Python & PyCharm ⌨️ (6:40) Setup & Hello World ⌨️ (10:23) ..."
			/>
		</div>
	);
}

export default SearchPage;
