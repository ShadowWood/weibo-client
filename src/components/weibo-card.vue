<template>
    <div class="mdl-card mdl-shadow--2dp weibo-card">
        <user-message></user-message>
        <div class="mdl-card__actions mdl-card--border">
            <mdl-button icon>
                <i class="material-icons">thumb_down</i>
                <i class="icons-number">99</i>
            </mdl-button>
            <mdl-button icon>
                <i class="material-icons">thumb_up</i>
                <i class="icons-number">99</i>
            </mdl-button>
            <mdl-button icon @click="showComments()">
                <i class="material-icons">comment</i>
                <i class="icons-number">99</i>
            </mdl-button>
            <mdl-button>
                <i class="material-icons">launch</i>
            </mdl-button>
        </div>
        <div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments" v-if="show" transition="fade">
            <reply-card reply-show='true'></reply-card>
            <card-comments v-for="comment in comments"></card-comments>
        </div>
    </div>
</template>
<script>
    import CardComments from './card-comments'
    import Reply from './reply'
    import UserMessage from './user-message'
    export default{
        'data': function () {
            return {
                'show': false,
                'comments': [1, 2, 3, 4, 5]
            }
        },

        'components': {
            'card-comments': CardComments,
            'reply-card': Reply,
            'user-message': UserMessage
        },

        methods: {
            'showComments': function () {
                this.show = !this.show;
            }
        }
    }
</script>
<style>
    .weibo-card{
        width: 100%;
        margin-bottom: 10px;
        min-height: 120px;
    }

    .weibo-card > .user-message{
        padding: 15px;
    }

    .weibo-card > .mdl-card__actions > button{
        float: right;
        margin: 5px 20px 5px 10px;
    }

    .icons-number{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 600;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.24);
    }

    .comments {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-align-items: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        padding: 32px;
        box-sizing: border-box;
        background-color: #EEE;
        width: 100%;
    }
</style>