import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Contacts from '@/components/Contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
