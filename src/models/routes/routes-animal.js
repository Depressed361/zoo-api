//const sequelize = require('../db/sequelize');  // Assurez-vous que le chemin est correct
const {Animal} = require('../db/sequelize.js');

module.exports = (app) => {
    app.post('/api/animal', (req, res) => {
        Animal.create(req.body)
            .then(Animal => {
                const message = ` ${req.body.prenom} a bien été crée.`
                res.json({ message, data: Animal })
            })
            .catch(err => {
                // Gérer l'erreur ici
                console.error(err);
                res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'animal' });
            });
    });


    app.get('/api/animal', (req, res) => {
        Animal.findAll()
            .then(Animal => {
                res.json(Animal);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des animaux' });
            });
    });

    app.get('/api/animal/:animal_id', (req, res) => {
        Animal.findByPk(req.params.animal_id)
            .then(Animal => {
                if (Animal === null) {
                    res.status(404).json({ error: 'Cet animal n\'existe pas' });
                } else {
                    res.json(Animal);
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'animal' });
            });
    });

    app.put('/api/animal/:animal_id', (req, res) => {
        Animal.findByPk(req.params.animal_id)
            .then(Animal => {
                if (Animal === null) {
                    res.status(404).json({ error: 'Cet animal n\'existe pas' });
                } else {
                    return Animal.update(req.body)
                        .then(Animal => {
                            const message = ` ${req.body.prenom} a bien été modifié.`
                            res.json({ message, data: Animal })
                        });
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Une erreur est survenue lors de la modification de l\'animal' });
            });
    });
}