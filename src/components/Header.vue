<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#">Логотип</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Новини</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Про сайт</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/gallery">Галерея картинок</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contacts">Контакти</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
name: 'Header'
}
</script>
