import React from 'react';
import './BookingFields.sass';
export const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <li key={i}>{fieldName} {formErrors[fieldName]}</li>
        )
      } else {
        return '';
      }
    })}
  </div>
