App.controller('PortletTransactionsRecentCtl', function PortletTransactionsRecentCtl($rootScope, $scope) {
    $scope.init = function() {
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
    	$scope.items = [
			{ Description: 'Subscription Fee', Amount: 550.00, FromDate: moment([2015, 1, 1]), ToDate: moment([2015, 1, 1]), CreationDate: moment([2015, 1, 1]), InvoiceNumber: 20031 },
			{ Description: 'Installation Fee', Amount: 120.00, FromDate: moment([2015, 1, 1]), ToDate: moment([2015, 1, 1]), CreationDate: moment([2015, 1, 1]), InvoiceNumber: 10089 }
        ];
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

    $scope.init();
});