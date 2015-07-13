describe('Person', function () {

    var Person, controller, scope;
    beforeEach(module('myApp'));
    beforeEach(inject(function ( $controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('myCtrl', {
            $scope: scope
        });
    }));

    it('assigns a person to the controller', function () {
        expect(controller.firstName).toEqual('John');
    });
    it('assigns a person to the controller', function () {
        expect(controller.lastName).toEqual('John');
    });

});