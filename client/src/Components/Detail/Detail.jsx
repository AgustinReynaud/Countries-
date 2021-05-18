import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../Actions/Index';
import Footer from '../Footer/Footer'

import './Detail.css';


function Detalles(props) {

	useEffect(() => {
		const alpha3Code = props.match.params.idPais;
		props.getCountryDetail(alpha3Code)
	}, [])

	return (

		<div className="contenidoP">
			<div className="contenidoS">
				<div className="ContenidoT">
					<div className='ordenador'>
					<img src={props.countryDetail.flag} alt={props.countryDetail.name} width="400px" height="300" className="imagenn" />
						<div className="Tarjeta">
							<h1>{props.countryDetail.name}</h1>
							<h2>{props.countryDetail.continent}</h2>
							<h3>Alpha3Code: {props.countryDetail.alpha3Code}</h3>
							<p>Capital: {props.countryDetail.capital}</p>
							<p>Subregión: {props.countryDetail.subregion}</p>
							<p>Región: {props.countryDetail.region}</p>
							<p>Area: {props.countryDetail.area}km2 </p>
							<p>Population: {props.countryDetail.population} </p>
						</div>
					</div>
					<br />
					<div className="abajo">
						<div className="dactiv">
							<div className="Tarjeta1">

								{console.log(props.countryDetail)}
								<p >{props.countryDetail.tourist_activities && props.countryDetail.tourist_activities.map(c =>
									<div>
										<div>
											<div className="ddatos">
												Activity: {c.name}
												<br />
											</div>
										</div>
										<div >
											<div className="ddatos">
												Difficulty: {c.difficulty} <br />
									</div>
											
										</div>
										<div >
											<div className="ddatos">
												Duration: 	{c.duration}<br />
										
										</div>

										</div>
										<div>
											<div >
												Season: {c.season}<br /><br />

									</div>
									<hr/>
											
										</div>
									</div>
								)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)

}

function mapStateToProps(state) {
	return {
		countryDetail: state.countryDetail,
		activities: state.activities
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCountryDetail: (alpha3Code) => dispatch(getCountryDetail(alpha3Code))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalles)