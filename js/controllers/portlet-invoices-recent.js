App.controller('PortletInvoicesRecentCtl', function PortletInvoicesRecentCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [
            { InvoiceNumber: 10010, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
            { InvoiceNumber: 10020, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
            { InvoiceNumber: 10030, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
            { InvoiceNumber: 10040, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
            { InvoiceNumber: 10050, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
            { InvoiceNumber: 10060, Amount: 129.99, InvoiceDate: moment([2015, 1, 1]), DueDate: moment([2015, 1, 1]), AmountPaid: 129.99},
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});