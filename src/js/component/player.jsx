import React from "react";
import PropTypes from "prop-types";

export const Player = props => {
	return (
		<>
			<audio
				ref={props.inputRef}
				src={props.song}
				autoPlay
				controls
				preload>
				<source src="https://cldup.com/qR72ozoaiQ.mp3"></source>
			</audio>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string,
	inputRef: PropTypes.object
};
