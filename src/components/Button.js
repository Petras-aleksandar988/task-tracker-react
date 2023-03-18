import React from 'react'

export default function Button({color,backgroundColor, propsClick, text}) {
  return (
    <div>
      <button onClick={propsClick} style={{ color: color, backgroundColor: backgroundColor }} className="btn">{text }</button>
    </div>
  );
}
