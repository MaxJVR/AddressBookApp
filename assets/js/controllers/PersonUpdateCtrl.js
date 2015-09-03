myApp.controller('PersonUpdateCtrl', ['$scope','$modalInstance','Person','updatePerson', function($scope,$modalInstance,Person,updatePerson){
  console.log('PersonUpdateCtrl running');

  $scope.newPerson ={
    firstName:updatePerson.firstName,
    lastName:updatePerson.lastName,
    notes:updatePerson.notes
  }

  $scope.updatePerson = function  () {
    updatePerson.firstName = $scope.newPerson.firstName,
    updatePerson.lastName = $scope.newPerson.lastName,
    updatePerson.notes = $scope.newPerson.notes,
    updatePerson.$save().then(function  () {
      $modalInstance.close();
    })
  }

  $scope.cancel = function  () {
    $modalInstance.dismiss();
  }

}]);