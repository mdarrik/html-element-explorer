export const state =() => ({
  selectedElement: '',
  responseHistory: [],
})

export const mutations = {
  selectElement(state, element) {
    state.selectedElement = element
  },
  deselectElement(state) {
    state.selectedElement = ''
  },
  addResponseToHistory(state, response) {
    state.responseHistory.push(response)
  },
  resetResponseHistoryToIndex(state, index) {
    // shorten the length of the array
    state.responseHistory.length = index + 1
  },
  clearResponseHistory(state) {
    state.responseHistory = []
  }
}
