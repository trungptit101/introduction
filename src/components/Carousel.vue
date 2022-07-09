<template>
  <div></div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    heroImages: Array,
  },
  setup(props) {
    const state = {};
    console.log("heroImages: ", props.heroImages);
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>