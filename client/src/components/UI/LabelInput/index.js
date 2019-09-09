import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './LabelInput.css';
const LabelInput = (props) => {
  const inputField = <input aria-label={props.labelName} name={props.fieldKey} disabled={props.isInputDisable} type="text" value={props.value} 
  placeholder={props.placeholder} onChange={(event) => props.onChange(event.target.value)}></input>;
  
  const selectedValue = props.options && props.options[props.selectedIndex] && props.options[props.selectedIndex].toLowerCase();
  const options = props.options && props.options.map((option, index) => <option key={index}  value={option.toLowerCase()}>{option.toUpperCase()}</option>);
  const dropDownField = <select value={selectedValue} onChange={props.onChange}> {options} </select>;
  const isRequired = props.isRequired ? <span className="required">*</span> : '';

  return (
    <ErrorBoundary>
      <div key={props.fieldKey} className="input-container">
      <label htmlFor={props.fieldKey}>{props.labelName}{isRequired}:</label>
          {props.type === 'input' ? inputField : ''}
          {props.type === 'select' ? dropDownField : ''}
      </div>
    </ErrorBoundary>
  );
};
LabelInput.propTypes = {
  isRequired: PropTypes.bool,
  options: PropTypes.array,
  onchange: PropTypes.func
}
export default LabelInput;

