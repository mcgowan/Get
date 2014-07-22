App.controller('TooltipCtl', function TooltipCtl($rootScope, $scope) {
    var offset = { x: 0, y: -30 };

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

	    $scope.text = '';
    };

	$scope.show = function(tip) {
		setText(tip);
		$scope.$apply(function() {
			$scope.style = { pos: { x: $scope.mouse.x + offset.x, y: $scope.mouse.y + offset.y }, display: 'block' };
		});
	};

	$scope.hide = function() {
		setText('');
		$scope.$apply(function() {
			$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
		});
	};

	var setText = function(tip) {
		$scope.$apply(function() {
			$scope.text = tip;
		});
	};

    $scope.init();
});