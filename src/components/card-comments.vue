<template>
    <div class="comment mdl-color-text--grey-700">
        <user-message></user-message>
        <nav class="comment__actions">
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons" role="presentation">thumb_up</i><span class="visuallyhidden">like comment</span>
                <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons" role="presentation">thumb_down</i><span class="visuallyhidden">dislike comment</span>
                <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
            <button @click="toggleReplyForm()" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons" role="presentation">comment</i><span class="visuallyhidden">reply comment</span>
                <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
        </nav>
        <reply-card :reply-show="reply_show"></reply-card>
    </div>

</template>

<script>
    import Reply from './reply'
    import UserMessage from './user-message'
    export default {
        'data': function () {
            return {
                'reply_show': false
            }
        },

        'components': {
            'reply-card': Reply,
            'user-message': UserMessage
        },

        'methods': {
            'toggleReplyForm': function () {
                this.reply_show = !this.reply_show;
            }
        }
    }
</script>

<style>
    .comment {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
    }

    .comment {
        padding-top: 15px;
        padding-bottom: 15px;
        border-top:1px solid rgba(0, 0, 0, 0.24);
    }

    .comment > .comment__actions {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 0.8em;
        margin-top: 16px;
    }

    .comment > .comment__actions button {
        margin-right: 16px;
        color: rgba(0, 0, 0, 0.24);
    }


</style>