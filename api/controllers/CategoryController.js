/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addPerson: function  (req,res) {
    // res.send("person")
    Person.findByfirstName('Max').then(function  (person) {
      person.categorys.add({name:'Epic'})
    })
  }
};

