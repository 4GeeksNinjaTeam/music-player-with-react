import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const audiofile = useRef();
	if (props.song) {
		audiofile.current.src = props.song;
		audiofile.play;
	}
	return (
		<>
			<audio controls="controls" preload="auto" autobuffer="true">
				<source ref={audiofile} src="" type="audio/mp3" />
			</audio>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string
};
