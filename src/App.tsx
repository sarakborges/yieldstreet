import { FC } from 'react'

import { AppProvider, FormProvider } from 'Contexts'

import { AppPage } from 'Components/Pages'

export const App: FC = () => {
  return (
    <AppProvider>
      <FormProvider>
        <AppPage />
      </FormProvider>
    </AppProvider>
  )
}
