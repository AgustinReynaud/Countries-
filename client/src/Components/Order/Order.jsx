import React from 'react'
import { connect } from 'react-redux';

import {sort, sortHab, ASD, DES, HASD, HDES} from '../../Actions/Index.js';

import './Order.css'

export function Order(props){

	function handleDispatchOrder(event) {
    if (event.target.value === ASD || event.target.value === DES) {
      		props.sort(event.target.value, props.countries)
    	}
  	}
  	function handleDispatchHab(event) {
    if (event.target.value === HASD || event.target.value === HDES) {
      		props.sortHab(event.target.value, props.countries)
    	}
  	}

  	return(
  		<div className="divG">

		  		<select className="Alpha" onChange={handleDispatchOrder}>
				    <option>Order Alphabetically</option>
				    <option value={ASD}>Ascendant</option>
				    <option value={DES}>descendant</option>
				 </select>

				<select className="population" onChange={handleDispatchHab}>
				    <option>Order by Habitants</option>
				    <option value={HASD}>Ascendant</option>
				    <option value={HDES}>descendant</option>
				 </select>
			

  		</div>
  	)
}

function mapStateToProps(state){
	return {
		countries: state.countries

	}
}

function mapDispatchToProps(dispatch){
	return {
		sort: (a, b) => dispatch(sort(a, b)),
		sortHab: (a, b) => dispatch(sortHab(a, b))
	}}

export default connect(mapStateToProps,mapDispatchToProps)(Order)