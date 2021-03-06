import React from 'react';
import PropTypes from 'prop-types';

function FormInput (props) {

	const {type, name, value, id, placeholder, label, className, required, disabled, step, min, max, isValid, onChange} = props;

	return (
		<div className={'form-group ' + className}>
			<label htmlFor={id}>
				{label}
				{required && <span className='text-accent'>&nbsp;*</span>}
			</label>
			<input className="form-control"
			       type={type}
			       value={value}
			       name={name}
			       id={id}
			       placeholder={placeholder}
			       required={required}
			       disabled={disabled}
			       step={step}
			       min={min}
			       max={max}
			       onChange={onChange}/>
			<p className='validation-text'>{isValid}</p>
		</div>
	);

}

export default FormInput;

FormInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	step: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	isValid: PropTypes.string,
	onChange: PropTypes.func
};