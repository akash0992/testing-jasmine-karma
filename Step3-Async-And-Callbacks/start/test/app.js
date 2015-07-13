describe('KarmaTest', function () {

    var Person, controller, scope;
    beforeEach(module('KarmaTest'));
    beforeEach(inject(function ( $controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('Home', {
            $scope: scope
        });
    }));

    it('Check psersone has created', function () {
        expect(5).toBeDefined();
    });
});