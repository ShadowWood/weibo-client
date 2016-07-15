<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <app-header></app-header>
    <main class="mdl-layout__content">
      <div class="page-content mdl-grid">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from './components/header'

  module.exports = {
    'components': {
      'app-header': Header
    },

    'data': function () {
      return {}
    }
  }
</script>
