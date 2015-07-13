describe('Person', function () {

    var Person, Home, scope;
    beforeEach(module('KarmaTest'));
    beforeEach(inject(function ( $controller, $rootScope) {
        scope = $rootScope.$new();
        Home = $controller('HomeCtrl', {
            $scope: scope
        });
    }));

    it('assigns a person to the controller', function () {
        expect(Home.firstName).toEqual('John');
    });
    it('assigns a person to the controller', function () {
        expect(Home.lastName).toEqual('John');
    });

});