import React, { Fragment, useEffect } from "react";
import SearhBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

const App = () => {
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<Fragment className="App">
			<SearhBar />
			<div className="container">
        <AddBtn />
        <AddLogModal />
				<Logs />
			</div>
		</Fragment>
	);
};

export default App;
