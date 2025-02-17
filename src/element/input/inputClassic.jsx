import React from 'react'

export const InputClassic = ({value,name,onChange}) => {
  return (
   <input className='border rounded-lg w-full h-11 px-2' type="text" value={value} name={name} onChange={onChange} />
  )
}
