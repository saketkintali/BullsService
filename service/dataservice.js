/**
 * Created by saketmohan on 10/8/15.
 */
(function(){
    'use strict';
    var appRoot = angular.module('bullsfirst');

    appRoot.service("dataService",dataService);

    function dataService($http) {

        function fetchData() {
            return $http.get('data/data.json')
        }

        return {
            fetchData: fetchData
        }
    }




})();