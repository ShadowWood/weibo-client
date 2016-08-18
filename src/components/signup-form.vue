<template>
    <mdl-dialog v-ref:signup-form full-width title="注册">
        <validator name="signupVa">
        <form>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" v-model='email' type="email" id="emailr" v-validate:emailr="{email: {rule: true}}">
                <label class="mdl-textfield__label" for="emailr">email</label>
            </div>
            <br/>
            <span class="warning" v-if="$signupVa.emailr.touched && $signupVa.emailr.invalid">
                邮箱格式错误
                <br/>
            </span>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" v-model='password' type="password" id="password" v-validate:password="{maxlength: 10, minlength: 6}">
                <label class="mdl-textfield__label" for="password">password</label>
            </div>
            <br/>
            <span class="warning" v-if="$signupVa.password.touched && $signupVa.password.invalid">
                密码长度为6到10位
                <br/>
            </span>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" v-model='confirm' type="password" id="confirm" 
                    v-validate:confirm="{confirm: {rule: password}}">
                <label class="mdl-textfield__label" for="confirm">confirm password</label>
            </div>
            <br/>
            <span class="warning" v-if="$signupVa.confirm.touched && $signupVa.confirm.invalid">
                两次密码输入不一致
                <br/>
            </span>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" v-model='verify' type="text" id="verify" v-validate:verify="{minlength: 6, maxlength: 6}">
                <label class="mdl-textfield__label" for="verify">verify code</label>
            </div>
            <br/>
            <span class="warning" v-if="$signupVa.verify.touched && $signupVa.verify.invalid">
                验证码长度为6位
                <br/>
            </span>
        </form>
        </validator>
        <template slot="actions">
            <mdl-button primary @click="signup()" v-if="$signupVa.valid">注册</mdl-button>
            <mdl-button disabled v-if="$signupVa.invalid">注册</mdl-button>
            <mdl-button @click="$refs.signupForm.close">关闭</mdl-button>
        </template>
    </mdl-dialog>
</template>

<script>

    export default {
        'data': function () {
            return {
                'email': '',
                'password': '',
                'confirm': '',
                'verify': ''
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
                this.$refs.signupForm.close();
                this.$root.currentUser = {nick: 'TestUser'};
                this.$route.router.go({name: 'my_host_page'})
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
        },

        'ready': function () {
            let inputs = document.getElementsByClassName('mdl-textfield');
            for (let i = 0; i < inputs.length; i++){
                componentHandler.upgradeElement(inputs[i]);
            }
        },

        'validators': {
            'confirm': {
                'check': function(val, rule) {
                    return val === rule;
                }
            },
            'email': {
                'check': function(val){
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
                }
            }
        }
    }
</script>

<style>

</style>
