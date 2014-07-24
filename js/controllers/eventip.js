App.controller('EventipCtl', function EventipCtl($rootScope, $scope) {
    var offset = { x: 0, y: -30 };

    $scope.init = function() {

	    var show = $rootScope.$on('EVENTIP_SHOW', function(event, param){
	    	$scope.show(param);

	    	console.log('EventipCtl.show');
	    });

	    $scope.selector = '#eventipCtl';

	    // var hide = $rootScope.$on('TOOLTIP_HIDE', function(event, param){
	    // 	$scope.hide();
	    // });

	    // $scope.$on('$destroy', show);
	    // $scope.$on('$destroy', hide);

	    // $scope.mouse = { x: 0, y: 0 };

	    // $scope.text = '';
    };

	$scope.show = function(params) {
		$scope.$apply(function() {
			

			// $scope.style = { pos: { x: $scope.mouse.x + offset.x, y: $scope.mouse.y + offset.y }, display: 'block' };
			$scope.style = { pos: { x: params.coords.x, y: params.coords.y }, display: 'block' };


		});
	};

	$scope.hide = function() {
		$scope.$apply(function() {
			$scope.style = { pos: { x: 0, y: 0 }, display: 'none' };
		});
	};

	// var setText = function(tip) {
	// 	$scope.$apply(function() {
	// 		$scope.text = tip;
	// 	});
	// };

    $scope.init();
});