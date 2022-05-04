import { FC } from 'react'

import { AppProvider } from 'Contexts'

import { AppTemplate } from 'Components/Templates'

export const App: FC = () => {
  return (
    <AppProvider>
      <AppTemplate />
    </AppProvider>
  )
}
