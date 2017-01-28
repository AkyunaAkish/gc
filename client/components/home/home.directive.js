import controller from './home.controller.js';

export default () => {
    return {
        template: require('./home.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
