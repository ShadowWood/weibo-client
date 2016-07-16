<template>
  <div v-for="i in array" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
    <div class="mdl-card__supporting-text">
      凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字
      凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字
      凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字凑够140个字
      凑够140个字凑够140个字凑够140个字凑够
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
        <i class="material-icons" role="presentation">thumb_up</i><span class="visuallyhidden">like comment</span>
        <span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 92.5097px; height: 92.5097px; transform: translate(-50%, -50%) translate(14px, 15px);"></span></span>
      </button>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
        <i class="material-icons" role="presentation">thumb_down</i><span class="visuallyhidden">like comment</span>
        <span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 92.5097px; height: 92.5097px; transform: translate(-50%, -50%) translate(14px, 15px);"></span></span>
      </button>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
        <i class="material-icons" role="presentation">comment</i><span class="visuallyhidden">like comment</span>
        <span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 92.5097px; height: 92.5097px; transform: translate(-50%, -50%) translate(14px, 15px);"></span></span>
      </button>
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>

    </div>
    <!--<div class="mdl-card__menu">-->
      <!--<button class="mdl-button mdl-button&#45;&#45;icon mdl-js-button mdl-js-ripple-effect">-->
        <!--<i class="material-icons">share</i>-->
      <!--</button>-->
    <!--</div>-->
  </div>
</template>

<script>
  module.exports = {
    'data':  function () {
      return {
        array: [1, 2, 3, 4, 5, 6]
      }
    }
  }
</script>
