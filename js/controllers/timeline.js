App.controller('TimelineCtl', function TimelineCtl($rootScope, $scope) {

    var setDateRangeText = function() {
		var padding = 55;
		var days = $scope.timeline.getDays();
		$scope.dateRange = moment().subtract('days', days).format('MMMM D, YYYY').toUpperCase() + ' - ' + moment().format('MMMM D, YYYY').toUpperCase();
		$scope.rangeTextWidth = $scope.dateRange.dim('15px "Open Sans"').w + padding;
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
    	$scope.expanded = true;
    	$scope.iconSource = 'images/up.svg';
		$scope.customerIndex = 0;
		$scope.balanceLines = 4;
		$scope.showAccountInfo = true;
		$scope.showProductStatus = false;
		$scope.showAlertCounts = true;

		$scope.timeline = new Timeline($rootScope, 'customer_timeline');
		$scope.timeline.draw(getParams());

	    $scope.selector = '#timelineSettingsCtl';

	    setDateRangeText();
    };

    $scope.toggleShow = function() {
    	$scope.expanded = !$scope.expanded;
		$scope.expanded ? $scope.iconSource = 'images/up.svg' : $scope.iconSource = 'images/down.svg';
    };

	$scope.resize = function(event) {
		$scope.timeline.redraw(getParams());
	    setDateRangeText();
	};

	$scope.show = function() {

		var x = $scope.timeline.getClientWidth() - 265;
		

		$scope.style = { pos: { x: x, y: 36 }, display: 'block' };
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