(function () {
    'use strict';

    function ChatService(SignalRHub) {
        

        SignalRHub.on('addMessage', function (sender, message) {
            console.log('New message:');
            console.log({ sender: sender, message: message });
        });
        SignalRHub.init('chatHub');

        SignalRHub.start();

        return {};
    };

    ChatService.$inject = ['SignalRHub'];

    angular.module('chatApp').factory('ChatService', ChatService);
})();