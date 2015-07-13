describe('KarmaTest', function () {
    var UsersServices, httpMock;
    beforeEach(function () {
        module('KarmaTest');
        inject(function (_UsersService_, _$httpBackend_, _$q_) {
            UsersServices = _UsersService_;
            httpMock = _$httpBackend_;
            $q= _$q_;
        });
    });
    //describe('Get Users method', inject(function (_$q_) {
    //    var deferred = _$q_.defer();
    //    deferred.resolve({success: true});
    //    spyOn(UsersService, 'list').andReturn(deferred.promise);
    //    it('Get Users get  correctly', function () {
    //        UsersServices.list().then(function (response) {
    //         //   expect(response.success).toEqual(true);
    //        });
    //    });
    //}));

    it("should do something", function () {
        httpMock.expectGET("users/").respond(
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
        UsersServices.list().then(function (response) {
            expect(response.data.length).toEqual(3);
        });
        httpMock.flush();
    });
    it('Get Users get  correctly', function () {
        var deferred = $q.defer();
        //spyOn(UsersServices, 'list').and.returnValue(deferred.promise);
        var deferred = $q.defer();
        spyOn(UsersServices, "list").and.returnValue(deferred);
        UsersServices.list().promise.then(function (response) {
            console.log(response)
            expect(response.data.length).toEqual(2);
            //   expect(response.success).toEqual(true);
        }, function (response) {
            console.log(response)
            expect(response.data.length).toEqual(2);
            //   expect(response.success).toEqual(true);
        });
        deferred.resolve('Remote call result');
        //deferred.resolve({
        //    data: [
        //        {
        //            "name": "Deepak",
        //            "age": 25,
        //            "salary": 5000
        //        },
        //        {
        //            "name": "Deepak2",
        //            "age": 23,
        //            "salary": 5023
        //        },
        //        {
        //            "name": "Deepak3",
        //            "age": 21,
        //            "salary": 5021
        //        }
        //    ]
        //});

    });
});