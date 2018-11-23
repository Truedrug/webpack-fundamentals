import angular from 'angular';
import innerModule from './inner-component';

export default angular.module('outerModule', [innerModule]);
