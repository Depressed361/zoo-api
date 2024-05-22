//const express = require('express'); 
//const mysql = require('mysql2');
//const app = express();
//const port = 3000;
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const AvisModel = require('../avis');
const HabitatModel = require('../habitat');
const AnimalModel = require('../animal');
const ImageModel = require('../image');
const RaceModel = require('../race');
const RapportModel = require('../rapport_veterinaire');
const RoleModel = require('../role');
const ServiceModel = require('../service');
const UtilisateurModel = require('../utilisateur');
const animal = require('../animal');
//const animal = require('../animal');
//const animal = require('../animal');

const sequelize = new Sequelize(
  'zoo-de-broceliande',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      timezone :'Etc/GMT-2'},

    logging: false

  })
  sequelize.authenticate().then(_=> console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

  const Animal = AnimalModel(sequelize, DataTypes);
  const Avis = AvisModel(sequelize, DataTypes);
  const Habitat = HabitatModel(sequelize, DataTypes);
  const Image = ImageModel(sequelize, DataTypes);
  const Race = RaceModel(sequelize, DataTypes);
  const Rapport = RapportModel(sequelize, DataTypes);
  const Role = RoleModel(sequelize, DataTypes);
  const Service = ServiceModel(sequelize, DataTypes);
  const Utilisateur = UtilisateurModel(sequelize, DataTypes);




  
  
  const initDb = () => {
    return sequelize.sync({ force: true }).then(_ => {
      Animal.create({
       /* prenom:Animal.prenom,
        etat: Animal.etat,
        habitat_id: Animal.habitat_id,
        espece: Animal.espece,
        image_animal: Animal.image_animal,*/
      
      })
        .then(animal => console.log(animal.toJSON()))
        .catch(err => console.error(err));
      console.log('Database & tables created!');
    });
  };
   module.exports = {initDb, Animal, }
  
  
  

  