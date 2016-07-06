'use strict';

exports.instance = function instance({ state, props}) {
  return {
    props: props,
    state: state,
    setState: function(state) {
      Object.assign(this.state, state);
    },
  };
};
