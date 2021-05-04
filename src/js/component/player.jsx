import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const inputRef = useRef();

	const handlePlay = () => {
		if (props.song) {
			return inputRef.current.play();
		}
	};

	return (
		<>
			<audio ref={inputRef} src={props.song} />
			<button onClick={() => handlePlay()}>Play</button>
			<button onClick={() => inputRef.current.pause()}>Pause</button>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string
};
