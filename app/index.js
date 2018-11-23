import appModule from './app.module';
import template from './app.tpl.html';
import controller from './app.controller';
import './app.css';

export default appModule.component('mainComponent', {
  template,
  controller,
}).name;
