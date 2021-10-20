<template>
  <section class="sign-up">
    <v-card class="mt-5 mx-auto" max-width="600">
      <v-form v-model="valid">
        <v-container>
          <v-row justify="center">
            <p cols="12" class="mt-3 display-1 grey--text">ユーザー登録</p>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-text-field v-model="signUp.name" label="ユーザーネーム" />
              <p class="caption mb-0" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-text-field v-model="signUp.email" label="Emailアドレス" />
              <p class="caption mb-0" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-text-field
                v-model="signUp.password"
                type="password"
                label="パスワード"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-btn block class="mr-4 blue white--text" @click="postSignUp">
                登録
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
  auth: false,

  asyncData({ $config }) {
    return {
      apiRegisterUser: $config.apiRegisterUser,
    }
  },

  data() {
    return {
      valid: false,
      signUp: {
        name: '',
        email: '',
        password: '',
      },
      apiRegisterUser: '',
    }
  },
  methods: {
    async postSignUp() {
      await this.$axios
        .$post(this.apiRegisterUser, this.signUp)
        .then((res) => {
          this.$router.push('/SignUpSuccess')
          return res.response
        })
        .catch((err) => {
          this.$router.push('/SingUpFailure')
          return err.response
        })
    },
  },
}
</script>