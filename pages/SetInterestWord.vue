<template>
  <section class="set-interest-word">
    <div class="section__title">
      <div class="section__title-text">ワード登録</div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" class="my-5"
          >興味のあるワードを選択して「登録」ボタンを押してください</v-col
        >
      </v-row>
      <v-row class="grey lighten-2">
        <v-col
          v-for="(constantWordItem, constantWordIndex) in constantWords"
          :key="constantWordIndex"
          cols="6"
          sm="2"
        >
          <set-interest-word-child
            :constant-word="constantWordItem.constant_word"
            :registered-words="registeredWords"
            @btn-click="createPostWords"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="postInterestWord()">登録</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// ボタン用のコンポーネント
import SetInterestWordChild from '../components/SetInterestWordChild.vue'

export default {
  components: {
    SetInterestWordChild,
  },

  layout: 'AfterLoginLayout',

  // DBからマスタデータ（定型ワード）と登録済みのワードを取得
  async asyncData({ $axios, $config }) {
    const [registeredResponse, constantResponse] = await Promise.all([
      $axios.$get($config.apiGetWord),
      $axios.$get($config.apiGetConstantWord),
    ])

    // post用の配列の初期値を設定
    const registeredWordKeys = Object.keys(registeredResponse.registered_words)
    const postArray = []
    for (let i = 0; i < registeredWordKeys.length; i++) {
      postArray.push(registeredResponse.registered_words[i].word)
    }

    return {
      registeredWords: registeredResponse.registered_words,
      constantWords: constantResponse.constant_words,
      postWords: postArray,
      apiPostWord: $config.apiPostWord,
    }
  },

  data() {
    return {
      constantWords: [],
      response: '',
      constantWord: '',
      registeredWords: [],
      postWords: [],
      onceFlag: '',
      apiPostWord: '',
    }
  },

  methods: {
    // ユーザーのクリックに応じてpostするワードを追加または削除
    createPostWords(emitWord) {
      if (this.postWords.includes(emitWord)) {
        const deleteIndex = this.postWords.indexOf(emitWord)
        this.postWords.splice(deleteIndex, 1)
      } else {
        this.postWords.push(emitWord)
      }
    },

    // 登録したいワードの配列を送信
    async postInterestWord() {
      await this.$axios
        .$post(this.apiPostWord, this.postWords)
        .then((res) => {
          this.$router.push('/PostSuccess')
          return res.response
        })
        .catch((err) => {
          this.$router.push('/PostFailure')
          return err.response
        })
    },
  },
}
</script>