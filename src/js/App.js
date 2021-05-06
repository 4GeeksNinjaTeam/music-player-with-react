import React, { useState, useEffect, useRef } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";
import { Controls } from "./component/controls.jsx";

const App = () => {
	const songURL = "https://assets.breatheco.de/apis/sound/";
	const [currentSong, setCurrentSong] = useState("");
	const [soundList, setSoundList] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(songURL + "songs");
				const responseJson = await response.json();
				setSoundList(responseJson);
			} catch (e) {
				//console.error(e);
			}
		};
		fetchData();
	}, []);
	const searchPrevSong = () => {
		for (let i = 0; i < soundList.length; i++) {
			if (currentSong === soundList[i].url && i - 1 >= 0) {
				return soundList[i - 1].url;
			}
		}
	};

	const searchNextSong = () => {
		for (let i = 0; i < soundList.length; i++) {
			if (currentSong === soundList[i].url && i + 1 <= soundList.length) {
				return soundList[i + 1].url;
			}
		}
	};
	const playSound = (url, id) => {
		setCurrentSong(url);
		var del = document.querySelectorAll(".fa").forEach(e => e.remove());
		const el = document.querySelector("#" + id);
		el.innerHTML = '<i class="fa fa-music"></i>';
	};
	const playNext = () => {
		const nextSong = searchNextSong();
		playSound(nextSong);
	};
	const playPrev = () => {
		const prevSong = searchPrevSong();
		playSound(prevSong);
	};
	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<div className="wrapper">
				<Controls playPrev={playPrev} playNext={playNext} />
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
