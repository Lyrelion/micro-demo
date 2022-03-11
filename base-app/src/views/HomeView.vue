<template>
  <!-- 菜单 -->
  <header class="container-base">
    <div
      class="menu-item"
      v-for="(item, index) in data"
      :key="index"
      :index="index"
      @click="handleClick(item, index)"
      :class="{ active: activeIndex === index }"
    >
      {{ item.name }}
    </div>
  </header>
  <!-- 默认路由 -->
  <router-view />
  <!-- 存放微应用的容器 -->
  <div id="micro-app"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import start from "../hooks/micro-app";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      activeIndex: -1,
      data: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "微应用 Vue",
          path: "/vue",
        },
        {
          name: "微应用 React",
          path: "/react",
        },
        {
          name: "微应用 H5",
          path: "/h5",
        },
      ],
    });

    /**
     * 一级菜单选中
     */
    const handleClick = (item: any, index: number) => {
      state.activeIndex = index;
      router.push(item.path);
    };

    onMounted(() => {
      // 初始化配置
      start();
    });

    /**
     * 监听路由的变化
     */
    watch(
      () => route.path,
      (newVal) => {
        // 获取路由地址，设置一级菜单选中项
        state.data.forEach((item, index) => {
          if (newVal.includes(item.path)) {
            state.activeIndex = index;
          }
        });
      },
      {
        immediate: true, // 默认执行
      }
    );

    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">

.container-base {
  .menu-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 700;
    background: rgba($color: #b92828, $alpha: 0.2);
  }
  display: flex;
}
</style>
