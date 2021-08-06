import React from 'react'
import './styles.scss';

const Button = (props: any) => {
  return (
    <button>
      {props.children}
    </button>
  )
}
export default Button;
