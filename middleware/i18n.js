import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // set I18n on app, so we can use I18n in pages asyncData/fetch.
  // This will let us statically generate routes for various languages.
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en'
  })

  // create a function to internationalize links
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
