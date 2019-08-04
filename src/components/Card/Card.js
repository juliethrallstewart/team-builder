import React from 'react';
import { Link } from 'react-router-dom';

// { name: "", email: "", role: "" }

const Card = (props) => {
	// const person = props.person;
	const { person } = props;
	return (
		<div style={{ border: '1px solid black', margin: '15px 0' }}>
			<div>
				<b>Person:</b> {person.name}
			</div>
			<div>
				<b>Email:</b> {person.email}
			</div>
			<div>
				<b>Role:</b> {person.role}
			</div>
			<Link to={`/edit/${person.id}`}>Edit</Link>
		</div>
	);
};

export default Card;
