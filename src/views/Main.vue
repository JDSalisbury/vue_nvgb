<template>
  <BlogList />
</template>

<script>
export default {
  name: "Main",
  computed: {},
  components: { BlogList: () => import("@/components/bloglist/BlogList") },
};
</script>

<style scoped>
</style>
