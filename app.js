var app = angular.module('myApp', ['ui.bootstrap', 'ui.bootstrap.tpls']);

app.controller('HomeCtrl', function ($scope, $modal) {

    $scope.countries = [];

    $scope.add = function () {

        //TODO: Öffnen Sie ein Modal zum Hinzufügen eines neuen Landes
        //TODO: Nehme Sie die Änderung aus dem Modal entgegen und füge sie dem array countries hinzu

    };

    $scope.remove = function () {

        //TODO: Öffnen Sie ein Modal um eine Liste aller Modals zu erhalten und aus dieser löschen zu können

    }
});

app.controller('AddCountryCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {

        //TODO: Übergeben Sie das neue Land an den HomeCtrl und schließen Sie das Modal

    }

    $scope.cancel = function () {

        //TODO: Schließen Sie das Modal ohne eine Änderung vorzunehmen

    }
});

app.controller('RemoveCountryCtrl', function ($scope, $modalInstance, countries) {
    $scope.countries = countries;

    $scope.remove = function (i) {

        //TODO: Löschen Sie aus der Liste der Länder das i-te Element

    }

    $scope.ok = function () {

        //TODO: Schließen Sie das Modal

    };
})