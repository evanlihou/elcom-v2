import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import $ from 'jquery';
import JsonRpcClient from '../Common/jsonrpcclient'
import ScrollToComponent from 'react-scroll-to-component'
import './Calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BookingFields from './BookingFields'
import consts from '../.env.js';
BigCalendar.momentLocalizer(moment);

class TutoringCalendar extends Component {
constructor() {
  super()
  this.state = {
    loading: true,
    bookingFieldsShown: false,
    confirmationModalVisible: false,
    bookedModalVisible: false
  }
}
componentWillMount() {
  // Only enable the day calendar view on small screens, otherwise day and week
  if ($(window).width() < 700) {
    this.setState({calendarOptions: ['day'], defaultCalendarView: 'day'})
  } else {
    this.setState({calendarOptions: ['week', 'day'], defaultCalendarView: 'week'})
  }
}

componentDidMount() {
  // Get a token for the Simplybook API
  var rpcLogin = new JsonRpcClient(
    {endpoint: 'https://user-api.simplybook.me/login/'}
  )
  rpcLogin.request(
    'getToken',
    consts.simplyLogin,
    consts.simplyApiKey
  ).then((res) => {
    this.setState({token: res})
  }).then(() => {
    // Make an API call to get available appointment slots
    var simplybookAPI = new JsonRpcClient({
      endpoint: 'https://user-api.simplybook.me/',
      headers: {'X-Company-Login': consts.simplyLogin, 'X-Token': this.state.token}
      })
    var startDate = moment()
    // Get available times for next month
    simplybookAPI.request(
      'getStartTimeMatrix',
      startDate.add(12, 'hour').format("YYYY-MM-DD"),
      startDate.add(1, 'month').format("YYYY-MM-DD"),
      "1", "1", "1"
    ).then((res) => {
      // Add the available times to a list for the calendar
      var availableTimes = []
      for (var date in res) {
        for (var time in res[date]) {
          var startMoment = moment(date + " " + res[date][time])
          availableTimes.push({
            start: new Date(startMoment.format()),
            end: new Date(startMoment.add(1, 'hour').format())
          })
        } // End for time
      } // End for date
      this.setState({startTimes: availableTimes})
      this.setState({loading: false})
    }) // End initializing calendar
  }) // End Simplybook API call
}

render() {
  if (this.state.loading) {
    return(<div className="loading"><p>Loading</p></div>)
  } else {
      return(
        <div className="calendar">
          <BigCalendar
            events={this.state.startTimes}
            startAccessor={'start'}
            endAccessor={'end'}
            defaultDate={new Date()}
            step={60}
            views={this.state.calendarOptions}
            defaultView = {this.state.defaultCalendarView}
            onSelectEvent = {function(calendarEvent, e) {
                this.setState(
                  {bookingFieldsShown: true,
                  selectedEvent: calendarEvent.start}
                )
                setTimeout(function() {
                  ScrollToComponent(this.End, {align: 'top'})
                }.bind(this), 500)
            }.bind(this)}
            formats={{
              dayFormat: (date, culture, momentLocalizer) =>
                momentLocalizer.format(date, 'ddd, M/DD', culture),
              timeGutterFormat: (date, culture, momentLocalizer) => 
                momentLocalizer.format(date, 'hh a', culture),
              eventTimeRangeFormat: (a, culture, momentLocalizer) =>
                momentLocalizer.format(a.start, 'h:mm a', culture)
            }}
          />
          <h4>Calendar above only shows the next month of available times, and hides times earlier than 12 hours from now.</h4>
          <BookingFields visible={this.state.bookingFieldsShown} event={this.state.selectedEvent} token={this.state.token} />
          <div ref={(end) => { this.End = end; }}></div>
        </div>
      )
    }
  }
}
export default TutoringCalendar;
