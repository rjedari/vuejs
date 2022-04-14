<template>
  <section>
    <div class="pa-5 d-flex flex-column">
      <v-form>
        <v-text-field
          class="mx-2"
          v-model="userName"
          label="userName"
          outlined
        ></v-text-field>
        <v-text-field
          class="mx-2"
          v-model="passWord"
          label="passWord"
          outlined
        ></v-text-field>
      </v-form>
      <v-btn
        :disabled="userName.length === 0"
        block
        elevation="8"
        depressed
        color="primary "
        @click="alert"
      >
        Primary
      </v-btn>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class LoginForm extends Vue {
  userName = "";
  passWord = "";
  alert() {
    alert(`${this.userName} is login`);
  }
}
</script>