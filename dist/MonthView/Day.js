'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mergeClassNames = require('merge-class-names');

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _dates = require('../shared/dates');

var _propTypes3 = require('../shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var className = 'react-calendar__month-view__days__day';

var Day = function Day(_ref) {
  var classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      date = _ref.date,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onClick = _ref.onClick,
      onMouseOver = _ref.onMouseOver,
      style = _ref.style,
      tileClassName = _ref.tileClassName,
      tileContent = _ref.tileContent,
      salesDots = _ref.salesDots;
  return _react2.default.createElement(
    'button',
    {
      className: _mergeClassNames2.default.apply(undefined, [className].concat(_toConsumableArray(classes), [(0, _dates.isWeekend)(date) && className + '--weekend', date.getMonth() !== currentMonthIndex && className + '--neighboringMonth', tileClassName instanceof Function ? tileClassName({ date: date, view: 'month' }) : tileClassName])),
      disabled: minDate && (0, _dates.getBeginOfDay)(minDate) > date || maxDate && (0, _dates.getEndOfDay)(maxDate) < date,
      key: date,
      onClick: onClick && function () {
        return onClick(date);
      },
      onMouseOver: onMouseOver && function () {
        return onMouseOver(date);
      },
      onFocus: onMouseOver && function () {
        return onMouseOver(date);
      },
      style: style,
      type: 'button'
    },
    _react2.default.createElement(
      'time',
      { dateTime: (0, _dates.getISOLocalDate)(date) + 'T00:00:00.000' },
      (0, _dates.getDay)(date),
      _react2.default.createElement(
        'div',
        { className: 'react-calendar__month-view__days__day--dot' },
        showDot('viewing', salesDots.showPreviewDot),
        showDot('auction', salesDots.showAuctionDot)
      )
    ),
    typeof tileContent === 'function' ? tileContent({ date: date, view: 'month' }) : tileContent
  );
};

function showDot(type, show) {
  if (show) {
    var _className = 'react-calendar__month-view__days__day--' + type;
    return _react2.default.createElement('span', { className: _className });
  }
}

Day.propTypes = _extends({
  currentMonthIndex: _propTypes2.default.number.isRequired
}, _propTypes3.tileProps);

exports.default = Day;