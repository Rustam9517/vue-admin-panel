<template>
  <div class="filters">
    <h1>Posts</h1>
    <div class="filter-controllers">
      <div class="filter-items">
        <select class="first-filtr" name="posts">
          <option  value="all posts">All posts</option>
          <option value="published posts">Published posts</option>
          <option value="scheduled posts">Scheduled posts</option>
          <option value="featured posts">Featured posts</option>
        </select>
        <select name="access">
          <option  value="all access">All access</option>
          <option value="public">Public</option>
          <option value="members-only">Members-only</option>
          <option value="paid members-only">Paid members-only</option>
        </select>
        <select name="authors">
          <option  value="all authors">All authors</option>
          <option value="author name">Martine Nadal</option>
        </select>
        <select name="tags">
          <option  value="all authors">All tags</option>
          <option value="business">Business</option>
          <option value="portfolio">Portfolio</option>
        </select>
        <select name="sort">
          <option  value="newest"><span>Sort by: </span> Newest</option>
          <option  value="oldest"><span>Sort by: </span> Oldest</option>
          <option  value="recently updated"><span>Sort by: </span> Recently updated</option>
          <option  value="open rate"><span>Sort by: </span> Open rate</option>
        </select>
      </div>
      <a href="#" class="add-post">
        <span>New post</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters"
}
</script>

<style lang="scss" scoped>
  .filters{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    padding: 0 10px;
    h1{
      color: #343f44;
      font-size: 28px;
    }
    .add-post{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      text-decoration: none;
      color: #fff;
      height: 33px;
      max-width: 80px;
      background: linear-gradient(#aed452,#8fb925);
      font-weight: 500;
      text-align: center;
      letter-spacing: .2px;
      span{
        font-size: 13px;
        padding: 0 11px;
      }
    }
    .filter-controllers{
      display: flex;
      align-items: center;
      .filter-items{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 24px;
        select{
          height: 33px;
          background: #fff;
          font-size: 13px;
          font-weight: 400;
          color: #343f44;
          letter-spacing: .2px;
          box-shadow: 0 0 0 1px rgba(0,0,0,.01), 0 1px 2px rgba(0,0,0,.05);
          outline: none;
          border: none;
          border-right: 1px solid #f8fafc;
          max-width: 90px;
        }
        .first-filtr{
          border-radius: 4px 0 0 4px;
        }
        select:nth-last-child(1){
          max-width: 126px;
          border-radius: 0 4px 4px 0;
        }
      }
    }

  }
</style>