<template>
  <!-- ボタンコンポーネント -->
  <v-row class="button">
    <v-col>
      <!-- 画面サイズに応じて表示を変更 -->
      <v-btn x-large dark color="indigo" min-width="400" :to="url">
        ＞＞{{ buttonText }}
      </v-btn>
      <v-btn large dark color="indigo" min-width="300" :to="url">
        ＞＞{{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
// ボタンの作成に必要なデータを親から受け取る
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
/* メディアクエリの読込 */
@import '../assets/styles/common.scss';

/* ボタンの装飾 */
.button {
  text-align: center;
}
.v-btn {
  font-weight: bold;
}

/* 大画面では大きいボタンを表示 */
.v-btn:not(.v-btn--round).v-size--large {
  @include display_pc {
    display: none !important;
  }
}
.v-btn:not(.v-btn--round).v-size--x-large {
  display: none;
  @include display_pc {
    display: inline-flex !important;
  }
}
</style>