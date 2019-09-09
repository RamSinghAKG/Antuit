import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './LabelInput.css';
const LabelInput = (props) => {
  const inputField = <input aria-label={props.labelName} name={props.fieldKey} disabled={props.isInputDisable} type="text" value={props.value} 
  placeholder={props.placeholder} onChange={(event) => props.onChange(event.target.value)}></input>;
  let selectedValue = '';
  let options = '';
  if(props.options && props.options.length>0) {
    const selectedOptions = props.options && props.options[props.selectedIndex];
    selectedValue = selectedOptions.length>0 && selectedOptions.toLowerCase();
    options = props.options.map((option, index) => <option key={index}  value={option.toLowerCase()}>{option}</option>);
  }
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
  labelName: PropTypes.string,  
  fieldKey: PropTypes.string,  // key for container
  value: PropTypes.string, // value for input
  isInputDisable: PropTypes.bool,  // disable
  isRequired: PropTypes.bool,      //  mandatory field
  options: PropTypes.array,       // dropdown options
  onchange: PropTypes.func
}
export default LabelInput;

