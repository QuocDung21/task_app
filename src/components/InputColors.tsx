import { FormEvent, useEffect, useState } from 'react'
import { colors } from '../utils/colors'
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react'
import { baseUrl } from '../config/gobal';

interface Props {
  onSubmit: (state: { name: string; color: string }) => void
  colorsOnTop?: boolean
}

const InputColors = ({ onSubmit, colorsOnTop = true }: Props) => {
  const { data: session } = useSession()
  const [state, setState] = useState({
    name: '',
    color: 'neutral',
    showColors: false,
  })
  const [tasks, setTasks] = useState([])

  const getTasks = async ({ }) => {
    axios.get(`${baseUrl + "/api/task"}`).then((result) => {
      setTasks(result.data)
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });
  }

  useEffect(() => {
    getTasks
  })

  const submit = (event: FormEvent) => {
    event.preventDefault()
    console.log(state)

    onSubmit({ name: state.name, color: state.color })
    setState({ ...state, name: '', showColors: false })
    axios.post(`${baseUrl + "api/task/create"}`, {
      name: state.name,
      color: state.color,
      user: session?.user?.email
    }).then((result) => {

    }).catch((err) => {

    });
  }

  return (
    <div className={`w-full flex ${colorsOnTop ? 'flex-col' : 'flex-col-reverse'}`}>

      <div className={`flex justify-evenly items-center gap-2 transition-all duration-300 ${state.showColors ? 'opacity-100 py-5' : 'opacity-0 p-0 h-0'}`}>
        {tasks.map(([color, classes]) => (
          <button key={color} onClick={() => setState({ ...state, color })} type="button" className={`w-7 h-7 rounded-full border-2 transition duration-200 `}></button>
          // <button key={color} onClick={() => setState({ ...state, color })} type="button" className={`w-7 h-7 rounded-full border-2 transition duration-200 ${classes.border} ${state.color === color ? classes.bg : 'bg-inherit'}`}></button>
        ))}
      </div>
      <form onSubmit={submit} className="w-full flex justify-between items-center px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <input type="text" className="flex-1 bg-inherit" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} placeholder="Aa" required />
        <button type="button" onClick={() => setState({ ...state, showColors: !state.showColors })} className={`w-5 h-5 rounded-full transition duration-300 ${state.name ? colors[state.color].bg : colors[state.color].border}`}></button>
      </form>
    </div>
  )
}

export default InputColors
