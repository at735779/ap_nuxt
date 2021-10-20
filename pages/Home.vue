<template>
  <section class="home">
    <div class="section__title">
      <div class="section__title-text">ユーザーホーム</div>
    </div>
    <v-container>
      <v-row>
        <v-col class="text-h6 mt-5" cols="12">
          こんにちは、{{ $auth.user.name }} さん
        </v-col>
        <v-col class="text-h6" cols="12" align="center">
          登録中のキーワード
        </v-col>
        <v-col
          v-for="(registeredWord, registeredWordHomeIndex) in registeredWords"
          :key="registeredWordHomeIndex"
          cols="6"
          sm="2"
        >
          <v-card flat color="indigo">
            <v-card-text class="white--text font-weight-bold" align="center">
              {{ registeredWord.word }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-h6 mt-15" cols="12" align="center"
          >更新情報一覧</v-col
        >
        <v-data-table
          :headers="headers"
          :items="dataToSend"
          :items-per-page="5"
          class="elevation-1"
        >
          <template #[`item.url`]="{ item }">
            <a :href="item.url"> {{ item.url }}</a>
          </template>
        </v-data-table>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: 'AfterLoginLayout',

  async asyncData({ $axios, $config }) {
    const [registeredResponse, dataToSendResponse] = await Promise.all([
      $axios.$get($config.apiGetWord),
      $axios.$get($config.apiGetDataToSend),
    ])

    return {
      registeredWords: registeredResponse.registered_words,
      dataToSend: dataToSendResponse.data_to_send,
    }
  },

  data() {
    return {
      response: '',
      headers: [
        { text: 'TITLE', value: 'title' },
        { text: 'URL', value: 'url' },
      ],
    }
  },
}
</script>
