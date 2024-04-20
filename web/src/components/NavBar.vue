<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">
        薄弱点关联潮流精准调控系统
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :class="route_name == 'weakIdentify' ? 'nav-link active' : 'nav-link'" :to="{name: 'weakIdentify'}">薄弱点关联潮流辨识模块</router-link>
        </li>
        <li class="nav-item">
            <router-link :class="route_name == 'loadControl' ? 'nav-link active' : 'nav-link'" :to="{name: 'loadControl'}">负荷联动调控模块</router-link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    setup() {
    
    }
}
</script>

<style scoped>

</style>

