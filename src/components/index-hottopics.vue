<template>
  <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
    <div class="mdl-card__title">热门话题</div>
    <div class="mdl-card__supporting-text">
      <ul class="demo-list-item mdl-list">
        <li class="mdl-list__item" v-for="topic in hotTopics">
          <a href="#" class="mdl-list__item-primary-content">
            热门话题 {{topic}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  module.exports = {
    'data': function () {
      return {
        hotTopics: [1, 2, 3, 4, 5, 6],
      }
    }
  }
</script>
