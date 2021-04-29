import React from "react";
import "../assets/css/global.css";
import store from "./store";
import {Provider} from "react-redux";

export default function App({ Component, pageProps }) {
	return <Provider store={store}>
		<Component {...pageProps} />;
	</Provider>;
}