import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<section className="main">
				<div className="main__content">
					<h4 className="">Hello, It's Eugene from Philippinnes</h4>
					<p>I make things happen!</p>
					<button className="btn mt-6">Projects</button>
				</div>
			</section>
			<section className="main">
				<div className="main__content">
					{/* <h4 className="">Hello, It's Eugene from Philippinnes</h4> */}
					<p>What am i doing now?</p>
					<button className="btn mt-6">Projects</button>
				</div>
			</section>
		</div>
	);
}
