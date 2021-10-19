<template>
  <!-- フッターの作成-->
  <v-footer dark color="indigo" padless>
    <v-row justify="center" no-gutters class="flex-column">
      <v-btn
        v-for="footerItem in footerItems"
        :key="footerItem.name"
        :to="footerItem.url"
        depressed
        text
      >
        {{ footerItem.name }}
      </v-btn>
      <!-- 著作権表示。フッター項目とは別行で表示 -->
      <v-col class="py-2 text-center" cols="12">Copyright 2021 AdminPush</v-col>
    </v-row>
  </v-footer>
</template>

<script>
// フッター用の定数読込
import constants from '../plugins/constants.js'

// フッターの項目作成用配列footerItems
export default {
  name: 'AppFooter',
  data() {
    return {
      footerItems: constants.footerItems,
    }
  },
}
</script>

<style lang="scss" scoped>
/* メディアクエリ用のファイル読込 */
@import '../assets/styles/common.scss';

/* 大画面ではフッター項目を横並びにする */
.flex-column {
  @include display_pc {
    flex-direction: row !important;
  }
}
</style>
