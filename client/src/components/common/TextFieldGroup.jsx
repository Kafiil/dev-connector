import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import capitalize from '../../utils/capitalize';
class TextFieldGroup extends Component {
  render() {
    const {
      value,
      info,
      name,
      label,
      type,
      onChange,
      error,
      placeholder,
      disabled
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label || capitalize(name)}</label>
        <input
          type={type}
          onChange={onChange}
          value={value}
          className={classnames('form-control', {
            'is-invalid': error
          })}
          name={name}
          id={name}
          placeholder={placeholder || capitalize(name)}
          disabled={disabled}
        />
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

TextFieldGroup.prototypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProp = {
  type: 'text'
};

export default TextFieldGroup;
