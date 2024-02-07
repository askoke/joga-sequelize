// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:password@localhost:3306/joga-sequelize');

// read model data for table representation
const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

// get all data from table
const getAllArticles = (req, res) => {
    Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

// exports controller functions
module.exports = {
    getAllArticles
};