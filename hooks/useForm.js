import { useState } from 'react'

const useForm = (initial) => {
  const [data, set] = useState(initial ?? {})

  const update = (element) => {
    set((state) => ({ ...state, [element.target.name]: element.target.value }))
  }

  return [data, update]
}

export default useForm
