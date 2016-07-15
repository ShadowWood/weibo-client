/**
 * Created by duoyi on 2016/7/13.
 */
import IndexView from './components/index'

module.exports = function (router) {
  router.map({
    '/': {
      'name': 'index',
      'component': IndexView
    }
  })
  
  router.redirect({
    '*': '/'
  })
  
  router.beforeEach(function (transition) {
    transition.next()
  })
  
  router.afterEach(function (transition) {
  })
};
