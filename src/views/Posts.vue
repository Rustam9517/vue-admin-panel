<template>
  <div class="posts">
    <Filters/>
    <PostList/>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import PostList from "@/components/PostList";
export default {
name: "Posts",
  components:{
    Filters,
    PostList
  }
}
</script>

<style lang="scss" scoped>
.posts{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px 48px;
}
</style>