<template>
  <div v-for="i in array" class="mdl-cell mdl-cell--12-col">
    <weibo-card></weibo-card>
    <!--<div class="mdl-card__menu">-->
      <!--<button class="mdl-button mdl-button&#45;&#45;icon mdl-js-button mdl-js-ripple-effect">-->
        <!--<i class="material-icons">share</i>-->
      <!--</button>-->
    <!--</div>-->
  </div>
</template>

<script>
  import WeiboCard from './weibo-card'
  module.exports = {
    'data':  function () {
      return {
        array: [1, 2, 3, 4, 5, 6]
      }
    },

    'components': {
      'weibo-card': WeiboCard
    }
  }
</script>
