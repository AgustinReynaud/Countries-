import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getCountries } from '../../Actions/Index'
import './CreateActivity.css'
import Nav from '../Nav/Nav';
const CreateActivity = () => {
  const dispatch = useDispatch();
  const alpha3Code = useSelector(state => state.countryAlpha3Code)
  const countries = useSelector(state => state.countries)
  const [city, setCity] = useState([])
  const [pais, setPais] = useState([])
  const [paises, setPaises] = useState([])
  const [loading, setLoading] = useState(true)
  const [load, setLoad] = useState(true)
  const [form, setForm] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
  })
  const Filt = (arrayPaises) => {
    setPaises([]);
    let filteredPaises = arrayPaises;
    filteredPaises = filteredPaises.filter(p => p.activities && p.activities.length > 0)
    setPaises(filteredPaises)
  }

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handlePais = (event) => {
    event.preventDefault();
    const opciones = event.target.options;
    const seleccionadas = [];
    for (let i = 0; i < opciones.length; i++) opciones[i].selected && seleccionadas.push(opciones[i].value);
    setPais(seleccionadas)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(Object.assign(form, { pais: pais })))
    event.target.reset();
    alert('Activity Created')
    setTimeout(() => { dispatch(getCountries()) }, 500)
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      Filt(countries)
      setLoading(false)
    }, 1500)
  }, [load])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axios.get('http://localhost:3001/country');
      console.log(response.data);

      setCity(response.data);
      setLoading(false);

    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <Nav/>
      <>
        <form className='form' onSubmit={handleSubmit}>
          <div className='h2'> <span>Añadir una Actividad</span> </div>
          <div className='inputs'>
            <div className='input1'>
              <label>Name:</label>
              <input className='input1' type='text' name='name' onChange={handleInputChange} required />
            </div>
            <div className='input1'>
              <label>Difficulty(1-5):</label>
              <input className='input1' type='number' min="1" max="5" name='difficulty' onChange={handleInputChange} required />
            </div>
            <div className='input1'>
              <label>Durability(Horas): </label>
              <input className='input1' type='number' min="1" name='duration' onChange={handleInputChange} required />
            </div>

            <div className='input1'>
              <label>Season:</label>
              <select name='season' onChange={handleInputChange} required>
                <option className='button'></option>
                <option value='Verano' className='button'>Verano</option>
                <option value='Invierno' className='button'>Invierno</option>
                <option value='Otoño' className='button'>Otoño</option>
                <option value='Primavera' className='button'>Primavera</option>
              </select>
            </div>


            <div className='input1'>
              <label>Countries:</label>
              <select className='input1' multiple name='pais' onChange={handlePais} required>
                {city.length > 0 ? city.map((pais, i) => {
                  return <option value={pais.alpha3Code} key={pais.alpha3Code}>{pais.alpha3Code}</option>
                }) : <option >Cargando</option>}
              </select>
            </div>
            <input className='button' type='submit' value='Crear Actividad' />
          </div>
        </form>
      
      </>

    </div>
  )
}

export default CreateActivity