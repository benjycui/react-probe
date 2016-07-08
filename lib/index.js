'use strict';

exports.instance = function instance(mock) {
  return {
    props: mock.props || {},
    state: mock.state || {},
    context: mock.context || {},
    isMounted: function isMounted() {
      return mock.isMounted;
    },
    setState: function(state) {
      Object.assign(this.state, state);
    },
  };
};
