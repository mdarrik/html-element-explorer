export const HeadingElement = {
  elementName: 'Section Heading Element',
  elementTag: {
    label: 'Tag',
    value: '<h1>-<h6>'
  },
  description: {
    label: 'Description',
    value: 'An element that represents the heading of the current section.'
  },
  accessibilityNotes: {
    label: 'Accessibility Considerations',
    value: [
      `Section Headers are used in creating the document outline.
      It's important that headers increase linearly (h1 -> h2 -> h3...) otherwise the document outline can be jarring for users of Assistive Technology.`
    ]
  }
}
