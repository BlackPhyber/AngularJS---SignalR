(function () {
    'use strict';

    function ChatController($scope, ChatService) {
        $scope.testing = 'Dit is een test';
    };

    ChatController.$inject = ['$scope', 'ChatService'];

    angular.module('chatApp').controller('ChatController', ChatController);
})();