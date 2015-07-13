describe('KarmaTest', function () {

    var Home, rootScope,  scope, $compile;

    beforeEach(function () {
        module('KarmaTest');
        inject(function ($controller, $rootScope, $injector, _$compile_) {
            rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();
            $compile = _$compile_;
            Home = $controller('Home', {
                $scope: scope
            });
            scope.Home = Home;
        })
    });
    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<user-info></user-info>")(scope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("Im "+Home.userInfo.age +" year old.");
    });

});