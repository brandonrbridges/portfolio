// Hooks
import useToggle from '@/hooks/useToggle'
import { useEffect, useRef, useState } from 'react'

const DropdownInput = ({ className, label, name, placeholder, value: data, onChange, options }) => {
  const [visible, toggle] = useToggle(false)

  const [value, set] = useState(data)

  const handleChange = (element) => {
    set(element.currentTarget.value)

    if (onChange) {
      onChange(element)
    }
  }

  const handleSelect = (value) => {
    set(value)

    if (onChange) {
      onChange({
        target: {
          name: name,
          value: value,
        },
      })
    }
  }

  useEffect(() => {
    if (visible) {
      toggle()
    }
  }, [value])

  return (
    <div className={className + ' block'}>
      {label && <label>{label}</label>}
      <div className='relative w-full'>
        <input
          id={name}
          name={name}
          value={value ?? getLabel(value)}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={toggle}
          className={`border capitalize cursor-pointer p-2 rounded-lg w-full`}
        />
        {visible && (
          <div className='absolute bg-white border -bottom-full rounded-lg translate-y-8 w-full z-50'>
            {options?.map(({ label, value }, key) => (
              <div
                key={key}
                className='hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg px-2 py-1'
                onClick={() => handleSelect(value)}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DropdownInput
