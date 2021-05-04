import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const inputRef = useRef();
	//const isClickedOnTable = props.song ? () => handlePlay() : false;
	const handlePlay = () => {
		if (props.song) {
			return inputRef.current.play();
		}
	};

	return (
		<>
			<audio ref={inputRef} src={props.song} />
			<button
				onClick={() => handlePlay()}
				className="play-button"></button>
			<button
				onClick={() => inputRef.current.pause()}
				className="pause-button"></button>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string
};
