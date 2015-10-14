(function() {
    'use strict';
    var appRoot = angular.module('bullsfirst');

    appRoot.controller('AccountsController',['dataService',AccountsController]);

    function AccountsController(dataService){
        var vm=this;

        dataService.fetchData().success(function(edata){
            vm.empl = edata;

            for (var i = 0; i < vm.empl.length; i++) {
                vm.totals.marketValue += vm.empl[i].marketValue;
                vm.totals.cash += vm.empl[i].cash;
            }
        });

        vm.totals = {
            name: '',
            marketValue: 0,
            cash: 0,
            legend: 'none'
        };

        vm.addAccount = function () {
            vm.empl.push({
                name: 'New Account',
                marketValue: Math.random() * 100000,
                cash: Math.random() * 400000,
                legend: 'cyan'
            });
        }

    }


})();