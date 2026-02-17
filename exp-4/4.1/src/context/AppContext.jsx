import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const resume = {
    name: 'Namit Sharma',
    objective:
      'Motivated Computer Science student with strong problem-solving skills and hands-on coding experience. Seeking an Associate Software Engineer role to apply data structures, algorithms, and software development skills while building scalable, high-performance consumer products in a fast-paced environment.',
    role: 'Frontend Developer'
  }

  const value = useMemo(
    () => ({
      resume,
      theme,
      toggleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }),
    [resume, theme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
