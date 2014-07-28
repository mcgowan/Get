var App = angular.module('App', [])



angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/Book/:bookId', {
          templateUrl: 'book.html',
          controller: 'BookCtrl',
          controllerAs: 'book'
        })
        .when('/Book/:bookId/ch/:chapterId', {
          templateUrl: 'chapter.html',
          controller: 'ChapterCtrl',
          controllerAs: 'chapter'
        });

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  }])
  


.directive('appResize', function($window) {
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

