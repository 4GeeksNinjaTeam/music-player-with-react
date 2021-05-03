import React, { useRef } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const control = useRef(null);
	if (props.url) control.current.src = props.url;
	return (
		<>
			<audio controls>
				<source ref={control} src="" type="audio/mp3" />
			</audio>
		</>
	);
};

Player.propTypes = {
	url: PropTypes.string
};
