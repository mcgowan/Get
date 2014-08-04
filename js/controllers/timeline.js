App.controller('TimelineCtl', function TimelineCtl($rootScope, $scope) {

    var getDateRangeText = function(days) {
    	return moment().subtract('days', days).format('MMMM D, YYYY').toUpperCase() + ' - ' + moment().format('MMMM D, YYYY').toUpperCase();
    };

    var getParams = function() {
    	return { 
    		customerIndex: $scope.customerIndex,
    		balanceLines: parseInt($scope.balanceLines), 
    		showAccountInfo: $scope.showAccountInfo,
    		showProductStatus: $scope.showProductStatus,
    		showAlertCounts: $scope.showAlertCounts,
    	}
    };

    $scope.init = function() {
		$scope.customerIndex = 0;
		$scope.balanceLines = 4;
		$scope.showAccountInfo = true;
		$scope.showProductStatus = false;
		$scope.showAlertCounts = true;

		$scope.timeline = new Timeline($rootScope, 'customer_timeline');
		$scope.timeline.draw(getParams());

	    $scope.selector = '#timelineSettingsCtl';

		var days = $scope.timeline.getDays();
		$scope.dateRange = getDateRangeText(days);
    };

	$scope.resize = function(event) {
		$scope.timeline.redraw(getParams());

		var days = $scope.timeline.getDays();
		$scope.dateRange = getDateRangeText(days);
	};

	$scope.show = function() {
		$scope.style = { pos: { x: 10, y: 47 }, display: 'block' };
	};

	$scope.apply = function() {
		// TODO: apply settings
		$scope.resize();


		$scope.cancel();
	};

	$scope.cancel = function() {
		$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
	};

	$scope.hide = function() {
		$scope.$apply(function(){
			// $scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
			$scope.cancel();
		});
	};

    $scope.init();
});