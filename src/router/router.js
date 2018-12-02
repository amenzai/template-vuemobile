// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
const route = [{
  path: '/index',
  component: _import('index'),
  name: 'Index',
  meta: {
    title: '微型植物工厂'
  }
}, {
  path: '/main',
  component: _import('index'),
  name: 'Main',
  meta: {
    title: '主页'
  },
  children: [{
    path: '/view-status',
    component: _import('index'),
    name: 'ViewStatus',
    meta: {
      title: '状态查看'
    }
  }]
}, {
  path: '/login',
  name: 'Login',
  component: _import('index'),
  meta: {
    title: '登录'
  }
}, {
  path: '/register',
  name: 'Register',
  component: _import('index'),
  meta: {
    title: '注册'
  }
}]

export default route
