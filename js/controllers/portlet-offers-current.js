App.controller('PortletOffersCurrentCtl', function PortletOffersCurrentCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [ 
    		{ Product: 'TV Platinum', Description: 'Early Bird 10% Off', EndDate: moment([2014, 11, 31]) }
		];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});