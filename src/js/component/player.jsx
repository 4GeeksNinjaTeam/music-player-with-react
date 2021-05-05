import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const inputRef = useRef();
	return (
		<>
			<audio
				ref={inputRef}
				src={props.songURL + props.song}
				autoPlay
				controls
				preload></audio>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string,
	songURL: PropTypes.string
};
