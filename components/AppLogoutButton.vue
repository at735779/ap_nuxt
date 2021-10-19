<template>
  <!-- ログアウトボタンコンポーネント -->
  <v-row class="button-logout">
    <v-col>
      <v-btn dark depressed color="indigo" @click="$auth.logout()">
        ログアウト
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style lang="scss">
</style>