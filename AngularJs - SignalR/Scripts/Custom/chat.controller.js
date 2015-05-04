(function () {
    'use strict';

    function ChatController($scope, ChatService) {
        $scope.chats = ChatService;
    };

    ChatController.$inject = ['$scope', 'ChatService'];

    angular.module('chatApp').controller('ChatController', ChatController);
})();