<template>
  <div class="reader">
    <div ref="_editor" class="editor" contenteditable="true"></div>
    <button @click="pinyin">注音</button>
    <div class="viewer" v-html="result"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reader',
  data () {
    return {
      result: ``
    }
  },
  methods: {
    async pinyin () {
      let content = this.$refs._editor.textContent
      let res = await axios({
        url: '/api/pingyin',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { content }
      })
      this.result = res.data.content
    }
  }
}
</script>
