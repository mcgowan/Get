App.controller('TimelineCtl', function TimelineCtl($rootScope, $scope) {
    var getDateRangeText = function(days) {
    	return moment().subtract('days', days).format('MMMM D, YYYY').toUpperCase() + ' - ' + moment().format('MMMM D, YYYY').toUpperCase();
    };

    $scope.init = function() {
		$scope.timeline = new Timeline($rootScope, 'customer_timeline');
		$scope.timeline.draw();

		var days = $scope.timeline.getDays();
		$scope.dateRange = getDateRangeText(days);
    };

	$scope.resize = function(event) {
		$scope.timeline.redraw();

		var days = $scope.timeline.getDays();
		$scope.dateRange = getDateRangeText(days);
	};

    $scope.init();
});