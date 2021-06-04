import { createContext, useContext, useReducer } from 'react'
import { sampleReducer } from './reducers/reducers'

const AppContext = createContext()

export function AppWrapper({ children }) {
  let initialState = {
    darkMode: false,
    name: ''
  }

  let [state, dispatch] = useReducer(sampleReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}