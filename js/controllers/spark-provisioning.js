App.controller('SparkProvisioningCtl', function SparkProvisioningCtl($rootScope, $scope) {
    $scope.init = function() {
        $scope.expanded = false;
    };

    $scope.toggleShow = function() {
        if ($scope.expanded) {
            $scope.hide();
        } else {
            $scope.show();
        }
    };

    $scope.show = function() {
        $scope.zIndex = 1000;
        $scope.expanded = true;
    };

    $scope.hide = function() {
        $scope.zIndex = 0;
        $scope.expanded = false;
    };

    $scope.mouseEnter = function() {
    };

    $scope.mouseLeave = function() {
        $scope.hide();
    };

    $scope.init();
});