import classes from './card.module.css';
import Button from './Button';

const Card = (props) => {
	return (
		<div className='col-md-4'>
			<div className="Card">
				<div className="cardImg">
					<img src={require('../../assets/project/'+ props.imgName)} className={classes.image} alt="image"/>
				</div>
				<div className='card-body'>
					<h3 className={classes['text-align']}>{props.Name}</h3>
					<p className={classes['text-align']}>{props.price}</p>
					<Button onnewClick={props.onCardclick}/>
				</div>
			</div>
		</div>
	)
};

export default Card;