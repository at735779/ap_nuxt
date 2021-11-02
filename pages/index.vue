<template>
  <!-- トップページ -->
  <section class="home-top">
    <v-container fluid fill-height class="home-top__content">
      <v-row>
        <v-col class="home-top__content-text">
          <p>行政サービスの更新をお知らせ</p>
          <p>興味があるジャンル限定</p>
        </v-col>
      </v-row>
      <!-- アカウント登録用のボタン -->
      <app-button :button-text="buttonText" :url="url" />
    </v-container>
  </section>
</template>

<script>
// ボタンコンポーネントの読込
import AppButton from '../components/AppButton.vue'

// ボタンコンポーネントの引数に代入する値の設定
export default {
  auth: false,

  components: {
    AppButton,
  },

  data() {
    return {
      buttonText: '今すぐ使う',
      url: '/Home',
    }
  },
}
</script>

<style  lang="scss" scoped>
/* メディアクエリ及び共通スタイルの読込 */
@import '../assets/styles/common.scss';

/* 背景画像及びテキストのスタイル設定 */
.home-top__content {
  background: url('../assets/images/img-top.png');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  /* 大画面では背景画像を大きくする */
  @include display_pc {
    height: 80vh;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    /* 大画面では文字を大きくする */
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>