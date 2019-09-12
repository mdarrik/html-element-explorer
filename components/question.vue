<template>
  <label :for="`${question.name}-index`" class="element-question">
    {{ question.label }}
    <select
      :id="`${question.name}-${index}`"
      v-model="selection"
      @change="optionSelected"
    >
      <option disabled selected value="0">...</option>
      <option v-for="opt in question.options" :key="opt.text" :value="opt">{{
        opt.text
      }}</option>
    </select>
  </label>
</template>
<script>
export default {
  name: 'Question',
  props: {
    question: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  data() {
    return { selection: 0 }
  },
  methods: {
    optionSelected() {
      if (this.selection != null) {
        console.log(this.selection)
        this.$emit('change', this.selection, this.index)
      }
    }
  }
}
</script>
<style>
  .element-question {
    display: block;
    margin-bottom: 2rem;
  }
</style>
