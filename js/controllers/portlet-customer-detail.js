App.controller('PortletCustomerDetailCtl', function PortletCustomerDetailCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = false;
        $scope.items =  [
            { ProductName: 'Internet Advanced', Action: 'Wait for Payment', ActionDate: moment([2015, 1, 1]).format('MM-DD-YYYY') },
            { ProductName: 'Internet Modem', Action: 'Shipping Order', ActionDate: 'Pending Payment' },
            { ProductName: 'Internet Modem', Action: 'Installation Work Order', ActionDate: 'Pending Payment' },
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
    };

    $scope.mouseEnter = function() {
        $scope.hoverColor = '#88AED3';
    }

    $scope.mouseLeave = function() {
        $scope.hoverColor = '#BFBFBF';
    }

    $scope.init();
});