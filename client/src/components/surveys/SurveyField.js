// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="white">
      <label className="black-text">{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text error">
        {touched && error}
      </div>
    </div>
  );
};
