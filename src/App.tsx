import { FC } from 'react'

import { AppProvider } from 'Contexts'

import { AppProps } from 'Helpers/Props'

import { AppTemplate } from 'Components/Templates'

export const App: FC<AppProps> = () => {
  return (
    <AppProvider>
      <AppTemplate />
    </AppProvider>
  )
}
