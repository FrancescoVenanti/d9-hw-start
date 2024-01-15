import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = (data) => {
	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();
	return (
		<Container>
			<h1>Your favourite jobs</h1>
			<Link className="btn btn-primary" to={"/"}>
				Home
			</Link>
			<Row>
				{favourites.map((fav, i) => (
					<>
						<Col xs={10} key={i}>
							<div className="p-3 bg-dark rounded my-2">
								<Link to={"/" + fav}>{fav}</Link>
							</div>
						</Col>
						<Col xs={2}>
							<Button
								className="my-2 p-3"
								onClick={() => {
									dispatch({
										type: "REMOVE_FAVOURITE",
									});
								}}
							>
								REMOVE
							</Button>
						</Col>
					</>
				))}
			</Row>
		</Container>
	);
};
export default Favourites;
