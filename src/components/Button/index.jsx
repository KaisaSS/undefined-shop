import React from 'react';
import styles from './styles.css';

const Button = ({ title, onClick, arrow, style }) => {
  return (
    <div className='button' style={style} onClick={onClick}>
      {title || 'See details'} {arrow && <img style={{marginLeft: '10px'}} height={16} width={17} src={'/arrow.svg'} alt='arrow'/>}
    </div>
  )
}

export default Button