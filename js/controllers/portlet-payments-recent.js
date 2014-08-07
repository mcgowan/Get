App.controller('PortletPaymentsRecentCtl', function PortletPaymentsRecentCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 10010 },
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 18020 },
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 18030 },
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 18040 },
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 18050 },
            { Description: 'Payment Received', Amount: 129.99, CreationDate: moment([2015, 1, 1]), DepositDate: moment([2015, 1, 1]), InvoicePaid: 18060 },
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});