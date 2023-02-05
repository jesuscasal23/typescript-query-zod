import { useQuery } from '@tanstack/react-query'

const getTodos = async () => {
  const response = await fetch('http://localhost:7000/todos')
  const data = (await response.json()) as any
  return data
}

const useGetTodos = () => {
  return useQuery(['todos'], getTodos)
}

export default useGetTodos
