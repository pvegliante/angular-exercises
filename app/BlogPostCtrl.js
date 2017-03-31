(function ()
{
    'use strict';
    function BlogPostCtrl($scope)
    {
      $scope.blogs = [{
        id: 1,
        Author: 'Jack',
        Title: 'Up Jills hill'
      },
      {
        id: 2,
        Author: 'Jill',
        Title: 'Jacks Bean Stalk'
      },
      {
        id: 3,
        Author: 'Wolf',
        Title: 'This Blows'
      }
    ]; console.log('alisdhf');
    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', ['$scope', BlogPostCtrl]);
})();
