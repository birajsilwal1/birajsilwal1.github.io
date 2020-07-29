import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _698134ca = () => interopDefault(import('../src/pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6df52f4c = () => interopDefault(import('../src/pages/announcements/index.vue' /* webpackChunkName: "pages/announcements/index" */))
const _47e987be = () => interopDefault(import('../src/pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _58100d34 = () => interopDefault(import('../src/pages/insta.vue' /* webpackChunkName: "pages/insta" */))
const _cdd9cb52 = () => interopDefault(import('../src/pages/test.vue' /* webpackChunkName: "pages/test" */))
const _ed4c7b2c = () => interopDefault(import('../src/pages/test1.vue' /* webpackChunkName: "pages/test1" */))
const _1b9304f4 = () => interopDefault(import('../src/pages/tutoring/index.vue' /* webpackChunkName: "pages/tutoring/index" */))
const _08a652d2 = () => interopDefault(import('../src/pages/about/aboutUs/index.vue' /* webpackChunkName: "pages/about/aboutUs/index" */))
const _6503ca6a = () => interopDefault(import('../src/pages/about/contactUs/index.vue' /* webpackChunkName: "pages/about/contactUs/index" */))
const _1407ec7f = () => interopDefault(import('../src/pages/about/location/index.vue' /* webpackChunkName: "pages/about/location/index" */))
const _0354e3dc = () => interopDefault(import('../src/pages/about/semesterLongProgram/index.vue' /* webpackChunkName: "pages/about/semesterLongProgram/index" */))
const _bb2a2728 = () => interopDefault(import('../src/pages/about/staff/index.vue' /* webpackChunkName: "pages/about/staff/index" */))
const _18427376 = () => interopDefault(import('../src/pages/announcements/_id/index.vue' /* webpackChunkName: "pages/announcements/_id/index" */))
const _b69142e8 = () => interopDefault(import('../src/pages/events/_id/index.vue' /* webpackChunkName: "pages/events/_id/index" */))
const _bbb42846 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _698134ca,
    name: "about"
  }, {
    path: "/announcements",
    component: _6df52f4c,
    name: "announcements"
  }, {
    path: "/events",
    component: _47e987be,
    name: "events"
  }, {
    path: "/insta",
    component: _58100d34,
    name: "insta"
  }, {
    path: "/test",
    component: _cdd9cb52,
    name: "test"
  }, {
    path: "/test1",
    component: _ed4c7b2c,
    name: "test1"
  }, {
    path: "/tutoring",
    component: _1b9304f4,
    name: "tutoring"
  }, {
    path: "/about/aboutUs",
    component: _08a652d2,
    name: "about-aboutUs"
  }, {
    path: "/about/contactUs",
    component: _6503ca6a,
    name: "about-contactUs"
  }, {
    path: "/about/location",
    component: _1407ec7f,
    name: "about-location"
  }, {
    path: "/about/semesterLongProgram",
    component: _0354e3dc,
    name: "about-semesterLongProgram"
  }, {
    path: "/about/staff",
    component: _bb2a2728,
    name: "about-staff"
  }, {
    path: "/announcements/:id",
    component: _18427376,
    name: "announcements-id"
  }, {
    path: "/events/:id",
    component: _b69142e8,
    name: "events-id"
  }, {
    path: "/",
    component: _bbb42846,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
