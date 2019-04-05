/*** 测试自己写的babel-plugin-imports ***/
// import {flatten,join,cloneDeep} from 'lodash'
// import flatten from 'lodash/flatten'
// import join from 'lodash/join'
// import cloneDeep from 'lodash/cloneDeep'

/*** 测试babel-plugin-import ***/
import Vue from 'vue'
new Vue({})
/*1.全量引入*/
// import iView from 'iview'
// Vue.use(iView)
/*2.按需引入*/
import { Button } from 'iview'
// Vue.component('Button', Button)
// Vue.component('Table', Table)
/*3.按需引入所有iview组件*/
// import './iview'
