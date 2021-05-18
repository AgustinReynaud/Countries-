import {GET_COUNTRY,GET_COUNTRY_DETAIL,GET_ACTIVITIES, GET_COUNTRIES, FILTRO_REG,CHANGE_COUNTRIES,SORT_PAISES, SORT_HAB,POST_ACTIVITY} from '../Actions/Index';

const initialState ={
    countryName:[],
    activity:[],
    countries:[],
    countryDetail:{},
    filtroCont:{},
    change_countries:{},
	countryAlpha3Code:[]
}

function rootReducer(state= initialState,action){
    if(action.type === GET_COUNTRY_DETAIL){
        return{
            ...state,
            countryDetail:action.payload,
            countryName:action.payload
        }
    }

	
    if (action.type === GET_COUNTRIES){
        return {
            ...state,
            countries:action.payload
        }
    }
    if (action.type === GET_COUNTRY){
		return{
			...state,
			countries: action.payload
		}
	}
    
    if (action.type === GET_ACTIVITIES){
		return{
			...state,
			activities: action.payload
		}
	}
	
    if (action.type === FILTRO_REG){
		return{
			...state,
			countries: action.payload
		}
	}
    if (action.type === CHANGE_COUNTRIES){
		return{
			...state,
			countries: action.payload
		}
	}
    if (action.type === SORT_PAISES){
		return{
			...state,
			countries: action.payload
		}
	}
    if (action.type === SORT_HAB){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === POST_ACTIVITY){
		return{
			...state,
			countryAlpha3Code: action.payload
			
		}
	}
    return state;
}
export default rootReducer;