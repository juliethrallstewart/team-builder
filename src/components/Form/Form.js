import React, { useState } from 'react';

export default function Form (props) {
	const [
		user,
		setUser
	] = useState({});

	let addMember = props.setter;

	function handleChange (event) {
		const updatedUser = { ...user, [event.target.name]: event.target.value };
		console.log('handleChange', event.target.name, event.target.value, updatedUser);
		setUser(updatedUser);
	}

	function handleSubmit (event) {
		event.preventDefault();
		addMember(user);

		console.log('username', user);
	}

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Signup</legend>
				<div className="form">
					<label for="username" className="">
						Username
						<div className="inputField">
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Enter your username"
								value={user.username}
								onChange={handleChange}
							/>
						</div>
					</label>
				</div>
				<div className="inputField">
					<label>Role</label>
					<input
						type="text"
						className="form-control"
						name="role"
						aria-describedby=""
						placeholder="Enter role"
						value={user.role}
						onChange={handleChange}
					/>
				</div>
				<div className="inputField">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						name="email"
						placeholder="email"
						onChange={handleChange}
						value={user.email}
					/>
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</fieldset>
		</form>
	);
}
