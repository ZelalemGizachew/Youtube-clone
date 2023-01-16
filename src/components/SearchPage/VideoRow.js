import React from "react";
import "./VideoRow.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Avatar from "@material-ui/core/Avatar";

function VideoRow({
	views,
	verified,
	channelImage,
	description,
	timestamp,
	channel,
	title,
	image,
}) {
	return (
		<div className="videoRow">
			<img className="videoRow__image" src={image} alt={channel} />
			<div className="videoRow__text">
				<h3>{title}</h3>
				<p>
					{views} views • {timestamp}
				</p>
				<div className="videoRow_channel">
					<Avatar
						className="videoRow_channel_image"
						src={channelImage}
						alt={channel}
					/>
					<p className="videoRow__channel_text">
						{channel}{" "}
						{verified && (
							<CheckCircleIcon className="videoRow_channel_verified" />
						)}
					</p>
				</div>
				<p className="videoRow__description">{description}</p>
			</div>
		</div>
	);
}

export default VideoRow;
