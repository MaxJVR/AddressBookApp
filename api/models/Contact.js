/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string',
      required:true
    },
    email:{
      type:'string'
      // email:true
    },
    streetAddress:{
      type:'string',
      required:true
    },
    city:{
      type:'string',
      required:true
    },
    state:{
      type:'string',
      required:true
    },
    zip:{
      type:'integer',
      required:true
    },
    phone:{
      type:'string',
      required:true
    },
    //Associations
    person:{
      model:'Person',
      defaultsTo: null
    }

  }
};

