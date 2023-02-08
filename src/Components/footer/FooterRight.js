import classes from './footerRight.module.css';

const FooterRight = (props) => {
	const DUMMY_LINKS = [
		{
			id: '1',
			links: 'home'
		},
		{
			id: '2',
			links: 'about Us'
		},
		{
			id: '3',
			links: 'New theme'
		},
		{
			id: '4',
			links: 'test 1'
		},
		{
			id: '5',
			links: 'test 2'
		}
	];
	const links = DUMMY_LINKS.map(link=> <li key={link.id} className={classes.colorText}>{link.links}</li>)

	return (
		<ul className='mt-4'>
			{links}
		</ul>
	);
};

export default FooterRight;