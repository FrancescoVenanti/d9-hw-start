import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/fetchReducer";

const CompanySearchResults = () => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state);
	const [jobs, setJobs] = useState([]);
	const params = useParams();

	const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

	useEffect(() => {
		//getJobs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
		dispatch(fetchData(params.company));
	}, []);

	const getJobs = async () => {
		try {
			const response = await fetch(baseEndpoint + params.company);
			if (response.ok) {
				const { data } = await response.json();
				setJobs(data);
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Row>
				{loading && <p>Loading...</p>}
				{error ? (
					<p>Errore: {error}</p>
				) : (
					<Col className="my-3">
						<h1 className="display-4">Job posting for: {params.company}</h1>
						<Link className="btn btn-primary" to={"/"}>
							Home
						</Link>
						{jobs.map((jobData) => (
							<Job key={jobData._id} data={jobData} />
						))}
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default CompanySearchResults;
