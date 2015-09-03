myApp.controller('ContactCreateCtrl', ['$scope','$modalInstance','$routeParams','$location','Person','Contact', function($scope,$modalInstance,$routeParams,$location,Person,Contact){
  console.log('ContactCreateCtrl running');

  $scope.newContact={
    name:'',
    email:'',
    phone:'',
    streetAddress:'',
    city:'',
    state:'',
    zip:'',
  };

  $scope.addContact = function  (req,res) {
    // console.log('created', $scope.newContact);
    var newContact = new Contact($scope.newContact);
    newContact.$save().then(function  () {
      Person.get({id: $routeParams.id}).then(function  (person) {
        person.populate(newContact);
        $modalInstance.close();
      }).catch(function  (err) {
        console.log('err',err);
      })
    })
  }

  Person.find({id: $routeParams.id}).populate('')

  $scope.cancel = function  () {
    $modalInstance.dismiss();
  }

}]);