describe('KarmaTest', function () {

    var Home, rootScope, httpMock, deferred, spyPromise, mockMyService, scope, $timeout;

    beforeEach(function () {
        module('KarmaTest');
        inject(function ($controller, $rootScope, $injector, _$httpBackend_, $q, _$timeout_, $httpBackend) {
            rootScope = $injector.get('$rootScope');
            deferred = $q.defer();
            $timeout = _$timeout_;
            httpMock = $httpBackend;
            scope = $rootScope.$new();
            Home = $controller('Home', {
                $scope: scope
            });
            jasmine.clock().install();
            httpMock.expectGET("http://localhost:8089/users").respond(
                [
                    {
                        "name": "Deepak",
                        "age": 25,
                        "salary": 5000
                    },
                    {
                        "name": "Deepak2",
                        "age": 23,
                        "salary": 5023
                    },
                    {
                        "name": "Deepak3",
                        "age": 21,
                        "salary": 5021
                    }
                ]
            );
        })
    });

    it('should be able to test values from both functions', function () {
        Home.init();

        httpMock.flush();
        expect(Home.users.length).toEqual(3);
        Home.setTime();
        jasmine.clock().tick(1000);
        $timeout.flush();
        expect(Home.time).toBeDefined();
    });

});