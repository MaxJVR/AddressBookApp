myApp.controller('PersonShowCtrl', ['$scope','$location','$routeParams','$modal','Person', function($scope,$location,$routeParams,$modal,Person){
  console.log('PersonShowCtrl running');

  $scope.person={}

  Person.get({id: $routeParams.id}).then(function  (person) {
    // console.log(post);
    $scope.person = person;
  })

  $scope.createContact = function  (contact) {
    // console.log('create',contact);
    $modal.open({
      templateUrl:'/views/contact/createModal.html',
      controller:'ContactCreateCtrl',
    })
  }

}]);