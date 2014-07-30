App.controller('TooltipCtl', function TooltipCtl($rootScope, $scope) {
    $scope.init = function() {

	    var show = $rootScope.$on('TOOLTIP_SHOW', function(event, param){
	    	$scope.show(param);
	    });

	    var hide = $rootScope.$on('TOOLTIP_HIDE', function(event, param){
	    	$scope.hide();
	    });

	    $scope.$on('$destroy', show);
	    $scope.$on('$destroy', hide);

	    $scope.mouse = { x: 0, y: 0 };
	    $scope.offset = { x: 0, y: -30 };

	    $scope.text = '';
    };

	$scope.show = function(params) {
		$scope.$apply(function() {
			$scope.text = params.text ? params.text : '';
			$scope.offset = params.offset ? params.offset : { x: 0, y: -30 };
			$scope.style = { pos: { x: $scope.mouse.x + $scope.offset.x, y: $scope.mouse.y + $scope.offset.y + $scope.scrollTop }, display: 'block' };
		});
	};

	$scope.hide = function() {
		$scope.$apply(function() {
			$scope.text = '';
			$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
		});
	};

    $scope.init();
});