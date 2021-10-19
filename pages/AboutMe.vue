<template>
  <!-- about（プロフィール）ページ -->
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">About me</div>
    </div>
    <v-container>
      <v-row class="home-about__contents">
        <!-- プロフィール画像。大画面ではテキストと横並びで表示 -->
        <v-col cols="12" sm="5" class="home-about__contents-img">
          <img
            src="../assets/images/img-service.png"
            alt="作者の顔写真"
            class="img-fluid"
          />
        </v-col>
        <!-- プロフィールテキスト -->
        <v-col sm="7" class="home-about__contents-text">
          <ul>
            <li v-for="aboutItem in aboutItems" :key="aboutItem.name">
              {{ aboutItem.name }}：{{ aboutItem.content }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// プロフィールテキスト用の定数読込
import constants from '../plugins/constants'

// プロフィールテキスト作成用配列aboutItems
export default {
  auth: false,
  name: 'About',
  data() {
    return {
      aboutItems: constants.aboutItems,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>