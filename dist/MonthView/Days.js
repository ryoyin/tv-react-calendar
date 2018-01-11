'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _dates = require('../shared/dates');

var _propTypes3 = require('../shared/propTypes');

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Days = function (_PureComponent) {
  _inherits(Days, _PureComponent);

  function Days() {
    _classCallCheck(this, Days);

    return _possibleConstructorReturn(this, (Days.__proto__ || Object.getPrototypeOf(Days)).apply(this, arguments));
  }

  _createClass(Days, [{
    key: 'render',
    value: function render() {

      // console.log('Days Component: ')

      var saleDates = this.props.saleDates;
      // console.log(saleDates)

      var start = this.start,
          end = this.end,
          year = this.year,
          monthIndex = this.monthIndex;

      var _props = this.props,
          activeStartDate = _props.activeStartDate,
          hover = _props.hover,
          value = _props.value,
          valueType = _props.valueType,
          dayProps = _objectWithoutProperties(_props, ['activeStartDate', 'hover', 'value', 'valueType']);

      var days = [];
      for (var day = start; day <= end; day += 1) {
        var date = new Date(year, monthIndex, day);

        var calendar_date = (0, _moment2.default)(date).format('YYYY-MM-DD');

        var showPreviewDot = saleDates.viewingDates.indexOf(calendar_date) != -1 ? true : false;
        var showAuctionDot = saleDates.auctionDates.indexOf(calendar_date) != -1 ? true : false;

        var salesDots = {
          showPreviewDot: showPreviewDot,
          showAuctionDot: showAuctionDot
        };

        days.push(_react2.default.createElement(_Day2.default, _extends({
          classes: (0, _utils.getTileClasses)({
            value: value, valueType: valueType, date: date, dateType: 'day', hover: hover
          }),
          currentMonthIndex: monthIndex,
          date: date,
          key: day,
          salesDots: salesDots
        }, dayProps)));
      }

      return _react2.default.createElement(
        _Flex2.default,
        {
          className: 'react-calendar__month-view__days',
          count: 7,
          offset: this.offset,
          wrap: true
        },
        days
      );
    }
  }, {
    key: 'offset',
    get: function get() {
      if (this.props.showNeighboringMonth) {
        return 0;
      }

      var _props2 = this.props,
          activeStartDate = _props2.activeStartDate,
          calendarType = _props2.calendarType;

      return (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
    }

    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */

  }, {
    key: 'start',
    get: function get() {
      if (this.props.showNeighboringMonth) {
        var _props3 = this.props,
            activeStartDate = _props3.activeStartDate,
            calendarType = _props3.calendarType;

        return -(0, _dates.getDayOfWeek)(activeStartDate, calendarType) + 1;
      }
      return 1;
    }

    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */

  }, {
    key: 'end',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      var daysInMonth = (0, _dates.getDaysInMonth)(activeStartDate);
      if (this.props.showNeighboringMonth) {
        var year = this.year,
            monthIndex = this.monthIndex;
        var calendarType = this.props.calendarType;

        var activeEndDate = new Date(year, monthIndex, daysInMonth);
        return daysInMonth + (7 - (0, _dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
      }
      return daysInMonth;
    }
  }, {
    key: 'year',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getYear)(activeStartDate);
    }
  }, {
    key: 'monthIndex',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getMonthIndex)(activeStartDate);
    }
  }]);

  return Days;
}(_react.PureComponent);

exports.default = Days;


Days.propTypes = _extends({
  calendarType: _propTypes3.isCalendarType.isRequired,
  showNeighboringMonth: _propTypes2.default.bool
}, _propTypes3.tileGroupProps);