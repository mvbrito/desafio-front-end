app.factory("dataAPI", function($http) {
    var _getData = function() {
        return $http.get("data.json");
    };
    return {
        getData: _getData
    }
});