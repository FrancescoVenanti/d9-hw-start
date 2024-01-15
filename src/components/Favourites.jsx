import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = (data) => {
	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();
	return (
		<Container>
			<h1>Your favourite jobs</h1>
			<Link className="btn btn-primary me-4" to={"/"}>
				Home
			</Link>
			<Button
				className=""
				onClick={() => {
					dispatch({
						type: "REMOVE_FAVOURITE",
					});
				}}
			>
				remove favourites
			</Button>

			<Row>
				{favourites.map((fav, i) => (
					<div key={i}>
						<Col xs={10}>
							<div className="p-3 bg-dark rounded my-2">
								<Link to={"/" + fav}>{fav}</Link>
							</div>
						</Col>
					</div>
				))}
			</Row>
		</Container>
	);
};
export default Favourites;
