<template>
  <section>
    <p class="text pa-10">login page</p>
    <LoginForm/>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "../components/LoginForm.vue";
@Component({
  components: {LoginForm},
})
export default class LoginPage extends Vue {}
</script>
<style>
.text {
  font-weight: bold;
}
</style>