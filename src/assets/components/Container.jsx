import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1370px] m-auto ${className}`}>{children}</div>
  )
}

export default Container
