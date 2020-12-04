const pizzas = require('../database/pizzas')

const PizzasController = {
    getPizza: (req,res)=>{
        const {id} = req.params;

       // res.send(pizzas[id]);

        res.render('pizza',{pizza: pizzas[id]})
    }
}

module.exports = PizzasController