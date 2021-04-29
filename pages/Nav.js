import React, {Component} from "react";
import Link from "next/link";
import styles from "../assets/scss/nav.module.scss";
class Navigation extends Component{
	constructor(props) {
		super(props);
		this.state = {
			activeMenu: true
		};
	}
	render() {
		return (
			<div>
				<button className={styles.menuBtn} onClick={() => this.setState({activeMenu: !this.state.activeMenu})}>{this.state.activeMenu ? "Hide menu" : "Show menu"}</button>
				{this.state.activeMenu ?
					<nav className={styles.navigation}>
						<Link href="feature/auth/Auth">
							<a className={styles.navigation__link}>Authorization</a>
						</Link>
						<Link href="components/layout/profile/Profile">
							<a className={styles.navigation__link}>Profile</a>
						</Link>
						<Link href="">
							<a className={styles.navigation__link}>Statistic</a>
						</Link>
						<Link href="">
							<a className={styles.navigation__link}>Dashboard</a>
						</Link>
						<Link href="components/layout/Notation/Notation">
							<a className={styles.navigation__link}>Notations</a>
						</Link>
					</nav>
					: null }
			</div>
		);
	}
}

export default Navigation;