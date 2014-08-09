var App = angular.module('App', ['ngAnimate'])
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
}).directive('appHover', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('mouseenter', function() {
                scope.$apply(scope.mouseEnter());
            });
            element.on('mouseleave', function() {
                // element.removeClass(scope.mouseLeave());
                scope.$apply(scope.mouseLeave());
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
}).directive('appMouseLeave', function($document) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.on('mouseleave', function() {
                scope.$apply(scope.mouseLeave());
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

App.animation('.show-hide-animation', function() {
  /* 
   * the reason why we're using beforeAddClass and removeClass is because we're working
   * around the .ng-hide class (which is added when ng-show evaluates to false). The
   * .ng-hide class sets display:none!important and we want to apply the animation only
   * when the class is removed (removeClass) or before it's added (beforeAddClass).
   */
  return {

    /* 
     * make sure to call the done() function when your animation is complete.
     */
    beforeAddClass : function(element, className, done) {
      if(className == 'ng-hide') {
        TweenMax.to(element, .1, { height: 0, onComplete: done });

        //this function is called when the animation ends or is cancelled
        return function() {
          element[0].style.height = '';
        }
      } else {
        done();
      }
    },

    /* 
     * make sure to call the done() function when your animation is complete.
     */
    removeClass : function(element, className, done) {
      if(className == 'ng-hide') {
        //set the height back to zero to make the animation work properly
        var height = element.height();
        element.css('height', 0);

        TweenMax.to(element, .1, { height: height, onComplete: done });

        //this function is called when the animation ends or is cancelled
        return function() {
          element[0].style.height = '';
        }
      } else {
        done();
      }
    }
  }
});