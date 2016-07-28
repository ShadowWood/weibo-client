<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row mdl-layout__header--waterfall">
      <!-- Title -->
      <span class="mdl-layout-title">微博</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
        <label class="mdl-button mdl-js-button mdl-button--icon"
               for="waterfall-exp">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample"
                 id="waterfall-exp" placeholder="搜索感兴趣的人或微博">
        </div>
      </div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" @click="openLoginDialog()">登录</a>
        <a class="mdl-navigation__link" @click="openSignupDialog()">注册</a>
      </nav>
    </div>
  </header>

  <login-form :option='toggleLoginForm'></login-form>

  <mdl-dialog v-ref:signup-form full-width title="注册">
    <template slot="actions">
      <mdl-button primary @click="number++">Increase</mdl-button>
      <mdl-button primary @click="number--">Decrease</mdl-button>
      <mdl-button @click="$refs.signupForm.close">Close</mdl-button>
    </template>
  </mdl-dialog>
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
      this.toggleLoginForm = true;
    },
    'openSignupDialog': function () {
      this.$refs.signupForm.open()
    }
  },

  'components': {
    'login-form': LoginForm,
    'signup-form': SignupForm
  }
}
</script>
