App.controller('PopupCtl', function PopupCtl($rootScope, $scope) {
    var offset = { x: 0, y: -30 };

    $scope.init = function() {
	    var show = $rootScope.$on('POPUP_SHOW', function(event, param){
	    	$scope.show(param);
	    });

	    var hide = $rootScope.$on('POPUP_HIDE', function(event, param){
	    	$scope.hide();
	    });

	    $scope.selector = '#popupCtl';

	    $scope.$on('$destroy', show);
	    $scope.$on('$destroy', hide);
    };

	$scope.show = function(params) {
		// $scope.title = 'Events for ' + params.product + ' on ' + params.day.format('MMMM Do YYYY');
		
		$scope.$apply(
			$scope.style = { pos: { x: params.coords.x, y: params.coords.y + $scope.scrollTop }, display: 'block' }
		);



		// $scope.events = params.events;
	};

	$scope.hide = function() {
		$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
	};

    $scope.init();
});