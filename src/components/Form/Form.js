import React, { useState } from 'react';

const Form = (props) => {
	console.log(props);
	// const setPeople = props.setPeople;
	const { submitPerson, initialPerson, buttonText, history } = props;
	// const [person, setPerson] = useState({name: "", email: "", role: ""});
	const [
		person,
		setPerson
	] = useState(initialPerson || { name: '', email: '', role: '' });

	//console.log(person, 'initialperson');
	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
		console.log('handleChange', event.target.name, event.target.value, person);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		submitPerson(person);
		setPerson({ name: '', email: '', role: '' });
		history.push('/');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="name" value={person.name} name="name" onChange={handleChange} />
			<input placeholder="email" value={person.email} name="email" onChange={handleChange} />
			<input placeholder="role" value={person.role} name="role" onChange={handleChange} />
			<button type="submit">{buttonText}</button>
		</form>
	);
};

export default Form;

// import React, { useState } from 'react';

// export default function Form (props) {
// 	const [
// 		user,
// 		setUser
// 	] = useState({});

// 	let addMember = props.setter;

// 	function handleChange (event) {
// 		const updatedUser = { ...user, [event.target.name]: event.target.value };
// 		console.log('handleChange', event.target.name, event.target.value, updatedUser);
// 		setUser(updatedUser);
// 	}

// 	function handleSubmit (event) {
// 		event.preventDefault();
// 		addMember(user);

// 		//console.log('usernames', user);
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<fieldset>
// 				<legend>Signup</legend>
// 				<div className="form">
// 					<label htmlFor="username" className="">
// 						Username
// 						<div className="inputField">
// 							<input
// 								type="text"
// 								className="form-control"
// 								name="username"
// 								placeholder="Enter your username"
// 								value={user.username}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</label>
// 				</div>
// 				<div className="inputField">
// 					<label htmlFor="role">Role</label>
// 					<input
// 						type="text"
// 						className="form-control"
// 						name="role"
// 						aria-describedby=""
// 						placeholder="Enter role"
// 						value={user.role}
// 						onChange={handleChange}
// 					/>
// 				</div>
// 				<div className="inputField">
// 					<label htmlFor="email">Email</label>
// 					<input
// 						type="email"
// 						className="form-control"
// 						name="email"
// 						placeholder="email"
// 						onChange={handleChange}
// 						value={user.email}
// 					/>
// 				</div>
// 				<button type="submit" className="btn">
// 					Submit
// 				</button>
// 			</fieldset>
// 		</form>
// 	);
// }
