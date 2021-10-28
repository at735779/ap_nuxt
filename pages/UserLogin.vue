<template>
  <!-- ログインページ -->
  <section class="user-login">
    <v-card class="mt-5 mx-auto" max-width="600">
      <v-form v-model="valid">
        <v-container>
          <v-row justify="center">
            <p cols="12" class="mt-3 display-1 grey--text">ログイン</p>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-text-field v-model="login.email" label="Eメールアドレス" />
              <p class="caption mb-0" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-text-field
                v-model="login.password"
                type="password"
                label="パスワード"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-btn block class="mr-4 blue white--text" @click="userLogin">
                ログイン
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </section>
</template>


<script>
export default {
  data() {
    return {
      valid: false,
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // ログインにはauthモジュールのメソッドを使用
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
        })
      } catch (err) {}
    },
  },
}
</script>