export default (['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('layout', {
                template: '<layout-directive></layout-directive>'
            })
            .state('layout.home', {
                url: '/',
                template: '<home-directive></home-directive>'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
]);
