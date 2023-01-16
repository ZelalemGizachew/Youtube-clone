import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined";

function ChannelRow({
	image,
	channel,
	verified,
	subs,
	noOfVideos,
	username,
	description,
}) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow__logo" src={image} alt={channel} />
			<div className="channelRow__text">
				<h4>
					{channel} {verified && <VerifiedIcon />}
				</h4>
				<p>
					{username} • {subs} subscribers
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
