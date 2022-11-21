// React
import { useState } from 'react'

const TextInput = ({ className, disabled, label, name, onChange, placeholder }) => {
  const [value, set] = useState('')

  const handleChange = (element) => {
    set(element.currentTarget.value)

    if (onChange) {
      onChange(element)
    }
  }

  return (
    <span className={className + ' block'}>
      {label && <label>{label}</label>}
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className='border p-2 rounded-lg w-full'
        disabled={disabled}
      />
    </span>
  )
}

export default TextInput
