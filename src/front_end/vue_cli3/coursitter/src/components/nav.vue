<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="Logo" style="width:30px;"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Faculty <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Major</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Course</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Checker</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" placeholder="Search" type="text">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="Logo" style="margin-left:20px; width:30px;"></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  props: {
    msg: {
      type: String,
    },
  },
  data(){
    return {

    };
  },
}
</script>

<style scoped lang="less" scoped>
.container-fluid{
  margin-top: -60px;
}
</style>
