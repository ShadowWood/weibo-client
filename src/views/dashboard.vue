<template>
    <div class="mdl-cell mdl-cell--12-col user-mes-card">
        <div class="mdl-card mdl-shadow--2dp">
            <div class="mdl-card__supporting-text">
                <img class="user-avatar" src="../assets/images/avatar.png">
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                    <div class="mdl-tabs__tab-bar">
                        <a class="mdl-tabs__tab" v-bind:class="{'is-active': tab_active === 'my_host_page'}" @click="goRoute('my_host_page')">我的主页</a>
                        <a class="mdl-tabs__tab" v-bind:class="{'is-active': tab_active === 'my_photos'}" @click="goRoute('my_photos')">我的相册</a>
                        <a class="mdl-tabs__tab" v-bind:class="{'is-active': tab_active === 'my_settings'}" @click="goRoute('my_settings')">管理中心</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-view></router-view>
</template>
<script>
    export default {
        'data': function () {
            return {
                'tab_active': ''
            }
        },
        'methods': {
            'goRoute': function (routeName) {
                this.$route.router.go({name: routeName})
            }
        },

        'beforeCompile': function () {
            if (this.$route.name === 'account') {
                this.$route.router.go({name: 'my_host_page'})
            }
            if (this.$route.name === 'my_host_page') {
                this.tab_active = 'my_host_page'
            }
        },

        'watch': {
            '$route.name': function (val, oldVal) {
                this.tab_active = val;
            }
        }
    
    }
</script>
<style>
    .user-mes-card {
        padding: 8px;
    }

    .user-mes-card > .mdl-card {
        width: 100%;
    }

    .user-mes-card > div > .mdl-card__supporting-text {
        background: url('../assets/images/b1.jpg') center / cover;
        width: 100%;
        height: 200px;
    }

    .user-mes-card {
        color: #ffffff;
    }

    .mdl-card__actions {
        padding: 0;
    }

    .mdl-tabs__tab{
        margin-left: 50px;
        margin-right: 50px;
        cursor: pointer;
    }

    .user-avatar{
        width: 120px;
        border-radius: 50%;
        position: absolute;
        top: 10%;
        left: 43%;
    }
</style>