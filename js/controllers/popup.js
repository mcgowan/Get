App.controller('PopupCtl', function PopupCtl($rootScope, $scope) {
    var offset = { x: 0, y: -30 };

    $scope.init = function() {
	    var show = $rootScope.$on('POPUP_SHOW', function(event, param){
	    	$scope.show(param);
	    });

	    var hide = $rootScope.$on('POPUP_HIDE', function(event, param){
	    	$scope.hide();
	    });

	    $scope.$on('$destroy', show);
	    $scope.$on('$destroy', hide);

	    $scope.selector = '#popupCtl';
	    $scope.itemType = 'default';
    };

	$scope.show = function(params) {
		$scope.$apply(function(){
			$scope.itemType = params.itemType;
			$scope.style = { pos: { x: params.coords.x, y: params.coords.y + $scope.scrollTop }, display: 'block' };
			$scope.title = params.data.title;
			$scope.items = params.data.items;
		});
	};

	$scope.hide = function() {
		$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
	};

    $scope.init();
});