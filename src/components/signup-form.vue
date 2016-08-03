<template>
    <mdl-dialog v-ref:signup-form full-width title="注册">
        <form>
            <mdl-textfield type='text' floating-label="email" :value.sync="email"></mdl-textfield>
            <br/>
            <mdl-textfield type='password' floating-label="password" :value.sync="password"></mdl-textfield>
            <br/>
            <mdl-textfield type='password' floating-label="password again" :value.sync="password_again"></mdl-textfield>
            <br/>
            <mdl-textfield type='text' floating-label="verify code" :value.sync="verify_code"></mdl-textfield>
        </form>
        <template slot="actions">
            <mdl-button primary @click="signup()">注册</mdl-button>
            <mdl-button @click="$refs.signupForm.close">关闭</mdl-button>
        </template>
    </mdl-dialog>
</template>

<script>

    export default {
        'data': function () {
            return {
                'email': '',
                'password': ''
            }
        },

        'methods': {
            'openSignupForm': function () {
                this.$refs.signupForm.open();
            },
            'closeSignupForm': function () {
                this.$refs.signupForm.close();
            },
            'signup': function () {
                
            }
        },

        'events': {
            'toggleSignup': function (msg){
                if(msg) {
                    this.openSignupForm();
                } else {
                    this.closeSignupForm();
                }
            }
        }
    }
</script>

<style>

</style>
