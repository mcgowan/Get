var App = angular.module('App', [])
.directive('appResize', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            // angular.element($window).on('resize', function(e) {
            //     scope.$apply(scope.resize(e));
            // });

            // angular.element().on('resize', function(e) {
            //     scope.$apply(scope.resize(e));
            // });

			element.on('resize', function (e) {
				scope.$apply(scope.resize(e));
			});            
			
        }
    };
});

