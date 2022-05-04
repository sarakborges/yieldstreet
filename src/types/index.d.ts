export {}

declare global {
  interface Window {
    reactSurvey: {
      title: string
      steps: [{}]
    }
  }
}
