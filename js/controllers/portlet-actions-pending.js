App.controller('PortletPendingActionsCtl', function PortletPendingActionsCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
        $scope.items =  [
            { ProductName: 'Internet Advanced', Action: 'Wait for Payment', ActionDate: moment([2015, 1, 1]).format('MM-DD-YYYY') },
            { ProductName: 'Internet Modem', Action: 'Shipping Order', ActionDate: 'Pending Payment' },
            { ProductName: 'Internet Modem', Action: 'Installation Work Order', ActionDate: 'Pending Payment' },
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});