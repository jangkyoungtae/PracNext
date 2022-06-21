import { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layour";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
