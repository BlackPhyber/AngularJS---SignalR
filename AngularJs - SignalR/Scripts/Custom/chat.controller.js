(function () {
    'use strict';

    function ChatController($scope, ChatService) {
        $scope.messages = ChatService.messages;
        $scope.contacts = ChatService.contacts;

        $scope.send = function () {
            ChatService.send('Thomas', $scope.newMsg);
        };
    };

    ChatController.$inject = ['$scope', 'ChatService'];

    angular.module('chatApp').controller('ChatController', ChatController);
})();