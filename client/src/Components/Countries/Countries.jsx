import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Country from '../Country/Country';
import { getCountries, getCountry } from '../../Actions/Index'
import './Countries.css'
import next from '../Images/next.png'
import back from '../Images/back.png'

export function Countries(props) {

	const [numeroPagina, setNumeroPagina] = useState(1);

	const grupo = 10;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;

	//copia array
	const countries = props.countries.slice(conteoInicial, conteoFinal)

	useEffect(() => {
		props.getCountries()

	}, [])
	if (numeroPagina < 1) {
		setNumeroPagina(1)
		return;

	}
	if (numeroPagina > 25) {
		setNumeroPagina(25)
		return;
	}
	return (
		<div className="countries">


			<div className="contenedor">
				{  countries ? countries.map(c =>
					<div className="divcountry">
						<Country
							name={c.name}
							flag={c.flag}
							subregion={c.subregion}
							alpha3Code={c.alpha3Code} />
					</div>):(<h2>"No existe el pais"</h2>)}


				<div className='paginationBtns'>

					<button onClick={() => setNumeroPagina(numeroPagina - 1)}><img src={back} width='40px'></img></button>

					<button className='numeroPag'>{numeroPagina}</button>

					<button onClick={() => setNumeroPagina(numeroPagina + 1)}><img src={next} width='40px'></img></button>

				</div>
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
		getCountries: () => dispatch(getCountries()),
		getCountry: nombre => dispatch(getCountry(nombre))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)