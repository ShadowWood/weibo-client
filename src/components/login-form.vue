<template>
	<mdl-dialog v-ref:login-form full-width title="登录">
		<form v-form name="myform">
			<input-va type='email' floating-label="email" :value.sync="email" required="true"></input-va>
			<br/>
			<mdl-textfield type='password' floating-label="password" :value.sync="password"></mdl-textfield>
		</form>
		<template slot="actions">
			<mdl-button primary @click="login()" v-if="myform.email.valid">登录</mdl-button>
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
        }
    }
</script>

<style>

</style>