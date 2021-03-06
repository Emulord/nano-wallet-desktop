import Component from '@ember/component';

export default Component.extend({
  classNames: ['input-group'],

  inputId: null,
  label: null,
  placeholder: null,
  readonly: false,
  reveal: false,
});
