<template>
  <div class="mdl-cell mdl-cell--8-col">
    <message-list></message-list>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
    <!--热点话题-->
    <hot-topic></hot-topic>

    <!--微博找人-->
    <find-people></find-people>
  </div>

</template>

<script>
  import HotTopic from '../components/index-hottopics'
  import FindPeople from '../components/index-find-people.vue'
  import MessageList from '../components/index-message.vue'
  module.exports = {
    'data': function () {
      return {

      }
    },

    'components': {
      'hot-topic': HotTopic,
      'find-people': FindPeople,
      'message-list': MessageList
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
