<template>
  <div class="drafts">
    <Filters/>
    <DraftList/>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import DraftList from "@/components/DraftList";
export default {
  name: "Drafts",
  components:{
    Filters,
    DraftList
  }
}
</script>

<style lang="scss" scoped>
.drafts{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px 48px;
}
</style>