<template>
  <!-- ログインボタンコンポーネント -->
  <v-row class="button-login">
    <v-col>
      <!-- ログイン済みの場合はホーム画面へリンク -->
      <v-btn
        v-if="$auth.loggedIn"
        dark
        depressed
        color="indigo"
        to="/Home"
        nuxt
      >
        ホーム
      </v-btn>
      <v-btn v-else dark depressed color="indigo" to="/UserLogin" nuxt>
        ログイン
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style lang="scss">
</style>