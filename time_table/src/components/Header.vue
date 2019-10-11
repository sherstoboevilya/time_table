<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">

      <!-- Brand/logo -->
      <div class="navbar-header">
        <button ref="closeNavBtn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#example-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">Рассписание</a>
      </div>

      <!-- Collapsible Navbar -->
      <div class="collapse navbar-collapse" id="example-1">
        <ul class="nav navbar-nav">
          <li class="active" @click="closeButton"><router-link :to="{name: 'Table'}">Сегодня</router-link></li>
          <li @click="closeButton"><router-link :to="{name: 'FullTable'}">Полное</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    closeButton () {
      this.$refs.closeNavBtn.click()
    }
  }
}
</script>

<style scoped>
  .router-link-active{
    background: transparent !important;
  }

  .router-link-exact-active{
    color: #555 !important;
    background-color: #e7e7e7 !important;
  }

</style>
