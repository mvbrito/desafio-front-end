app.controller("infoCtrl", function($scope, $http, dataAPI) {
  var loadDataMain = function() {
    dataAPI.getData().then(function(data) {
      $scope.dataMain = data.data.section[0]
    });
  }

  var loadDataBrasil = function() {
    dataAPI.getData().then(function(data) {
      $scope.dataBrasil = data.data.section[1]
    });
  }

  var loadDataMundo = function() {
    dataAPI.getData().then(function(data) {
      $scope.dataMundo = data.data.section[2]
    });
  }

  loadDataMain();
  loadDataBrasil();
  loadDataMundo();

  $(document).ready(function(){
    $('#btMenu').on('click', function() {
      $('#btMenu').toggleClass("lnk-menu-ativo");
      $('#cntSbmn').toggleClass("ativo");
      e.preventDefault();
    });
  });


});
