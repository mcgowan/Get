App.controller('ShellCtl', function ShellCtl($scope, $state, $rootScope) {
	$scope.init = function() {
		$state.go('main'); //default to...
	};

	$scope.init();

});