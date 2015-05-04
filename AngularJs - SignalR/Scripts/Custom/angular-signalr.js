(function () {
    'use strict';

    var module = angular.module('td-SignalR', []);
    module.constant('$', $);

    function SignalRHub($) {
        var hubs = [];

        var Hub = function (name) {
            this.connection = $.hubConnection();
            this.proxy = this.connection.createHubProxy(name);
            this.listeners = [];
        };

        Hub.prototype.on = function (eventName, fn) {
            this.proxy.on(eventName, fn);
        };

        Hub.prototype.start = function () {
            this.connection.start();
        };

        Hub.prototype.stop = function () {
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
    SignalRHub.$inject = ['$'];

    module.factory('SignalRHub', SignalRHub);
})();