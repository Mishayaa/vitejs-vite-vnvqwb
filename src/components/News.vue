<template>
<div class="container mt-5">
  <Slider />
  <h2>Новини</h2>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action" v-for="news in newsList" :key="news.id">{{ news.title }}</a>
  </div>
</div>
</template>

<script>
import Slider from './Slider.vue'

export default {
name: 'News',
components: {
  Slider
},
data() {
  return {
    newsList: [
      { id: 1, title: 'Новина 1' },
      { id: 2, title: 'Новина 2' },
      { id: 3, title: 'Новина 3' },
      { id: 4, title: 'Новина 4' },
      { id: 5, title: 'Новина 5' },
      { id: 6, title: 'Новина 6' },
      { id: 7, title: 'Новина 7' },
      { id: 8, title: 'Новина 8' },
      { id: 9, title: 'Новина 9' },
      { id: 10, title: 'Новина 10' }
    ]
  }
}
}
</script>
