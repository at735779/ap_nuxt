<template>
  <!-- 問い合わせフォーム -->
  <section class="home-contact">
    <div class="section__title">
      <div class="section__title-text">お問い合わせ</div>
    </div>
    <v-container>
      <v-card align="center">
        <!-- googleformを使用 -->
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc218LezOuEdOWqDHlVCZIAvOzE9cKwINWslfUF_HqUp4AGPQ/viewform?embedded=true"
          width="640"
          height="812"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >読み込んでいます…</iframe
        >
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  auth: false,
}
</script>