import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Header from './Components/header/header';
import Body from "./Components/body/body";
import Footer from "./Components/footer/footer";

function App() {

	const [ProjectDetail, setCartIsShown] = useState(false);

	const ShowCartHandler = () => {
		setCartIsShown(true);
	};

	const HideCartHandler = () => {
		setCartIsShown(false);
	};

  return (
    <Fragment>
		<Header />
		<Body onProjectButton={ShowCartHandler}/>
		<Footer />
    </Fragment>
  );
}

export default App;
