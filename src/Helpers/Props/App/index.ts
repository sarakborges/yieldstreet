import { StepsProps } from 'Helpers/Props'
export interface AppProps {
  title: string
  step: number
  steps: StepsProps[]
  isSubmitted: boolean
}
