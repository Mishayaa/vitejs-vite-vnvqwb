<template>
<div class="container mt-5">
  <h2>Галерея картинок</h2>
  <div class="row">
    <div class="col-md-4" v-for="n in 6" :key="n">
      <img :src="'https://via.placeholder.com/150?text=Image+' + n" class="img-fluid" />
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'Gallery'
}
</script>
