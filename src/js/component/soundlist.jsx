import React from "react";
import PropTypes from "prop-types";
export const SoundList = props => {
	return (
		<div className="row mt-3 mb-3">
			<div className="col-lg-2 col-md-12 mx-auto">
				{props.data
					? props.data.map((item, i) => (
							<ul key={`${i}`} className="list-group">
								<li
									className="list-group-item"
									onClick={() => props.playSound(item.url)}>
									{item.id + " " + item.name}
								</li>
							</ul>
					  ))
					: "Cargando"}
			</div>
		</div>
	);
};

SoundList.propTypes = {
	data: PropTypes.object,
	playSound: PropTypes.func
};
