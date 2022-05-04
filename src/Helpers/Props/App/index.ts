import { StepsProps, AnswerProps } from 'Helpers/Props'
export interface AppProps {
  title: string
  step: number
  steps: StepsProps[]
  answers: AnswerProps[]
}
