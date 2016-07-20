<template>
    <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-card mdl-shadow--2dp focus-mes mdl-cell mdl-cell--12-col">
            <div class="mdl-card__supporting-text">
                <div class="demo-list-action mdl-list">
                    <div class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
                        <i class="material-icons mdl-list__item-avatar">visibility</i>
                        <span>关注</span>
                        </span>
                        <a class="mdl-list__item-secondary-action" href="#">99</a>
                    </div>
                    <div class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
                        <i class="material-icons mdl-list__item-avatar">people</i>
                        <span>粉丝</span>
                        </span>
                        <a class="mdl-list__item-secondary-action" href="#">99</a>
                    </div>
                    <div class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
                        <i class="material-icons mdl-list__item-avatar">sms</i>
                        <span>微博</span>
                        </span>
                        <span class="mdl-list__item-secondary-content">
                            <a class="mdl-list__item-secondary-action" href="#">99</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">相册</h2>
            </div>
            <div class="mdl-card__supporting-text">
                <div class="photo-box" v-for = "photo in photos">
                    <img src="../assets/images/p1.jpg">
                </div>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored btn-go-right">
                    <i class="material-icons">forward</i> 进入相册
                </a>
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
                'weibos': [1, 2, 3, 4, 5, 6],
                "photos": [1, 2, 3, 4, 5, 6]
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
    .photo-box{
        float: left;
        width: 110px;
        height: 110px;
        overflow: hidden;
        margin: 5px;
    }
    .photo-box img{
        width: 110px;
        height: 110px;
    }

    .btn-go-right > i{
        color: #ffffff;
    }

    .btn-go-right {
        float: right;
        margin: 5px;
    }

</style>