import React from 'react'

function Button({className = '', children}) {
  return (
    <button className={`w-full h-11 rounded-[10px] ${className} font-medium text-[14px] hover:cursor-pointer`}>{children}</button>
  )
}

export default Button