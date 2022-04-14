<template>
  <div class="home">
    <button class="btn" @click="create">start</button>
    <p></p>
    <br />
    this is home
    <button class="btn" @click="change">
      {{ !$vuetify.theme.dark ? "dark" : "light" }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  name = "razi";
  create(): void {
    alert(this.name);
  }
  change(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
<style>
.btn {
  width: 200px;
  height: 20px;
  background: white;
  align-content: center;
  color: black;
  font-weight: bold;
}
</style>
