import React, { useState, useEffect } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";

const App = () => {
	const songURL = "https://assets.breatheco.de/apis/sound/";
	const [currentSong, setCurrentSong] = useState("");
	const [soundList, setSoundList] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(songURL + "songs");
				let responseJson = await response.json();
				setSoundList(responseJson);
			} catch (e) {
				//console.error(e);
			}
		};
		fetchData();
	}, []);

	const playSound = url => {
		setCurrentSong(url);
	};

	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<div className="wrapper">
				<SoundList
					data={soundList}
					playSound={playSound}
					songURL={songURL}
				/>
				<Player song={currentSong} songURL={songURL} />
			</div>
		</div>
	);
};
export default App;
