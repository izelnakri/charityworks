import Ember from 'ember';
import TooltipMixin from 'frontend/mixins/tooltip';

const { Component, computed } = Ember;

const ClNewIcon = Component.extend(TooltipMixin, {
  tagName: 'i',
  classNames: ['fa', 'cw-icon'],
  classNameBindings: [
    'iconCssClass', 'fixedWidth:fa-fw', 'circle:fa-round', 'sizeClass', 'spinClass'
  ],
  fixedWidth: false,
  size: undefined,
  spin: false,
  iconCssClass: computed('icon', function() {
    if (this.get('icon')) {
      return `fa-${this.get('icon')}`;
    }
  }),
  sizeClass: computed('size', function() {
    if (this.get('size')) {
      return `fa-${this.get('size')}`;
    }
  }),
  spinClass: computed('spin', function() {
    if (this.get('spin')) {
      return 'fa-spin';
    }
  }),
});

ClNewIcon.reopenClass({
  positionalParams: ['icon']
});

export default ClNewIcon;
