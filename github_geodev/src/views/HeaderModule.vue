<template>
  <div class="module-box">
       
        <div style="flex: 0 1  10%">
          <dv-decoration-4 :color="['#EFBDB3','#EFBDB3']" :reverse="true" style="height:5px;" />
        </div>
        <div id="title" style="flex: 0 1  80%">
          <div class="d-flex">、
            <dv-decoration-8 :color="['#EFBDB3','#EFBDB3']" style="height: 50px; flex: 0.7" />
              <dv-decoration-11  :color="['#fff', '#EFBDB3']" style="height: 60px; flex: 1.6" >
                <div class="title">GitHub GeoDev Distribution Dashboard</div>
              </dv-decoration-11 >
            <dv-decoration-8 :color="['#EFBDB3','#EFBDB3']" :reverse="true" style="height: 50px; flex: 0.7" />
           
          </div>
           
        </div>
        <div style="flex: 0 1  10%">
          <dv-decoration-4 :color="['#EFBDB3','#EFBDB3']" :reverse="true" style="height:5px;" />
        </div>
      </div>
</template>


<script>
export default {
  props:{
    titleRange:{
      type:String,
      default:() => ' Global '
    }
  },
  
  data() {
    return{
      world:this.titleRange
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 30px;
  color: burlywood;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  }
</style>