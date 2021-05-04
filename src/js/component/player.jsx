import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const inputRef = useRef();
	const [state, setState] = useState(false);
	const [play_pause, setPlayPause] = useState("play");

	const togglePlay = () => {
		setState(!state);
		if (state) {
			setPlayPause("play");
			return inputRef.current.pause();
		} else {
			setPlayPause("pause");
			return inputRef.current.play();
		}
	};
	/*const After = () => {
		let cancionActul = playSound();
		console.log(cancionActul);
	};*/

	return (
		<>
			<audio ref={inputRef} src={props.song} autoPlay />
			<div>
				<i id="anterior" className="fas fa-play"></i>
			</div>
			<button
				onClick={togglePlay}
				className={`${play_pause}-button`}></button>
			<div>
				<i className="fas fa-play"></i>
			</div>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string
};
