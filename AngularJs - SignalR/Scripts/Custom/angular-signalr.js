(function () {
    'use strict';

    var module = angular.module('td-SignalR', []);
    module.constant('$', $);

    function SignalRHub($) {
        var self = this;
        self.listeners = [];

        var service = {};

        service.init = function (hubName) {
            self.connection = $.hubConnection();
            self.proxy = self.connection.createHubProxy(hubName);
        };

        service.on = function (eventName, fn) {
            if (!self.connection || !self.proxy) {
                self.listeners.push({
                    eventName: eventName,
                    fn: fn
                });

                return;
            }

            self.proxy.on(eventName, fn);
        };

        service.start = function () {
            if (!self.connection || !self.proxy) throw "No hub initialized";

            angular.forEach(self.listeners, function (listener) {
                self.proxy.on(listener.eventName, listener.fn);
            });

            self.connection.start();
        };

        return service;
    };
    SignalRHub.$inject = ['$'];

    module.factory('SignalRHub', SignalRHub);
})();