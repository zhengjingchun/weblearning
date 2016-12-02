/**
 * Created by zhengjingchun on 2016/12/2.
 */
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  asideItems: [{
    path: '/h',
    label: 'home'
  }, {
    path: '/p',
    label: 'Archive'
  }, {
    path: '/c',
    label: 'Categories'
  }, {
    path: '/t',
    label: 'Tags'
  }, {
    path: '/g',
    label: 'Guestbook'
  }, {
    path: '/a',
    label: 'About'
  }]
}

export default new Vuex.Store({
  state
})



