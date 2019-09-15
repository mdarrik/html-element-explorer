<template>
  <article>
    <h2>{{ element.elementName }}</h2>
    <dl>
      <dt>{{ element.elementTag.label }}</dt>
      <dd>
        <pre><code>{{element.elementTag.value}}</code></pre>
      </dd>
      <dt>{{ element.description.label }}</dt>
      <dd>{{ element.description.value }}</dd>
      <dt>{{ element.accessibilityNotes.label }}</dt>
      <dd v-for="note in element.accessibilityNotes.value" :key="note">
        {{ note }}
      </dd>
    </dl>
    <a :href="element.mdnLink.value">{{ element.mdnLink.label }}</a>
  </article>
</template>
<script>
export default {
  props: {
    element: { type: Object, required: true }
  }
}
</script>
