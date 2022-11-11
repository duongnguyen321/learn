import React, { useId } from 'react'

export default function Input({type, name,placeholder}) {
   const id = useId()
  return (
    <>
    <label htmlFor={id}>{name}</label>
    <input id={id} type={type} name={name} placeholder={placeholder}/>
    </>
  )
}
