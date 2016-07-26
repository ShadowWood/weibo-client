<template>
    <form class="reply-form" v-if="replyShow" transition="fade">
        <mdl-textfield floating-label="发表评论" value.sync="name" textarea rows="3"></mdl-textfield>
        <mdl-button colored raised accent>评论</mdl-button>
    </form>
</template>

<script>
    export default{
        'props': ['replyShow'],
        'data': function () {
            return {}
        }
    }
</script>

<style>
    .reply-form{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        margin-bottom: 16px;
    }

    .reply-form .mdl-textfield {
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-right: 16px;
        color: rgb(97, 97, 97);
    }

    .reply-form button {
        margin-top: 20px;
    }

    .reply-form .mdl-textfield input, .demo-blog--blogpost .comments > form .mdl-textfield textarea {
        resize: none;
    }
</style>