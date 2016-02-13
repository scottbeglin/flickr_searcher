(function () {
    angular.module('myApp', [])
        .controller('myController', myController);

    myController.$inject = ['$scope', '$http']

    function myController($scope, $http) {
        $scope.results = [];
        $scope.isSearching = false;

        $scope.search = function () {
            $scope.isSearching = true;
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: '610e4e1e2191386a42f9435e2d355dec',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {
                $scope.results = data;
                $scope.isSearching = false;
            }).error(function (error) {
                console.error(error);
                $scope.isSearching = true;
            });
        };
    }
})();
