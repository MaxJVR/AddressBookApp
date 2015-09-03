myApp.factory('Person', ['sailsResource', function(sailsResource){
  return sailsResource('Person');
}])