<template>
  <section>
    <div class="text-center">
      <div class="my-16">
        <v-btn @click="HomeBack" x-large color="success" dark>
          LETS START OUR FIRST JOURNY
        </v-btn>
      </div>
    </div>
    <v-row class="ma-16">
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 8 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 8 + 10}`"
          aspect-ratio="2"
          class="grey lighten-1"
        >
          <template v-slot:placeholder>
            <v-row class="ma-10" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "../components/LoginForm.vue";
@Component({
  components: { LoginForm },
})
export default class LoginPage extends Vue {
  HomeBack(): void {
    this.$router.push({ path: "/home", replace: true });
  }
}
</script>
<style>
.text {
  font-weight: bold;
}
</style>