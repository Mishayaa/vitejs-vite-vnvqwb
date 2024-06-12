<template>
<div class="container mt-5">
  <h2>Контакти</h2>
  <div id="map" style="height: 400px;"></div>
</div>
</template>

<script>
export default {
name: 'Contacts',
mounted() {
  this.initMap()
},
methods: {
  initMap() {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCEGPpakcn89B1rBuvZ3DVn7OlRVhubNvI&callback=initMap`
    script.async = true
    window.initMap = this.renderMap
    document.head.appendChild(script)
  },
  renderMap() {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  }
}
}
</script>
