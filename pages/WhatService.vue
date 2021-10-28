<template>
  <!-- サービス内容のページ -->
  <section class="home-service">
    <div class="section__title">
      <div class="section__title-text">サービス内容</div>
    </div>
    <v-container>
      <v-row class="home-service__contents">
        <!-- 図解画像。大画面では説明テキストと横並びで表示 -->
        <v-col cols="12" sm="7" class="home-service__contents-img">
          <img
            src="../assets/images/img-service.png"
            alt="サービス内容の図解"
            class="img-fluid"
          />
        </v-col>
        <!-- サービス内容の説明文 -->
        <v-col sm="5" class="home-service__contents-text">
          <p>市町村ホームページの更新を通知します</p>
          <p>①興味のあるワードを登録</p>
          <p>
            ②市町村のホームページで、登録ワードに関する情報が更新されると、1日1回メールでお知らせします
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  auth: false,
}
</script>

<style lang="scss" scoped>
</style>