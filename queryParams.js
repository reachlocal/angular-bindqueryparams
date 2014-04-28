angular
    .module('rl.QueryParams', []).factory('QueryParams', function ($rootScope, $location) {
        // Create an isolate scope
        var $scope = $rootScope.$new(true);

        function pushUpdatesFrom(fromCollection) {
            return {
                to: function (toCollection) {
                    // Push new elements into toCollection
                    angular.forEach(fromCollection, function (value, key) {
                        toCollection[key] = value;
                    });
                    // Remove deleted params from toCollection
                    angular.forEach(toCollection, function (value, key) {
                        if (key in fromCollection === false) {
                            delete toCollection[key];
                        }
                    });
                }
            };
        }

        $scope.queryParams = $location.search();
        $scope.$watchCollection(function () {
            return $location.search();
        }, function (newParams) {
            pushUpdatesFrom(newParams).to($scope.queryParams);
        });
        $scope.$watchCollection('queryParams', function (newParams) {
            $location.search(newParams);
        });

        return $scope.queryParams;
    });