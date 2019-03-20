<template>
  <q-page>
    <Section-Carousel/>
    <Section-Cards/>
  </q-page>
</template>

<script>
  import SectionCarousel from './SectionCarousel'
 import SectionCards from './SectionCards'
  export default {
    components:{
      SectionCarousel,
      SectionCards
    }
  }
</script>