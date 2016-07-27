<template>
    <div class="user-message">
        <header class="comment__header">
            <img src="../assets/images/avatar.png" class="comment__avatar">
            <div class="comment__author">
                <strong>James Splayd</strong>
                <span>2 days ago</span>
            </div>
        </header>
        <div class="comment__text">
            In in culpa nulla elit esse. Ex cillum enim aliquip sit sit ullamco ex eiusmod fugiat. Cupidatat ad minim officia mollit laborum magna dolor tempor cupidatat mollit. Est velit sit ad aliqua ullamco laborum excepteur dolore proident incididunt in labore elit.
        </div>
    </div>
</template>

<script>
    export default {
        'data': function () {
            return {}
        }
    }
</script>

<style>
    .comment__header {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 16px;
    }


    .comment__text {
        line-height: 1.5em;
    }

    .comment__header > .comment__avatar {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-right: 16px;
    }

    .comment__header > .comment__author {
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
</style>