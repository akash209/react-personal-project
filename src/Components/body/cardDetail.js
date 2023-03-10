import classes from './Cart.module.css';
import Modal from './Modal';

const CardDetail = (props) => {
	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>116.00</span>
			</div>
			<div className={classes.action}>
				<button className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>		
			</div>
		</Modal>
	)
};

export default Cart;