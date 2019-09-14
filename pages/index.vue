<template>
  <fragment>
    <h1>HTML Element Explorer</h1>
    <p>A project to help you decide which semantic HTML element to use.</p>
    <form>
      <template v-for="(question, index) in responseHistory">
        <question
          :key="index"
          :question="question"
          :index="index"
          @change="responseSelected"
        />
      </template>
    </form>
    <selected-element v-if="selectedElement" :element="selectedElement" />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Question from '../components/question'
import SelectedElement from '../components/selected-element'

export default {
  components: {
    Fragment,
    Question,
    SelectedElement
  },
  data() {
    return { locale: this.$store.state.locale }
  },
  computed: {
    initialQuestion() {
      return this.$store.state[this.locale].initialQuestion
    },
    responseHistory() {
      return this.$store.state.responseHistory
    },
    currentQuestion() {
      return this.$store.state.responseHistory[
        this.$store.state.responseHistory.length - 1
      ]
    },
    selectedElement() {
      return this.$store.state.selectedElement
    }
  },
  created() {
    this.$store.commit('addResponseToHistory', this.initialQuestion)
  },
  destroyed() {
    this.$store.commit('clearResponseHistory')
    this.$store.commit('deselectElement')
  },
  methods: {
    responseSelected(selectedOption, index) {
      if (
        selectedOption.question !== null &&
        selectedOption.question !== undefined
      ) {
        this.$store.commit('deselectElement')
        this.$store.commit('resetResponseHistoryToIndex', index)
        this.$store.commit('addResponseToHistory', selectedOption.question)
      } else if (
        selectedOption.element !== null &&
        selectedOption.element !== undefined
      ) {
        this.$store.commit('selectElement', selectedOption.element)
      }
    }
  }
}
</script>
