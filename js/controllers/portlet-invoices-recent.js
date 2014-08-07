App.controller('PortletInvoicesRecentCtl', function PortletInvoicesRecentCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [
            { InvoiceNumber: 20031, Amount: 550, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 550},
            { InvoiceNumber: 10089, Amount: 120, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 120},
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});