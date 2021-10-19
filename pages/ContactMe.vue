<template>
  <!-- 問い合わせフォーム -->
  <section class="home-contact">
    <div class="section__title">
      <div class="section__title-text">Contact</div>
    </div>
    <v-form>
      <v-container>
        <v-row>
          <!-- 項目は上から名前、E-mail、件名、内容の4つ -->
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="名前"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="title"
              :rules="titleRules"
              :counter="30"
              label="件名"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="sentence"
              :rules="sentenceRules"
              :counter="500"
              label="問い合わせ内容"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn>aaa</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </section>
</template>

<script>
// バリデーション及び初期値の設定
export default {
  auth: false,
  data: () => ({
    name: '',
    nameRules: [
      (v) => !!v || '名前を入力してください',
      (v) => v.length <= 10 || '名前は10文字以下にしてください',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mailアドレスを入力してください',
      (v) => /.+@.+/.test(v) || 'E-mailアドレスの形式ではありません',
    ],
    title: '',
    titleRules: [
      (v) => !!v || '件名を入力してください',
      (v) => v.length <= 30 || '件名は30文字以下にしてください',
    ],
    sentence: '',
    sentenceRules: [
      (v) => !!v || '問い合わせ内容を入力してください',
      (v) => v.length <= 500 || '問い合わせ内容は500文字以下にしてください',
    ],
  }),
}
</script>