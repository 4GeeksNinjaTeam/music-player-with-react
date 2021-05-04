import React from "react";
import PropTypes from "prop-types";
export const SoundList = props => {
	return (
		<div className="row mt-3 mb-3">
			<table className="table table-striped table-hover table-dark sortable">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Category</th>
						<th scope="col">Name</th>
						<th scope="col">Url</th>
					</tr>
				</thead>
				<tbody>
					{props.data
						? props.data.map((item, i) => (
								<tr
									key={`${i}`}
									onClick={() => props.playSound(item.url)}>
									<th scope="row">{item.id}</th>
									<td>{item.category}</td>
									<td>{item.name}</td>
									<td>{item.url}</td>
								</tr>
						  ))
						: "Cargando..."}
				</tbody>
			</table>
		</div>
	);
};

SoundList.propTypes = {
	data: PropTypes.array,
	playSound: PropTypes.func
};
