(function () {
    'use strict';

    function ChatService($rootScope, SignalRHub) {
        var service = this;
        var hub = SignalRHub.init('chatHub');

        service.messages = [];
        hub.on('addMessage', function (sender, message) {
            $rootScope.$apply(function () {
                service.messages.push({ sender: sender, message: message });
            });
        });

        hub.start();

        return service;
    };

    ChatService.$inject = ['$rootScope', 'SignalRHub'];

    angular.module('chatApp').factory('ChatService', ChatService);
})();