<template>
  <!-- ユーザー登録ボタンコンポーネント -->
  <v-row class="button-login">
    <v-col>
      <!-- ログイン済みの場合は表示しない -->
      <v-btn v-if="!$auth.loggedIn" dark depressed color="indigo" to="/SignUp" nuxt>SignUp</v-btn>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style lang="scss">
</style>