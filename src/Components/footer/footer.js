import classes from './footer.module.css';
import imageName from '../../assets/footer.jpg';
import FooterRight from './FooterRight';

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div className='container'>
				<div className='row'>
					<div className={classes.footing}>
						<img src={imageName} className={classes.Footerimage} />
						<FooterRight />
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;