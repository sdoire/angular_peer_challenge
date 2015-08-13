var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.notes = [];

    //$scope.heading = "Here is your message: ";

        //GET
    var fetchNotes = function(){
        return $http.get('/data').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch notes from the API');
            }
            $scope.note = {};
            $scope.notes = response.data;
            return response.data;
        })
    };
    $scope.add = function(note) {
        return $http.post('/add', note).then(fetchNotes);
    };
    fetchNotes();

    $scope.updateMessage = function(note){
        //POST
        console.log(note);
        $http.post('/add', note).then(fetchNotes());
    };
}]);