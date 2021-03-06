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
    fetchNotes();

    $scope.updateMessage = function(note){
        //POST
        console.log(note);
        $http.post('/add', note).then(fetchNotes());
    };
}]);

myApp.controller('DirectiveController', ['$scope',
    function ($scope) {
        $scope.people = [];

        $scope.$watch('people', function () {
            $scope.person1 = ($scope.people[0] ? $scope.people[0] : null);
            $scope.person2 = ($scope.people[1] ? $scope.people[1] : null);
            $scope.person3 = ($scope.people[2] ? $scope.people[2] : null);
        })
    }
]);
