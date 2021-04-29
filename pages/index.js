import React, {Component} from "react";
import Navigation from "./Nav";
import Head from "next/head";
import {Homepage} from "./components/layout/homepage/Homepage";

export default class Home extends Component {

	render (){
		return(
			<>
				<Head>
					<title>Balanced</title>
				</Head>
				<Navigation/>
				<Homepage />
			</>
		);
	}
}
