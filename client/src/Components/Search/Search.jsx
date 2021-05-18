import React, { useState } from 'react';

import { connect } from 'react-redux';

import { getCountry } from '../../Actions/Index'
import './Search.css'

export function Search(props) {
	const [input, setInput] = useState({
		name: "",
	})

	function handleChange(e) {
		setInput({
			name: e.target.value
		})
	};

	function handleSubmit(e) {
		e.preventDefault()

		if (input.name) {
			props.getCountry(input.name)
		}else if (!input.name ){
			alert("Nombre invalido")
		}


	}

	return (

		<div className="input">
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					className="input"
					type="text"
					placeholder="Search Country..."
					name="name"
					value={input.name}
					onChange={(e) => handleChange(e)}

				/>
				
				<button type="submit" className="button">Search</button>

			</form>
			<div>
				
			</div>
		</div>

	)
}

function mapStateToProps(state) {
	return {
		countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCountry: name => dispatch(getCountry(name))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)