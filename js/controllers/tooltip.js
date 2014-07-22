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

	    $scope.text = '';
    };

	$scope.show = function(tip) {
		setText(tip);
	};

	$scope.hide = function() {
		setText('');
	};

	var setText = function(tip) {
		$scope.$apply(function() {
			$scope.text = tip;
		});
	};

    $scope.init();
});