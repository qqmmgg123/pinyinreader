<template>
  <div id="app">
    <Reader/>
  </div>
</template>

<script>
import Reader from './components/Reader'

export default {
  name: 'App',
  components: {
    Reader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.editor {
  min-height: 36px;
  text-align: left;
  outline: none;
  border: 1px solid #eee;
  padding: 15px;
}
.viewer {
  text-align: left;
}
.viewer div {
  display: inline-block;
  padding: 5px;
  text-align: center;
}
</style>
