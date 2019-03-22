<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="white"
        text-color="blue-13"
        glossy
      >
       
        <q-toolbar-title>
          樂活高雄
          <div slot="subtitle">Be happy in KH</div>
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn flat class="q-mr-md"  @click="$router.push('/')">Home</q-btn>
          <q-btn flat class="q-mr-md" @click="$router.push('KH')">關於高雄</q-btn>
          <q-btn flat class="q-mr-md" @click="$router.push('spot')">景點</q-btn>
          <q-btn flat class="q-mr-md" @click="$router.push('food')">美食</q-btn> 
          <q-btn flat class="q-mr-md">關於我</q-btn>
        </div>
         <div class="lt-sm">
        <q-btn icon="fas fa-bars" flat @click="rightDrawerOpen = true"/>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      content-class="bg-grey-2"
      side = "right"
     
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
          <q-item @click.native="$router.push('KH')">
          <q-item-side icon="import_contacts" />
          <q-item-main label="關於高雄" sublabel="高雄是殺小" />
        </q-item>
          <q-item @click.native="$router.push('spot')">
          <q-item-side icon="group" />
          <q-item-main label="熱門景點" sublabel="高雄玩殺小" />
        </q-item>
          <q-item @click.native="$router.push('food')">
          <q-item-side icon="face" />
          <q-item-main label="熱門美食" sublabel="高雄吃殺小" />
        </q-item>
         <q-item @click.native="$router.push('about')">
          <q-item-side icon="account_circle" />
          <q-item-main label="關於我" sublabel="我的帥你不得不知" />
        </q-item>
        <q-item>
          <q-item-side icon="account_circle" />
          <q-item-main label="全境封鎖3" sublabel="封殺花媽" />
        </q-item>
          <q-item @click.native="$router.push('/')">
          <q-item-side icon="account_circle" />
          <q-item-main label="回首頁" sublabel="Home" />
        </q-item>
        <!--
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
        -->
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      rightDrawerOpen:false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
