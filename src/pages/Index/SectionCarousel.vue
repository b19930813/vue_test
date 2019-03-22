<template>
  <q-carousel
    color = "white"
    infinite
    arrows
    autoplay
    height = "400px"
    >

    <q-carousel-slide img-src="statics/rabbit.jpg" />
    <q-carousel-slide img-src="statics/rabbit1.jpg" />
      <q-carousel-control
      position="center"
      slot="control-nav" 
      slot-scope="carousel" 
      class="carouselInput"
    >
    <div class="main">
        <div class="row">
            <div class="col-md-2 col-xs-1"></div>  <!--固定到中間-->
            <div class="col-md-12 col-xs-10">
                <q-input 
                inverted-light
                color="white"
                placeholder="輸入"
                :after="[{
                    icon:'fas fa-search-location'
                }]"
                v-model="search"
                >

                <!--input over-->
                    <q-autocomplete
                        :static-data="{field: 'label',list: countries}"
                    />
                    <q-popover
                        no-focus
                        filter
                        v-show="!search"
                    >
                    <div class="row viewList">
                        <div class="col-sm-6 col-xs-12">
                            <q-list link no-border>
                                <q-list-header>景點</q-list-header>
                                    <q-item>
                                        <q-item-main>
                                            彩虹教堂<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                        </q-item-main>
                                    </q-item>
                                     <q-item>
                                        <q-item-main>
                                            龍虎塔<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                        </q-item-main>
                                    </q-item>
                                    <q-item>
                                        <q-item-main>
                                            85層樓<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                        </q-item-main>
                                    </q-item>
                                    <q-item>
                                        <q-item-main>
                                            LOVE<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                        </q-item-main>
                                    </q-item>
                      </q-list>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <q-list link no-border>
                        <q-list-header>美食</q-list-header>
                        <q-item>
                                <q-item-main>
                                    紅豆尬抹茶烤披薩<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                </q-item-main>
                        </q-item>
                         <q-item>
                                <q-item-main>
                                    肉包包<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                </q-item-main>
                        </q-item>
                         <q-item>
                                <q-item-main>
                                    高雄頂級交通工具<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                </q-item-main>
                        </q-item>
                         <q-item>
                                <q-item-main>
                                    肉燥飯<l-icon :icon="'fab fa-gripfire'" :text="'Hot'" :color="'orange'"/>
                                </q-item-main>
                        </q-item>
                      </q-list>
                    </div>
                  
                    </div>
                    </q-popover>
                </q-input>
            </div>
        </div class="col-md-2 col-xs-1"></div>
    </div>
    <!--加入東西-->
     </q-carousel-control>
    </q-carousel>
</template>

<script>
import _ from 'lodash'
import LIcon from 'src/components/LIcon.vue'
export default {
    data(){
        return{
            search:'',
            countries:[
                {label:'高雄',icon:'fas fa-map-marker-alt' },
                { label:'彩虹教堂', stamp:'高雄' },
                { label:'龍虎塔', stamp:'高雄' },
                { label:'85層樓', stamp:'高雄' },
                { label:'LOVE', stamp:'高雄' },
                { label:'紅豆尬抹茶烤披薩', stamp:'高雄' },
                { label:'肉包包', stamp:'高雄' },
                { label:'高雄頂級交通工具', stamp:'高雄' },
                { label:'肉燥飯', stamp:'高雄' }
            ]
        }
    },
    components:{
      LIcon  
    },
    methods:{
        advFilter(terms , {field,list}){
            return _.filter(list,context=>{
                return context[field].match(terms)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.carouselInput
 width 70%
 .carouselInput .main
  text-align center
  color white
.carouselInput .main .search
 width 300px
.imageWall
   width 100px
   height 100px
   obkect-fit cover
 @media (min-width 768px)
  .carouselInput .title
    font-size 48px
  .carouselInput.subtitle
    font-size 24px

@media (max-width 768px)
  .carouselInput .title
    font-size 24px
  .carouselInput .subtitle
    font-size 16px

@media (max-width 576px)
  .viewList
    width 280px
</style>