<template>
  <section class="post-success">
    <v-container>
      <v-row>
        <v-col class="my-10" cols="12" align="center">登録に成功しました</v-col>
        <v-col cols="12" sm="6" align="center">
          <v-btn :to="{ path: '/UserLogin' }">ログイン画面へ</v-btn>
        </v-col>
        <v-col cols="12" sm="6" align="center">
          <v-btn :to="{ path: '/' }">トップページ</v-btn>
        </v-col>
        <v-col class="mt-5" cols="12"></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  auth: false,
}
</script>

