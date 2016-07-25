<template>
    <div class="mdl-card mdl-shadow--2dp weibo-card">
        <img class="user-avatar-min" src="../assets/images/avatar.png">
        <div class="mdl-card__supporting-text weibo-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <mdl-button icon>
                <i class="material-icons">thumb_up</i>
                <i class="icons-number">99</i>
            </mdl-button>
            <mdl-button icon>
                <i class="material-icons">comment</i>
                <i class="icons-number">99</i>
            </mdl-button>
            <mdl-button>
                <i class="material-icons">launch</i>
            </mdl-button>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .weibo-card{
        width: 100%;
        margin-bottom: 10px;
        min-height: 120px;
    }

    .weibo-content{
        margin-left: 60px;
        min-height: 50px;
    }

    .user-avatar-min{
        position: absolute;
        border-radius: 50%;
        top: 5px;
        left: 5px;
        width: 50px;
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
</style>