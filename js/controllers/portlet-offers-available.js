App.controller('PortletOffersAvailableCtl', function PortletOffersAvailableCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [
			{ Description: 'Triple Play, 15% Off First 6 Months', Expires: moment([2015, 1, 1]).format('MMM Do YYYY') },
			{ Description: 'PPV Package By 5 Get 6', Expires: 'Not Set' }
		];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});