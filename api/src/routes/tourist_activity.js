const { Router } = require('express');
const { Country, Tourist_activity, country_activity } = require("../db.js");
const router = Router();
const { Op } = require("sequelize");

router.post("/activity", async (req, res) => {
  var { name, difficulty, duration, season, pais } = req.body;

  let actividad = await Tourist_activity.create({
    name,
    difficulty,
    duration,
    season
  })
  pais.forEach(async (paises) => {
      let country = await Country.findOne({
          where: { alpha3Code: paises }
      })
      //crea tabla intermedia , agrega los id 
      await actividad.addCountry(country)
  })
  res.status(201).send('Actividad correctamente!')
});

router.get('/activities', async(req, res) =>{
  
  let { name } = req.query;
  console.log(name)
  if (name) {
    name = name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    let countries2 = await Country.findAll({
      include:{
        model:Tourist_activity,
        where: {
          name:name
        },
        required:true
      }
    });
    console.log(countries2)
    return countries2 ? res.json(countries2) : res.sendStatus(404);
  }
	let act = await Tourist_activity.findAll()
                      
 	res.json(act)
})

module.exports = router;