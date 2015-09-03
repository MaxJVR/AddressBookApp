myApp.controller('PersonCreateCtrl', ['$scope','$modalInstance','Person', function($scope,$modalInstance,Person){
  console.log('PersonCreateCtrl running');

  $scope.newPerson={
    firstName:'',
    lastName:'',
    notes:''
  };

  $scope.addPerson = function  () {
    // console.log('created', $scope.newPerson);
    var newPerson = new Person($scope.newPerson);
    newPerson.$save().then(function  () {
      $modalInstance.close();
      }).catch(function  (err) {
      console.log('err',err);
    })
  }

  $scope.cancel = function  () {
    $modalInstance.dismiss();
  }

}]);