import { HeadingElement } from './elements'
const textElements = {
  name: 'text-elements',
  label: 'My text ',
  options: [
    {
      text: 'outlines a header',
      question: null,
      element: HeadingElement
    }
  ]
}

const initialQuestion = {
  name: 'initial-question',
  label: 'I need an element for',
  options: [
    {
      text: 'text',
      question: textElements
    }
  ]
}

export const state = () => {
  return {
    initialQuestion
  }
}
