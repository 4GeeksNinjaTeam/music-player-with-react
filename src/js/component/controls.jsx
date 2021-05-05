import React from "react";
import PropTypes from "prop-types";
export const Controls = props => {
	return (
		<div className="col-md-12 bg-light text-right">
			<button
				className="prev-button"
				onClick={() => props.playPrev()}></button>
			<button
				className="next-button"
				onClick={() => props.playNext()}></button>
		</div>
	);
};

Controls.propTypes = {
	playPrev: PropTypes.func,
	playNext: PropTypes.func
};
