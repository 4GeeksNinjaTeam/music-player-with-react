import React, { useState, useEffect } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";

//import JsonData from "../data/response.json";
//import axios from "axios";
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
