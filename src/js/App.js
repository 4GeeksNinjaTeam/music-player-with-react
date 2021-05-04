import React, { useState, useEffect } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";
import axios from "axios";
const App = () => {
	const [currentSong, setCurrentSong] = useState("");
	const [soundList, setSoundList] = useState({ Songs: [] });
	const [JSONUrl, setJSONUrl] = useState(
		"https://assets.breatheco.de/apis/sound/data/songs.json"
	);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(JSONUrl);
			//const result = await response.json();
			setSoundList(response);
			//setData(result);
		};

		fetchData();
	}, [JSONUrl]);

	const playSound = url => {
		setCurrentSong(url);
	};

	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<div className="wrapper">
				<SoundList data={soundList.Songs} playSound={playSound} />
				<Player song={currentSong} />
			</div>
		</div>
	);
};
export default App;
