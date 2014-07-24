var App = angular.module('App', [])
.directive('appResize', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
			element.on('resize', function (e) {
				scope.$apply(scope.resize(e));
			});            
        }
    };
}).directive('appMouseMove', function($document) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            angular.element($document).on('mousemove', function(e) {
                scope.$apply(scope.mouse = { x: e.pageX, y: e.pageY - $(window).scrollTop() });
            });
        }
    };
}).directive('appClickOutside', function($document) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            angular.element($document).on('mouseup', function(e) {
                var container = $(scope.selector);
                if (!container.is(e.target)
                    && container.has(e.target).length === 0) {
                    scope.hide();
                }
            });
        }
    };
});

