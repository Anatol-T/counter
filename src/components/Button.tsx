import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {}

// type BTNPropsType = {
//   title: string
//   disabled: boolean
// }

const Button: React.FC<ButtonPropsType> = ({...restProps}) => {
  return (
    <button {...restProps}/>
    // <button disabled={props.disabled}>{props.title}</button>
  );
};

Button.propTypes = {};

export default Button;