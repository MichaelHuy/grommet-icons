'use strict';

exports.__esModule = true;
exports.Edge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edge = exports.Edge = function Edge(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Edge' }, props),
    _react2.default.createElement('path', { fill: '#00A1F1', fillRule: 'evenodd', d: 'M5.487,6.3566 C2.632,8.1336 1,10.6596 1,10.6596 C1,10.6596 1.423,5.3636 5.487,2.2646 C7.103,1.0326 9.313,-0.0004 12.285,-0.0004 C13.402,-0.0004 15.744,0.1946 17.853,1.4946 C19.962,2.7946 20.814,3.8846 21.764,5.4786 C22.174,6.1666 22.508,7.0506 22.716,7.9036 C23.107,9.5016 23.154,11.4116 23.154,11.4116 L23.154,13.9286 L8.081,13.9286 C8.081,13.9286 7.713,18.9936 14.645,18.9936 C17.056,18.9936 17.9,18.6146 18.693,18.3796 C19.934,18.0126 21.133,17.1926 21.133,17.1926 L21.135,22.2526 C21.135,22.2526 18.298,23.9996 14.012,23.9996 C12.805,23.9996 11.533,23.8986 10.306,23.5006 C9.234,23.1526 6.99,22.2146 5.487,20.0166 C4.956,19.2386 4.38,18.2036 4.094,17.1926 C3.786,16.0996 3.79,15.0376 3.79,14.4526 C3.79,12.2646 4.537,10.1756 5.834,8.6656 C7.515,6.7096 9.638,5.8476 9.638,5.8476 C9.638,5.8476 8.947,6.6546 8.521,7.6586 C8.096,8.6626 7.979,9.6726 7.979,9.6726 L16.49,9.6726 C16.49,9.6726 16.988,4.5866 11.675,4.5866 C9.672,4.5866 7.213,5.2816 5.487,6.3566' })
  );
};