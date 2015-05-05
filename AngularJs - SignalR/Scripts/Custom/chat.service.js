(function () {
    'use strict';

    function ChatService(SignalRHub) {
        var service = this;
        var hub = SignalRHub.init('chatHub');

        service.messages = [];

        service.send = function (sender, message) {
            hub.call('send', sender, message)
                .then(function (result) {
                    //Success
                    console.log('Sent successfully ' + result);
                }, function (result) {
                    //Fail
                    console.log('Not sent successfully' + result);
                });
        };

        hub.on('addMessage', function (sender, message) {
            service.messages.push({ sender: sender, message: message });
        });

        hub.starting(function () {
            console.log('Starting event');
        });

        hub.received(function (result) {
            console.log(result);
        });

        hub.connect()
            .then(function () {
                console.log('Connected to ChatHub!');
            }, function () {
                connection.log('Not connected to ChatHub!');
            });

        return service;
    };

    ChatService.$inject = ['SignalRHub'];

    angular.module('chatApp').factory('ChatService', ChatService);
})();