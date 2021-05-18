import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTRO_REG = 'FILTRO_REG';
export const CHANGE_COUNTRIES = 'CHANGE_COUNTRIES';
export const SORT_HAB = 'SORT_HAB';
export const SORT_PAISES = 'SORT_PAISES';
export const ASD = 'Razas-A-Z';
export const DES = 'Razas-Z-A';
export const HASD = 'HABITANTES_ASD';
export const HDES = 'HABITANTES_DES';
export const POST_ACTIVITY = 'POST_ACTIVITY';

export function getCountries() {
    return function (dispatch) {
        return fetch('http://localhost:3001/country')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_COUNTRIES, payload: json })
            })
    }
}

export function getCountry(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/country?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_COUNTRY, payload: json })
            })
    }
}
export function getCountryCrear(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/country/${name}`)
            .then(response => response.json())
    }
}

export function getCountryDetail(alpha3Code) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/countries/${alpha3Code}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_COUNTRY_DETAIL, payload: json })
            })
    }
}

export function getActivities() {
    return function (dispatch) {
        return fetch('http://localhost:3001/activities')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_ACTIVITIES, payload: json })
            })
    }
}


export function filtroReg(region) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/country?region=${region}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_COUNTRY, payload: json })
            })
    }
}

export function changeCountries(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/activities?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: CHANGE_COUNTRIES, payload: json })
            })
    }
}
export function postActivity(data) {
    console.log(data);
    return function (dispatch) {
        return axios.post('http://localhost:3001/activity', data)
            .then(res => {

                console.log("RESPUESTA")
                console.log(res);
                console.log(" FIN RESPUESTA")
                dispatch({ type: POST_ACTIVITY, payload: res });


            })
    }
}

export function sort(orden, opaises) {
    let paises = [...opaises]

    paises.sort((a, b) => {



        var nombreA = a.name.toUpperCase()
        var nombreB = b.name.toUpperCase()


        if (orden === ASD) {
            if (nombreA < nombreB) {
                return -1;
            }
            if (nombreA > nombreB) {
                return 1
            }
            return 0
        }
        if (orden === DES) {
            if (nombreA < nombreB) {
                return 1;
            }
            if (nombreA > nombreB) {
                return -1
            }
            return 0
        }
    })
    return function (dispatch) {
        dispatch({ type: SORT_PAISES, payload: paises })
    }
}

export function sortHab(orden, oHabitantes) {
    let habitantes = [...oHabitantes]

    habitantes.sort(function (a, b) {

        var poblacionA = parseFloat(a.population)
        var poblacionB = parseFloat(b.population)



        if (orden === HASD) {
            if (poblacionA < poblacionB) {
                return -1;
            }
            if (poblacionA > poblacionB) {
                return 1
            }
            return 0
        }
        if (orden === HDES) {
            if (poblacionA < poblacionB) {
                return 1;
            }
            if (poblacionA > poblacionB) {
                return -1
            }
            return 0
        }
    })



    return function (dispatch) {
        dispatch({ type: SORT_HAB, payload: habitantes })
    }
}
