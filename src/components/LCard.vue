<template>

    <q-card inline >
        <q-card-media>
        <img v-bind:src="image" height="250" width="50">
        </q-card-media>
        <q-card-title>
            <span>{{title}}</span>
            <div slot="subtitle" class="q-mt-sm">
            <span>{{comment}}</span>
            </div>
        </q-card-title>
   
      <q-card-main>
              <l-icon :icon="'fas fa-map-marker-alt'" :text="locate" :color="'grey'" class="q-mr-md"/>
      </q-card-main>
    </q-card>
    
</template>

<script>
import LIcon from 'src/components/LIcon.vue'
export default {
    props:{
        image:String,
        title:String,
        rate:String,
        locate:String,
        comment:String
    },
    components:{
        LIcon
    }
}

function getImg(){
    return Myimage;
}
</script>