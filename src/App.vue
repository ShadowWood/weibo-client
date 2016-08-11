<template>
  <div class="mdl-layout mdl-js-layout">
    <app-header></app-header>
    <main class="mdl-layout__content">
      <div class="page-content mdl-grid">
        <router-view></router-view>
      </div>
    </main>
    <footer-mine></footer-mine>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'

  module.exports = {
    'components': {
      'app-header': Header,
      'footer-mine': Footer
    },

    'data': function () {
      return {}
    }
  }
</script>
