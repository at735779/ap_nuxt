<template>
  <!-- クリックに応じてボタンの色を切り替える -->
  <v-btn
    block
    :class="registeredWord(constantWord) === isSelect ? 'white' : 'blue'"
    @click="
      changeSelectFlag()
      emitClickedWord(constantWord)
    "
    >{{ constantWord }}
  </v-btn>
</template>

<script>
export default {
  // 親SetInterestWordからボタン用の変数を受け取る
  props: {
    constantWord: {
      type: String,
      default: '',
    },
    registeredWords: {
      type: Array,
      default: () => [],
    },
  },

  // 初期値の設定
  data() {
    return {
      response: '',
      isSelect: 0,
      registeredIndex: '',
    }
  },

  methods: {
    // ワードが登録済みかを判定
    registeredWord(constantWord) {
      this.registeredIndex = this.registeredWords.findIndex(
        (x) => x.word === constantWord
      )
      if (this.registeredIndex === -1) {
        return 0
      } else {
        return 1
      }
    },

    // クリックに応じてisSelectを変化させる
    changeSelectFlag() {
      if (this.isSelect === 0) {
        this.isSelect = 1
        return this.isSelect
      } else {
        this.isSelect = 0
        return this.isSelect
      }
    },

    // クリックされたボタンの名前を親SetInterestWordに渡す
    emitClickedWord(constantWord) {
      this.$emit('btn-click', constantWord)
    },
  },
}
</script>