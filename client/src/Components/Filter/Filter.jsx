import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './Filter.css'

import { filtroReg, changeCountries, getActivities, getCountries } from '../../Actions/Index.js'

export function Filtros(props) {

	useEffect(() => {
		props.getActivities()
	}, [])

	function handleDispatchCont(event) {
		props.filtroReg(event.target.value)
	}
	function handleDispatchAct(event) {
		props.changeCountries(event.target.value)

	}


	return (
		<div className="filtros" key='1000' >
			<select className="filtroContinente" name="region" onChange={handleDispatchCont} key='1006'>
				<option value="" key="1001">Filter by Continent</option>
				<option value="Europe" key="1002">Europe</option>
				<option value="Americas" key="1003">Americas</option>
				<option value="Asia" key="1004">Asia</option>
				<option value="Oceania" key="1005">Oceania</option>
				<option value="Africa" key="1006">Africa</option>
				<option value="Polar" key="1007">Polar</option>
			</select>

			<select className="filtroActividades" name="activity" onChange={handleDispatchAct} key='2002'>
				<option value="" key='2003'>Filter by Tourist Activity</option>
				{props.activities && props.activities.map(s => (
					<option >{s.name}</option>




				))}
			</select>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		countries: state.countries,
		activities: state.activities,

	}
}

function mapDispatchToProps(dispatch) {
	return {
		filtroReg: (a, b) => dispatch(filtroReg(a, b)),
		getActivities: () => dispatch(getActivities()),
		changeCountries: (name) => dispatch(changeCountries(name)),
		getCountries: () => dispatch(getCountries()),

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros)