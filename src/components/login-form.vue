<template>
    <mdl-dialog v-ref:login-form full-width title="登录">
        <form>
            <mdl-textfield floating-label="email" :value.sync="email"></mdl-textfield>
            <br/>
            <mdl-textfield type='password' floating-label="password" :value.sync="password"></mdl-textfield>
            <mdl-button primary @click="login()">登录</mdl-button>
            <mdl-button @click="$refs.loginForm.close">关闭</mdl-button>
        </form>
    </mdl-dialog>
</template>

<script>

    export default {
        'props': ['option'],
        'data': function () {
            return {
                'email': '',
                'password': ''
            }
        },

        'methods': {
            'openLoginForm': function () {
                this.$refs.loginForm.open()
            },
            'closeLoginForm': function () {
                this.$refs.loginForm.close()
            },
            'login': function () {
                
            }
        },

        'watch': {
            'option': function (oldVal, newVal) {
                if(newVal) this.openLoginForm()
            }
        }
    }
</script>

<style>

</style>