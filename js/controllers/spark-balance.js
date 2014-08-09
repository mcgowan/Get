App.controller('SparkBalanceCtl', function SparkBalanceCtl($rootScope, $scope) {
    $scope.init = function() {
        $scope.expanded = false;
    };

    $scope.toggleShow = function() {
        $scope.expanded = !$scope.expanded;
    };

    $scope.show = function() {
        $scope.expanded = true;
    };

    $scope.hide = function() {
        $scope.expanded = false;
    };

    $scope.mouseEnter = function() {
        $scope.zIndex = 9999999;
    };

    $scope.mouseLeave = function() {
        $scope.zIndex = 0;

        $scope.hide();
    };

    $scope.init();
});