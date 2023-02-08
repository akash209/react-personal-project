import { Fragment } from "react";
import logImage from '../../assets/logo.png'
import classes from './header.module.css';
import Login from "./login";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<Fragment>
				<div className={classes.container}>
					<img src = {logImage} className={classes.logo} />
					<Login />
				</div>
			</Fragment>
		</header>
	)
}

export default Header;