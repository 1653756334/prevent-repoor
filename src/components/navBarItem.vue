<template>
  <div class="wrap" @mouseenter="showInner" @mouseleave="hideInner">
    <div class="outer">
      {{ content.outer }}
    </div>
    <div class="inner" v-if="isShowInner">
      <div v-for="item in content.inner" :key="item.name" class="innerItem">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    content: Object,
  },
  setup() {
    const isShowInner = ref(false);
    const showInner = () => {
      isShowInner.value = true;
    };
    const hideInner = () => {
      isShowInner.value = false;
    };
    return {
      showInner,
      hideInner,
      isShowInner,
    };
  },
};
</script>

<style lang="less" scoped>
@ratio: 1.3;
.wrap {
  user-select: none;
  padding: 0 14px;
  cursor: pointer;
  height: 100%;
  .outer {
    height: 100%;
    line-height: (80px / @ratio);
  }
  .inner {
    transform: translateX(-14px);
    animation: fadeIn 0.3s ease-in-out;
    .innerItem {
      width: 100% + 28px;
      height: (49px / @ratio);
      line-height: (49px / @ratio);
      background-color: rgba(231, 114, 89, 0.8);
      margin-top: 1px;
      text-align: center;
      color: white;
    }
  }
}
.wrap:hover {
  background-color: rgba(231, 114, 89, 0.8);
  height: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>