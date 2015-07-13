describe('Person', function () {

    var Person, controller, scope;
    beforeEach(module('myApp'));
    beforeEach(inject(function ( $controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('myCtrl', {
            $scope: scope
        });
        controller.createPerson('Deepak', 25, 5000)
    }));

    it('Check psersone has created', function () {
        console.log(controller.getPerson())
        expect(controller.getPerson()).toBeDefined();
    });
});