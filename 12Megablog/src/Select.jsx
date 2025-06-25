import React, {useId} from 'react'

function Select({
  option,
  label,
  className,
  ref,
  ...props

}) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <Select
      {...props}
      id={id}
      ref={ref}
      className={`className`}
      >
        
      </Select>
    </div>
  )
}

export default Select