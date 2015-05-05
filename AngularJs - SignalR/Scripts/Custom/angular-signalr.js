(function () {
    'use strict';

    var module = angular.module('td-SignalR', []);
    module.constant('$', $);

    function SignalRHub($, $q, $rootScope) {
        var hubs = [];

        var Hub = function (name) {
            this.connection = $.hubConnection();
            this.proxy = this.connection.createHubProxy(name);
        };

        Hub.prototype.on = function (eventName, fn) {
            this.proxy.on(eventName, function () {
                var args = arguments;

                $rootScope.$apply(fn.apply(null, args));
            });
        };

        Hub.prototype.call = function (fnName, args) {
            var deferred = $q.defer();

            this.proxy.invoke.apply(this.proxy, arguments)
                .done(function (result) {
                    deferred.resolve(result);
                })
                .fail(function (result) {
                    deferred.reject(result);
                });

            return deferred.promise;
        };

        Hub.prototype.connect = function () {
            var deferred = $q.defer();

            this.connection.start(/*{ transport: ['webSockets', 'longPolling'] }*/)
                .done(function (result) {
                    deferred.resolve(result);
                })
                .fail(function (result) {
                    deferred.reject(result);
                });

            return deferred.promise;
        };

        Hub.prototype.starting = function (fn) {
            this.connection.starting(fn);
        };

        Hub.prototype.received = function (fn) {
            this.connection.received(fn);
        };

        Hub.prototype.disconnect = function () {
            this.connection.stop();
        };

        var factory = {};

        factory.init = function (name) {
            var hub = new Hub(name);
            hubs.push(hub);

            return hub;
        };

        return factory;
    };
    SignalRHub.$inject = ['$', '$q', '$rootScope'];

    module.factory('SignalRHub', SignalRHub);
})();