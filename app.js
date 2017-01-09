var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
     .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
            $scope.names = ['LayOuts', 'Roads', 'Residential','Commercial'];
        }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: ''
    })
	.state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Con Holdings is a North America-based, international construction services company and is a leading builder in diverse market segments. The company has earned recognition for undertaking large, complex projects, fostering innovation, embracing emerging technologies, and making a difference for their clients, employees and community.' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }
        
    });

}); // closes $routerApp.config()


// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Raw Material',
            price: 5000
        },
        {
            name: 'Steel',
            price: 10000
        },
        {
            name: 'Concrete',
            price: 2200
        },
		{
            name: 'Electricity',
            price: 22000
        },
		{
            name: 'Plumbing',
            price: 5000
        }
    ];
    
});