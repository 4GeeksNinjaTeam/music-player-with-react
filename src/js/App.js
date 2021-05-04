import React, { useState, useEffect, useRef } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";

const App = () => {
	const [currentSong, setCurrentSong] = useState("");
	const inputRef = useRef();
	const [soundList, setSoundList] = useState({
		Songs: [
			{
				id: 1,
				category: "80's electronic",
				name: "Stranger Things",
				url:
					"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
			},
			{
				id: 2,
				category: "game",
				name: "Mario Star",
				url: "https://cldup.com/qR72ozoaiQ.mp3"
			},
			{
				id: 3,
				category: "game",
				name: "Mario Overworld",
				url: "http://hi5.1980s.fm/;"
			}
		]
	});
	const playSound = url => {
		setCurrentSong(url);
		inputRef.current.src = url;
	};

	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<div className="wrapper">
				<SoundList
					data={soundList.Songs}
					playSound={playSound}
					inputRef={inputRef}
				/>
				<Player song={currentSong} inputRef={inputRef} />
			</div>
		</div>
	);
};
export default App;
