<template>
  <header>
    <!-- ヘッダーの作成 -->
    <v-app-bar app dark color="indigo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>AdminPush</v-toolbar-title>
      <v-tabs>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <!-- ユーザー登録ボタン -->
      <AppSignUpButton />
      <!-- ログインボタン -->
      <v-tab>
      <AppLoginButton />
      </v-tab>
    </v-app-bar>
    <!-- サイドメニューの作成 -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, sideItemNum) in menuItems"
            :key="sideItemNum"
            :to="menuItem.url"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
// ヘッダー、サイドメニュー用の定数及びボタンコンポーネントの読込
import constants from '../plugins/constants.js'
import AppLoginButton from './AppLoginButton.vue'
import AppSignUpButton from './AppSignUpButton.vue'

// サイドメニュー表示切替用変数drawer、メニュー項目用配列menuItems
export default {
  name: 'AppHeader',
  components: {
    AppLoginButton,
    AppSignUpButton,
  },
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    }
  },
}
</script>

<style lang="scss" scoped>
/* メディアクエリ用のファイル読込 */
@import '../assets/styles/common.scss';

/* ヘッダーのタイトルと項目の重なりを防止 */
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

/* 大画面ではハンバーガーメニューを表示しない */
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

/* 大画面でのみヘッダーの項目を表示する */
.v-tabs {
  display: none;
  @include display_pc {
    display: block !important;
  }
}
</style>