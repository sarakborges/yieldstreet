import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { AppProps } from 'Helpers/Props'

const INITIAL_STATE = {
  step: 0,
  steps: [],
  answers: [],
}

export const AppContext = createContext<{
  appState: AppProps
  setAppState: Dispatch<any> | null
}>({
  appState: { ...INITIAL_STATE },
  setAppState: null,
})

export const AppProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [appState, setAppState] = useState<AppProps>({
    ...INITIAL_STATE,
  })

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <>{children}</>
    </AppContext.Provider>
  )
}
