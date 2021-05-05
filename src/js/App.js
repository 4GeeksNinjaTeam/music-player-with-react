import React, { useState, useEffect } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";
//import JsonData from "../data/response.json";
//import axios from "axios";
const App = () => {
	const [currentSong, setCurrentSong] = useState("");
	const [soundList, setSoundList] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(
					"https://assets.breatheco.de/apis/sound/songs"
				);
				let responseJson = await response.json();
				setSoundList(responseJson);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	//console.log(soundList);
	/*const [soundList, setSoundList] = useState({ Songs: [] });
	const [JSONUrl, setJSONUrl] = useState(
		"https://assets.breatheco.de/apis/sound/songs"
	);
	//	"https://assets.breatheco.de/apis/sound/data/songs.json"

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(JSONUrl);
			//const result = await JSON.parse(response); //response.json();
			setSoundList(response);
		};
		fetchData();
	}, []);
    */
	/*useEffect(() => {
		setSoundList(fetchData);
	}, []);*/

	const playSound = url => {
		setCurrentSong(url);
	};

	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<div className="wrapper">
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
							{soundList
								? soundList.map((item, i) => (
										<tr
											key={`${i}`}
											onClick={() => playSound(item.url)}>
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
				<Player song={currentSong} />
			</div>
		</div>
	);
};
export default App;
