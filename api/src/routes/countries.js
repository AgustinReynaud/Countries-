const { Router } = require('express');
const { default: axios } = require("axios");
const { Country, Tourist_activity } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();

router.use(async (req, res, next) => {
  const countries = await Country.count();
  if (!countries) {
    const apiResult = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    const array_country = apiResult.data.map((country) => ({
      alpha3Code: country.alpha3Code,
      name: country.name,
      flag: country.flag,
      region:country.region,
      capital: country.capital,
      subregion:country.subregion,
      area: country.area,
      population: country.population,
    }));
    //con hook ingreso mucha info de una 
    await Country.bulkCreate(array_country);
  }
  next();
});

router.get("/country", async (req, res) => {
  let countries;
  let { name } = req.query;
  if (name) {
    name = name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    countries = await Country.findAll({
      where: {
        name: {
          //comparo ,y like busca por caracter ingresado.
          [Op.like]: `%${name}%`,
        },
      },
      include: { model: Tourist_activity, required: false },
    });
    return  res.json(countries) ;
  }

  let { region } = req.query;
  if (region) {
    region = region
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    let countries2 = await Country.findAll({
      where: {
        region: {
          //comparo ,y like busca por caracter ingresado.
          [Op.like]: `%${region}%`,
        },
      },
      include: { model: Tourist_activity, required: false },
    });
    return countries2 ? res.json(countries2) : res.sendStatus(404);
  }
 countries = await Country.findAll({
    attributes: ["alpha3Code", "name", "flag",  "population","subregion"],
    include: { model: Tourist_activity, required: false },
  });
  return res.json(countries);
});


router.get("/countries/:idCountry", (request, response) => {

  const idCountry = request.params.idCountry;
  console.log(idCountry);

  if (idCountry) {
    //primera q encuentre
    Country.findOne({
      where: {
        alpha3Code: idCountry
      },
      include: [
        {
          model: Tourist_activity,
        }
      ],
    })
      .then((idCountry) => {
        response.status(200).json(idCountry);
      })
      .catch((err) => {
        return response.status(400).send({ data: err });
      })
  }

})


module.exports = router;







