import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
const Body = (props) => {
	const PROJECT_DATA = [
		{
			id: "1",
			Name: "Testing 1",
			price: "1200",
			img: "first_img.jpeg",
		},
		{
			id: "2",
			Name: "Testing 2",
			price: "1500",
			img: "second_img.jpg",
		},
		{
			id: "3",
			Name: "Testing 3",
			price: "1600",
			img: "third_img.jpg",
		},
		{
			id: "4",
			Name: "Testing 4",
			price: "1800",
			img: "fourth_img.jpeg",
		},
		{
			id: "5",
			Name: "Testing 5",
			price: "900",
			img: "fifth_img.jpg",
		},
		{
			id: "6",
			Name: "Testing 6",
			price: "4500",
			img: "sixth_img.jpg",
		},
	];
	return (
		<div className='container'>
			<div className='row mt-4'>
				{PROJECT_DATA.map(data => (
					<Card key={data.id} Id={data.id} Name={data.Name} price={data.price} imgName={data.img} onCardclick={props.onShowCart} />
				))}
			</div>
		</div>
	);
};

export default Body;