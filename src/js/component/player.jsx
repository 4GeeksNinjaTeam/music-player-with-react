import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	return (
		<>
			<audio ref={props.inputRef} src={props.song} autoPlay controls />
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string,
	inputRef: PropTypes.object
};
