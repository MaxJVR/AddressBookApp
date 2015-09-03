myApp.controller('HomeCtrl', ['$scope','$modal','Person', function($scope,$modal,Person){
  console.log('HomeCtrl running');

  $scope.persons = []

  Person.query().then(function  (persons) {
    // console.log(persons);
    $scope.persons = persons
  })

  $scope.createPerson = function  (person) {
    // console.log('create',person);
    $modal.open({
      templateUrl:'/views/person/createModal.html',
      controller:'PersonCreateCtrl',
    })
  }

  $scope.updatePerson = function  (person) {
    // console.log('update',person);
    $modal.open({
      templateUrl:'/views/person/updateModal.html',
      controller:'PersonUpdateCtrl',
      resolve:{
        updatePerson:function  () {
          return person;
        }
      }
    })
  }

  $scope.deletePerson = function  (person) {
    person.$delete();
  }





}]);