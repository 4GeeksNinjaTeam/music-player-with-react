import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const control = useRef(null);
	return (
		<div className="wrapper">
			<audio controls>
				<source ref="control" src="" type="audio/mp3" />
			</audio>
		</div>
	);
};
