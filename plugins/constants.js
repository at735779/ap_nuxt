export default {
  // 共通定数の定義
  // ヘッダー及びサイドメニュー項目
  menuItems: [
    {
      name: 'トップ',
      url: '/',
    },
    {
      name: 'サービス',
      url: '/WhatService',
    },
    {
      name: 'お問い合わせ',
      url: '/ContactMe',
    },
  ],
  // フッター項目
  footerItems: [
    {
      name: 'プライバシーポリシー',
      url: '/PrivacyPolicy',
    },
  ],
  // ユーザーページ用のヘッダー項目
  afterLoginMenuItems: [
    {
      name: 'ホーム',
      url: '/Home',
    },
    {
      name: 'ワード登録',
      url: '/SetInterestWord',
    },
    {
      name: 'トップ',
      url: '/',
    },
  ],
}
