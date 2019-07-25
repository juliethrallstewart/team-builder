import React, { useState, useEffect } from 'react';
import './App.css';
import Form from '../src/components/Form/Form';
import './Data/Data';

function App () {
	const [
		team,
		setTeam
	] = useState([]);

	const addMember = (member) => {
		setTeam([
			...team,
			member
		]);
	};

	console.log(team);
	return (
		<div className="App">
			<h2> Team Members </h2>
			<div>
				{team.map((member) => {
					return (
						<p>
							{`${member.username}`}
							{`${member.role}`}
							{`${member.email}`}
						</p>
					);
				})}
			</div>
			<Form setter={addMember} />
		</div>
	);
}

export default App;
