<template>
  <header class="mdl-layout__header" id="header">
    <div class="mdl-layout__header-row mdl-layout__header--scroll">
      <!-- Title -->
      <span class="mdl-layout-title">
        <a href="">微博</a>
      </span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right" id='header-search'>
        <label class="mdl-button mdl-js-button mdl-button--icon"
               for="waterfall-exp">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample"
                 id="waterfall-exp" placeholder="搜索感兴趣的人或微博">
        </div>
      </div>
      <nav v-if="$root.currentUser" class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" @click="goHost()">{{ $root.currentUser.nick }}</a>
        <a class="mdl-navigation__link" @click="logOut()">退出登录</a>
      </nav>
      <nav v-else class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" @click="openLoginDialog()">登录</a>
        <a class="mdl-navigation__link" @click="openSignupDialog()">注册</a>
      </nav>
    </div>
  </header>

  <login-form></login-form>
  <signup-form></signup-form>

</template>

<script>
import LoginForm from './login-form'
import SignupForm from './signup-form'

export default {
  'data': function () {
    return {
      'toggleLoginForm': false
    }
  },

  'methods': {
    'openLoginDialog': function () {
      this.$broadcast('toggleLogin', true);
    },
    'openSignupDialog': function () {
      this.$broadcast('toggleSignup', true);
    },
    'logOut': function () {
      this.$root.currentUser = false;
      this.$route.router.go({name: 'index'})
    },
    'goHost': function(){
      this.$route.router.go({name: 'my_host_page'});
    }
  },

  'components': {
    'login-form': LoginForm,
    'signup-form': SignupForm
  },

  'ready': function () {
    var searchEl = document.getElementById('header-search');
    componentHandler.upgradeElement(searchEl);
  }
}
</script>

<style>
  .mdl-layout-title > a {
    color: #fff;
    text-decoration: none;
  }

  a{
    cursor: pointer;
  }
</style>  
