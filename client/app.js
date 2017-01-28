import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap-npm';

import layoutDirective from './components/layout/layout.directive.js';
import navbarDirective from './components/navbar/navbar.directive.js';
import homeDirective from './components/home/home.directive.js';

import Router from './routes.js';
import './sass/style.scss';

const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.origin;

angular.module('gc', [
        'ui.router',
        'ui.bootstrap'
    ])
    .constant('HOST', HOST)
    .directive('layoutDirective', layoutDirective)
    .directive('navbarDirective', navbarDirective)
    .directive('homeDirective', homeDirective)
    .config(Router);
