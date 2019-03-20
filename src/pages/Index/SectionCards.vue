<template>
    <div class="row section-card q-ma-sm">
    <div class="col-12 q-pa-sm"><b class="title">熱門景點</b></div>
    
       <template v-for="(data,idx) in rabbitList">
      <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-sm" :key="idx">
        <l-card 
          :title="data.title"
          :rate ="data.rate"
          :image="data.image"
          :locate="data.locate"
          :comment="data.comment"
        />
      </div>
    </template>
        <div class="col-12 q-pa-sm"><b class="title">熱門美食</b></div>
       <template v-for="(data,idx) in foodList">
      <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-sm" :key="idx">
        <l-card 
          :title="data.title"
          :rate ="data.rate"
          :image="data.image"
          :locate="data.locate"
          :comment="data.comment"
        />
      </div>
    </template>
    </div>
    
</template>

<script>
//好像不能這樣呼叫了-.-

import LCard from 'src/components/LCard.vue'
export default {
    components:{
        LCard
    },
    data(){
    return{
        rabbitList:[
            {
                title:'彩虹教堂',rate:'5.0',image:'khCard1.jpg',locate:'高雄',comment:'彩虹教堂有很多免費的彩虹頻道可以觀賞喔!'
            },
             {
                title:'龍虎塔',rate:'5.0',image:'khCard2.jpg',locate:'高雄',comment:'鼠牛虎兔龍蛇馬羊猴雞狗豬!'
            },
             {
                title:'85層樓',rate:'5.0',image:'khCard3.jpg',locate:'高雄',comment:'免費山豬租借!'
            },
             {
                title:'LOVE',rate:'5.0',image:'khCard4.jpg',locate:'高雄',comment:'愛情產業鏈，合法性交易!'
            },
        ],
          foodList:[
            {
                title:'紅豆尬抹茶烤披薩',rate:'5.0',image:'khFood1.jpg',locate:'高雄',comment:'吃爽!'
            },
             {
                title:'肉包包',rate:'5.0',image:'khFood2.jpg',locate:'高雄',comment:'跪求影片!'
            },
             {
                title:'高雄頂級交通工具',rate:'5.0',image:'khFood3.jpg',locate:'高雄',comment:'山豬肉!'
            },
             {
                title:'肉燥飯',rate:'5.0',image:'khFood4.jpg',locate:'高雄',comment:'一晚30!'
            },
        ]
    }
 }
}

</script>


<style lang="stylus" scoped>
  .col-lg-3 col-sm-6 col-xs-12 q-pa-sm
    display inline-block
   
</style>

