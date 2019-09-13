import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './MultiSelect.scss';
const MultiSelect = (props) => {
    const isRequired = props.isRequired ? <span className="required">*</span> : '';
    const selectedOptions = props.selectedOptions.length === 0 ? [] : props.selectedOptions.split(',');
    const options = props.options.filter((option) => !selectedOptions.includes(option));


    const remOptions = options && options.map((option, index) => <option key={index} value={option.toLowerCase()}>{option}</option>);
    const remOptionsContainer = options.length > 0 ? 
                                <select value='' onChange={(event) => props.onChange(event.target.value)}>
                                    <option key={-1} disabled value=''></option>
                                    {remOptions}
                                </select> : '';
    const selectedList = selectedOptions && selectedOptions.map((option, index) =>
        <div key={index} className="selectBtn"><span className="btntext">{option}</span> <span onClick={() => props.onRemove(selectedOptions[index])} className="close">X</span></div>);
    return (
        <ErrorBoundary>
            <div key={props.fieldKey} className="multi-selector-component">
                <label className="multi-select-label" htmlFor={props.fieldKey}>{props.labelName}{isRequired}:</label>
                <div className="multi-select-container">
                    {selectedList}
                    {remOptionsContainer}
                </div>
            </div>
        </ErrorBoundary>
    );
};
MultiSelect.propTypes = {
    labelName: PropTypes.string,
    fieldKey: PropTypes.string,
    isRequired: PropTypes.bool,
    selectedOptions: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onRemove: PropTypes.func
}
export default MultiSelect;