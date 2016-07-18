<template>
    <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-card mdl-shadow--2dp focus-mes mdl-cell mdl-cell--12-col">
            <div class="mdl-card__supporting-text">
                关注 | 粉丝 | 微博
            </div>
        </div>
    </div>
    <div class="mdl-cell mdl-cell--8-col">
        <div class="mdl-cell mdl-cell--12-col">
            <weibo-card v-for="weibo in weibos"></weibo-card>
        </div>
    </div>
</template>

<script>
    import WeiboCard from '../components/weibo-card'

    export default {
        'data': function () {
            return {
                'weibos': [1, 2, 3, 4, 5, 6]
            }
        },

        'components': {
            'weibo-card': WeiboCard
        }
    }
</script>
<style>
    .focus-mes {
        min-height: 50px;
    }
</style>