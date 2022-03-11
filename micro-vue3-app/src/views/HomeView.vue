<template>
  <div class="container-vue3-micro">
    <a @click="goAbout" class="test-button">我是 vue3 微应用</a>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  setup() {
    const router = useRouter();

    const goAbout = () => {
      router.push({
        path: "/vue/about",
      });
    };

    return {
      goAbout,
    };
  },
});
</script>

<style scoped lang="scss">
.container-vue3-micro {
  display: flex;
  .test-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 66px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 700;
    background: rgba($color: #15c41d, $alpha: 0.2);
  }
}
</style>
