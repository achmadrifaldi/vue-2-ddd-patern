<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { LAYOUT_DEFAULT } from '@/modules/app/constant/layout.constant';

export default {
  name: 'App',

  computed: {
    layout() {
      let pageLayout = LAYOUT_DEFAULT;
      if (this.$route && this.$route.meta && this.$route.meta.layout) {
        pageLayout = this.$route.meta.layout;
      }

      return `${pageLayout}-layout`;
    },
  },
};
</script>
