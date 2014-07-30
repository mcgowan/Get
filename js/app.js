var App = angular.module('App', [])
.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}).directive('appResize', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
			element.on('resize', function (e) {
				scope.$apply(scope.resize(e));
			});            
        }
    };
}).directive('appEsc', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            angular.element($window).on('keyup', function(e) {
                if (e.keyCode === 27)
                    scope.$apply(scope.hide());
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
}).directive('appScroll', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.scrollTop = $(window).scrollTop();
            angular.element($window).on('scroll', function(e) {
                scope.$apply(scope.scrollTop = $(window).scrollTop());
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

