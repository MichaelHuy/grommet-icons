var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Spa = function Spa(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Spa' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,22 C13.5,22 16,21 16,16.5 C16,12 12,6 12,6 C12,6 8,12 8,16.5 C8,21 10.5,22 12,22 Z M12,22 C10.5,22 9.04678627,21.7792414 7,20.5 C3,18 2.5,10 2.5,10 C2.5,10 7,10.5 9,12 M12,22 C13.5,22 14.9532137,21.7792414 17,20.5 C21,18 21.5,10 21.5,10 C21.5,10 17,10.5 15,12' })
      )
    )
  );
};

export default Spa;