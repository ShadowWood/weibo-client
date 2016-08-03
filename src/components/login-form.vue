<template>
    <mdl-dialog v-ref:login-form full-width title="登录">
        <form>
            <mdl-textfield floating-label="email" :value.sync="email"></mdl-textfield>
            <br/>
            <mdl-textfield type='password' floating-label="password" :value.sync="password"></mdl-textfield>
        </form>
        <template slot="actions">
            <mdl-button primary @click="login()">登录</mdl-button>
            <mdl-button @click="$refs.loginForm.close">关闭</mdl-button>
        </template>
    </mdl-dialog>
</template>

<script>

    export default {
        'props': ['toggle'],
        'data': function () {
            return {
                'email': '',
                'password': ''
            }
        },

        'methods': {
            'openLoginForm': function () {
                this.$refs.loginForm.open();
            },
            'closeLoginForm': function () {
                this.$refs.loginForm.close();
            },
            'login': function () {
                
            }
        },

        'events': {
            'toggleLogin': function (msg){
                if(msg) {
                    this.openLoginForm();
                } else {
                    this.closeLoginForm();
                }
            }
        }
    }
</script>

<style>

</style>