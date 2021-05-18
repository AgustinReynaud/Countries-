import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

export function Country(props) {
	return (
		<div className="card">
			<div className="imgn">
				<img src={props.flag} alt={props.name} className='imaa' />
			</div>
			<div className="datos">
				<div className="nombre">
					<h1>{props.name}</h1>
					<h2>{props.subregion}</h2>
				</div>
				<Link to={`/home/detail/${props.alpha3Code}`}>
					<button className="detail">Country Detail</button>
				</Link>
			</div>
		</div>
	)
}

export default Country