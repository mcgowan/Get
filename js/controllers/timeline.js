App.controller('TimelineCtl', function TimelineCtl($scope) {
    $scope.init = function() {
		$scope.timeline = new Timeline('customer_timeline');
		$scope.timeline.draw();
    };

	$scope.resize = function(event) {
		$scope.timeline.draw();
	};

    $scope.init();
});