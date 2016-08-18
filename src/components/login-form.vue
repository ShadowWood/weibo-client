<template>
	<mdl-dialog v-ref:login-form full-width title="登录">
        <validator name="loginVa">
		<form id="login-form">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="email" id="email" v-validate:email="['email']">
                <label class="mdl-textfield__label" for="email">email</label>
            </div>
			<br/>
            <span class="warning" v-if="$loginVa.email.touched && $loginVa.email.invalid">
                邮箱格式错误
                <br/>
            </span>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password" v-validate:password="{maxlength: 10, minlength: 6}">
                <label class="mdl-textfield__label" for="password">password</label>
            </div>
            <br/>
            <span class="warning" v-if="$loginVa.password.touched && $loginVa.password.invalid">密码长度为6到10位</span>
		</form>
        </validator>
		<template slot="actions">
			<mdl-button primary @click="login()" v-if="$loginVa.valid">登录</mdl-button>
            <mdl-button disabled @click="login()" v-if="$loginVa.invalid">登录</mdl-button>
			<mdl-button @click="$refs.loginForm.close">关闭</mdl-button>
		</template>
	</mdl-dialog>
</template>

<script>
    import InputVa from './input-va.vue'

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
                this.$refs.loginForm.close();
                this.$root.currentUser = {nick: 'TestUser'};
                this.$route.router.go({name: 'my_host_page'})
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
        },

        'components': {
            'input-va': InputVa
        },

        'ready': function () {
            let inputs = document.getElementsByClassName('mdl-textfield');
            for (let i = 0; i < inputs.length; i++){
                componentHandler.upgradeElement(inputs[i]);
            }
        },

        'validators': {
            'email': {
                'check': function(val){
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
                }
            }
        }
    }
</script>

<style>
.warning{
    color: #d50000;
}
</style>