import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_bootstrapvue_dafe93bc from 'nuxt_plugin_bootstrapvue_dafe93bc' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_workbox_4da9ff4f from 'nuxt_plugin_workbox_4da9ff4f' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_9fd6e396 from 'nuxt_plugin_nuxticons_9fd6e396' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_templatesplugin4dd1126d_1377f3f7 from 'nuxt_plugin_templatesplugin4dd1126d_1377f3f7' // Source: ./templates.plugin.4dd1126d.js (mode: 'all')
import nuxt_plugin_axios_45e70a1a from 'nuxt_plugin_axios_45e70a1a' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_0daa9753 from 'nuxt_plugin_googleanalytics_0daa9753' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_a_9273242c from 'nuxt_plugin_a_9273242c' // Source: ../src/plugins/a.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"succESS","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"},{"hid":"description","name":"description","content":"Engineering your succESS"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"succESS"},{"hid":"author","name":"author","content":"Biraj Silwal"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"succESS"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"succESS"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Engineering your succESS"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"#"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.30a25cae.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.0ee8be.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.0ee8be.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_dafe93bc === 'function') {
    await nuxt_plugin_bootstrapvue_dafe93bc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4da9ff4f === 'function') {
    await nuxt_plugin_workbox_4da9ff4f(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_9fd6e396 === 'function') {
    await nuxt_plugin_nuxticons_9fd6e396(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin4dd1126d_1377f3f7 === 'function') {
    await nuxt_plugin_templatesplugin4dd1126d_1377f3f7(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_45e70a1a === 'function') {
    await nuxt_plugin_axios_45e70a1a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_0daa9753 === 'function') {
    await nuxt_plugin_googleanalytics_0daa9753(app.context, inject)
  }

  if (typeof nuxt_plugin_a_9273242c === 'function') {
    await nuxt_plugin_a_9273242c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
