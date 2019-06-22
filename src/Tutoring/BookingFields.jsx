import React, { Component } from 'react'
import moment from 'moment'
import Modal from 'simple-react-modal'
import JsonRpcClient from '../Common/jsonrpcclient'
import { FormErrors } from './FormErrors'
import consts from '../.env.js';
import './BookingFields.sass'

class BookingFields extends Component {

  constructor(props) {
    super()
    this.state = {
      confirmationModalVisible: false,
      bookingErrorVisible: false,
      formErrors: {email: '', phone: ''},
      emailValid: '',
      phoneValid: '',
      formValid: false
    }
    this.showBookingConfirmation = this.showBookingConfirmation.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  processEventTime(eventStart) {
    var startMoment = moment(eventStart)
    return({date: startMoment.format('YYYY-MM-DD'), time: startMoment.format("HH:mm")})
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        phoneValid = value.match(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
        fieldValidationErrors.phone = phoneValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    phoneValid: phoneValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.phoneValid});
  }

  showBookingConfirmation() {
    this.setState({confirmationModalVisible: true})
  }

  closeModal() {
    this.setState({
      confirmationModalVisible: false,
      name: "",
      phone: "",
      email: "",
      formValid: false
    })
  }

  closeBookedModal() {
    this.setState({
      bookedModalVisible: false,
      name: "",
      phone: "",
      email: "",
      formValid: false
    })
  }

  bookEvent() {
    var simplybookAPI = new JsonRpcClient({
      endpoint: 'https://user-api.simplybook.me/',
      headers: {'X-Company-Login': consts.simplyLogin, 'X-Token': this.props.token}
    })
    var clientInfo = {'name':this.state.name, 'phone': this.state.phone, 'email': this.state.email}
    simplybookAPI.request(
      'book',
      '1', '1',
      this.state.startTime.date,
      this.state.startTime.time,
      clientInfo
    ).then(function() {
      this.setState({confirmationModalVisible: false})
      this.setState({bookedModalVisible: true})
    }.bind(this)).catch(function() {
      this.setState({bookingErrorVisible: true})
    }.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({startTime: this.processEventTime(nextProps.event)})
    console.log("Received Props")
  }

  render() {
    if (this.props.visible) {
      return (
        <div className="booking-fields">
          <hr />
          <h3>Book a tutoring session starting at {moment(this.state.startTime.time, "HH:mm").format('h:mm a')} on {moment(this.state.startTime.date).format('ddd, MMM Do, YYYY')}</h3>
          <FormErrors formErrors={this.state.formErrors} />
          <div className="fields">
            <div className="field">
              <label>Name</label>
              <input name="name" placeholder="Name (first and last)" value={this.state.name} onChange={this.handleInputChange}/>
            </div>
            <div className="field">
              <label>Email</label>
              <input name="email" placeholder="Email Address" type="email" value={this.state.email} onChange={this.handleInputChange}/>
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input name="phone" placeholder="Phone Number" type="tel" value={this.state.phone} onChange={this.handleInputChange}/>
            </div>
            <button onClick={this.showBookingConfirmation} disabled={!this.state.formValid}>Book</button>
          </div>
          <Modal
            show={this.state.confirmationModalVisible}
            closeOnOuterClick={true}
            onClose={this.closeModal.bind(this)}
            className="modal"
            containerClassName="modal-container"
          >
            {this.state.bookingErrorVisible &&
            <div className="formErrors">
              <p>There was a problem booking your session. Please refresh and try again.</p>
              <p>If this problem recurs, please get in touch with me via email</p>
            </div>
            }
            <h3>Confirm booking details</h3>
            <p>Date: {moment(this.state.startTime.date).format('ddd, MMM Do, YYYY')}</p>
            <p>Time: {moment(this.state.startTime.time, "HH:mm").format('h:mm a')}</p>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone: {this.state.phone}</p>
            <button onClick={this.bookEvent.bind(this)}>Confirm</button>
            <button onClick={this.closeModal.bind(this)} className="cancel-button">Cancel</button>
          </Modal>
          <Modal
            show={this.state.bookedModalVisible}
            closeOnOuterClick={true}
            onClose={this.closeBookedModal.bind(this)}
            className="modal"
            containerClassName="modal-container"
          >
          <h2>Booking complete!</h2>
          <p>You will receive an email confirming your date and time as well as a personal email from me soon.</p>
          <button onClick={this.closeBookedModal.bind(this)}>Close</button>
          </Modal>
        </div>
      );
    } else {
      return(<div className="booking-fields"></div>);
    }
  }
}

export default BookingFields;
