import { useEffect } from 'react'
import './App.css'
import { useAppContext } from './context/AppContext'

export default function App() {
  const { resume, theme, toggleTheme } = useAppContext()

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <main className="card">
      <h1 className="name">{resume.name}</h1>
      <p className="role">{resume.role}</p>
      <p className="label">Career Objective</p>
      <p className="objective">{resume.objective}</p>
      <button type="button" className="toggle" onClick={toggleTheme}>
        Switch Theme
      </button>
    </main>
  )
}
