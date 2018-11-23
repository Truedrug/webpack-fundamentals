import innerModule from './inner-component.module';
import template from './inner-component.tpl.html';
import controller from './inner-component.controller';
import './inner-component.css';

export default innerModule.component('innerComponent', {
  template,
  controller,
}).name;
