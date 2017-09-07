'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grow = function Grow(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Grow' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M12,16 L12,7 M12.0000002,11 C12,8 12,5 5,5 C5,8 5,11 12.0000002,11 Z M4,16 L20,16 M18,16 L16,23 L8,23 L6,16 L6,16 M12,7 C12,4 12,1 19,1 C19,4 19,7 12,7 Z' })
      )
    )
  );
};

exports.default = Grow;