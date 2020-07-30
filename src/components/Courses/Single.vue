<template>
  <b-container fluid >
<b-row>
  <b-col cols="12">
    <div class="Header" :style="{'background-image': 'url(' + item.thumb + ')'}">
      <div>
      <h2>{{ item.name }}</h2>
      </div>
    </div>
  </b-col>
</b-row>
 
<b-row class="justify-content-center">
    <b-col cols="8" class="Courses my-5">

    <b-row>
      <b-col cols="12" class="Courses-item-description">
        <p>{{ item.description }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" md="4" class="Courses-item-gallery">
        <b-img fluid :src="item.image" ></b-img>
      </b-col>
    </b-row>
  </b-col>
</b-row>

  </b-container>
</template>
<script>
import CourseService from "@/services/resources/CourseService";

const service = CourseService.build();

export default {
  data () {
    return {
      item: {}
    }
  },
  methods: {
    goBack(){
      this.$router.back();
    },
    fetchCourse(id){

      let data = {
        id: id
      };

      service
      .read(data)
      .then(response => {
        this.item = response;
      })
      .catch(err => {
        console.log(err);
      });

    }
  },
  mounted(){
    var id = this.$route.params.id;
    this.fetchCourse(id);
  }

  }
</script>

<style lang="scss">


.Header{
  height: 300px;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;

  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h2{
    position: relative;
    z-index: 9;
    font-size: 40px;
    color: #ff6600;
    font-weight: bold;
    text-transform: uppercase;
  }

  h5{
    position: relative;
    z-index: 9;
    font-size: 22px;
    color: #fff;
  }

}

.Courses{
  background: #fff;
  border-radius: 15px;


    .Courses-item-description{
      font-size: 18px;
      color: #444;
      text-align: center;
      line-height: 1.4;
      padding: 20px;
    }

    .Courses-item-gallery{
      padding: 20px;
      img{
        border-radius: 15px;
      }
    }
  
}

</style>