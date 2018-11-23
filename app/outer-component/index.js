import outerModule from './outer-component.module';
import template from './outer-component.tpl.html';
import controller from './outer-component.controller';
import './outer-component.css';

export default outerModule.component('outerComponent', {
  template,
  controller,
}).name;
