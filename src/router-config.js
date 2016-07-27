/**
 * Created by duoyi on 2016/7/13.
 */
import IndexView from './views/index'
import DashBoard from './views/dashboard'
import MyHostPage from './views/my-host-page'
import MyPhotos from './views/my-photos'
import MySettings from './views/my-settings'

export default function (router) {
  router.map({
    '/': {
      'name': 'index',
      'component': IndexView
    },
    '/account': {
      'name': 'account',
      'component': DashBoard,
      subRoutes: {
        '/host': {
          'name': 'my_host_page',
          'component': MyHostPage
        },
        '/photos': {
          'name': 'my_photos',
          'component': MyPhotos
        },
        '/settings': {
          'name': 'my_settings',
          'component': MySettings
        }
      }
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
