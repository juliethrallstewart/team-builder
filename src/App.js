import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js';
import Form from './components/Form/Form.js';
import { Route, Link } from 'react-router-dom';

function App () {
	const [
		people,
		setPeople
	] = useState([
		{ id: 0, name: 'Henry', email: 'nice@try', role: 'TL' },
		{ id: 1, name: 'Bard', email: 'not@this', role: 'Dad' }
	]);

	const addPerson = (person) => {
		setPeople([
			...people,
			{ ...person, id: Date.now() }
		]);
	};

	const editPerson = (editedPerson) => {
		const peopleCopy = [
			...people
		];
		// const oldPerson = peopleCopy.find(person => person.id === editedPerson.id);
		// console.log(editedPerson, oldPerson);
		// oldPerson.name = editedPerson.name;
		// oldPerson.email = editedPerson.email;
		// oldPerson.role = editedPerson.role;
		// Object.assign(oldPerson, editedPerson);

		//find the person already in the people list that matches the person id being edited
		const personIndex = peopleCopy.findIndex((person) => person.id === editedPerson.id);
		//console.log(personIndex, 'personIndex checker');

		//use bracket notation to update the data
		peopleCopy[personIndex] = editedPerson;
		//peopleCopy.push(editedPerson);
		//peopleCopy.splice(personIndex, 1);

		//set people to the edited copy
		setPeople(peopleCopy);
	};

	return (
		<div className="App">
			<Link to="/" style={{ marginRight: '50px' }}>
				Home
			</Link>
			<Link to="/add">Add Person</Link>
			<Route
				path="/add"
				render={(props) => <Form {...props} submitPerson={addPerson} buttonText="Add Person" />}
			/>
			<Route exact path="/" render={(props) => people.map((person) => <Card person={person} />)} />
			<Route
				path="/edit/:id"
				render={(props) => {
					const person = people.find((person) => person.id.toString() === props.match.params.id);
					return (
						<Form {...props} initialPerson={person} submitPerson={editPerson} buttonText="Edit Person" />
					);
				}}
			/>
		</div>
	);
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Form from '../src/components/Form/Form';

// function App () {
// 	const [
// 		team,
// 		setTeam
// 	] = useState([]);

// 	const addMember = (member) => {
// 		setTeam([
// 			...team,
// 			member
// 		]);
// 	};

// 	console.log(team, 'Team');
// 	return (
// 		<div className="App">
// 			<h2> Team Members </h2>
// 			<div>
// 				{team.map((member, index) => {
// 					return (
// 						<div key={index}>
// 							<p>
// 								<button className="edit-btn">edit</button>
// 								{member.username}
// 							</p>
// 							<p>{member.role}</p>
// 							<p>{member.email}</p>
// 						</div>
// 					);
// 				})}
// 			</div>
// 			<Form setter={addMember} />
// 		</div>
// 	);
// }

// export default App;
