<template>
  <div class="postsList">
    <ol>
      <li class="header list-row">
        <div class="list-header posts-titles">TITLE</div>
        <div class="list-header posts-sends">SENDS</div>
        <div class="list-header posts-opens">OPENS</div>
        <div class="list-header posts-status">STATUS</div>
      </li>
      <li class="list-row">
        <router-link to="/post/:id" class="post-info list-data">
          <h3>Biography</h3>
          <p>
          <span class="post-info-content">
            By
            <span class="post-user">Martine Nadal</span>
            in
            <span class="post-tag">Business</span>
            - 2 years ago
          </span>

          </p>
        </router-link>
        <a href="#" class="list-sends list-data"></a>
        <a href="#" class="list-opens list-data"></a>
        <a href="#" class="list-status list-data">
          <span>DRAFT</span>
        </a>
      </li>
      <li class="list-row">
        <router-link to="/post/:id" class="post-info list-data">
          <h3>Biography</h3>
          <p>
          <span class="post-info-content">
            By
            <span class="post-user">Martine Nadal</span>
            in
            <span class="post-tag">Business</span>
            - 2 years ago
          </span>

          </p>
        </router-link>
        <a href="#" class="list-sends list-data"></a>
        <a href="#" class="list-opens list-data"></a>
        <a href="#" class="list-status list-data">
          <span>DRAFT</span>
        </a>
      </li>
      <li class="list-row">
        <router-link to="/post/:id" class="post-info list-data">
          <h3>Biography</h3>
          <p>
          <span class="post-info-content">
            By
            <span class="post-user">Martine Nadal</span>
            in
            <span class="post-tag">Business</span>
            - 2 years ago
          </span>

          </p>
        </router-link>
        <a href="#" class="list-sends list-data"></a>
        <a href="#" class="list-opens list-data"></a>
        <a href="#" class="list-status list-data">
          <span>DRAFT</span>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DraftList"
}
</script>

<style lang="scss" scoped>
.postsList{
  display: flex;
  flex-direction: column;
  ol{
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fff;
    display: table;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 1px rgba(0,0,0,.12), 0 1px 6px rgba(0,0,0,.03), 0 6px 10px -8px rgba(0,0,0,.1);
    .list-row{
      display: table-row;
      border-bottom: 1px solid #e5eff5;
      width: 100%;
      .list-data{
        display: table-cell;
        vertical-align: middle;
        padding: 16px 20px;
        border-top: 1px solid #e5eff5;
        transition: none!important;
      }
      .post-info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        padding: 15px 0 20px 10px;
        h3{
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 3px;
          color: #343f44;
          width: 100%;
          text-align: left;
        }
        p{
          margin: 2px 0 0;
          color: #54666d;
          width: 100%;
          text-align: left;
          .post-info-content{
            margin: 4px 0 0;
            font-size: 13px;
            color: #9baeb8;
            .post-user{
              color: #859ba6;
              font-weight: 500;
            }
            .post-tag{
              color: #859ba6;
              font-weight: 500;
            }
          }
        }

      }
      .list-status{
        text-decoration: none;
        span{
          color: #ad26b4;
          background: rgba(173,38,180,.2);
          display: inline-block;
          border-radius: 3px;
          padding: 0 3px;
        }
      }
      .posts-titles{
        text-align: left;
      }
    }
    .list-header{
      border-bottom: 1px solid #e5eff5;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .1px;
      color: #738a94;
      text-transform: uppercase;
      padding: 10px 20px;
      white-space: nowrap;
      background: #f8fafc;
      display: table-cell;
      vertical-align: middle;
    }

  }
}
</style>