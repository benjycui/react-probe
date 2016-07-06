'use strict';

exports.instance = function instance(mock) {
  return {
    props: mock.props,
    state: mock.state,
    setState: function(state) {
      Object.assign(this.state, state);
    },
  };
};
