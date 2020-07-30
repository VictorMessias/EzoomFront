<template>
<b-row class="justify-content-center">
    <b-col cols="8" class="Courses my-5">

    <b-row class="Courses-item" v-for="item in courses" :key="item.id">
      <b-col cols="8" class="Courses-item-title">
        <router-link :to="'/cursos/' + item.id"> {{ item.name }}</router-link>
      </b-col>

      <b-col cols="4" class="Courses-item-thumb">
        <router-link :to="'/cursos/' + item.id">
          <b-img fluid :src="item.thumb" ></b-img>
        </router-link>
      </b-col>
    </b-row>
  </b-col>
</b-row>
</template>
<script>
import CourseService from "@/services/resources/CourseService";

const service = CourseService.build();

export default {
  data () {
    return {
      courses: [],
      loading: true,
    }
  },
  methods: {
    fetchCourses(){
      this.loading = true;
      this.courses = [];

      service
      .search()
      .then(response => {
        this.courses = response;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });    
    },
  },
  mounted(){
    this.fetchCourses();
  }

  }
</script>

<style lang="scss">

.Courses{
  background: #fff;
  border-radius: 15px;

  .Courses-item{
    padding: 30px;
    display: flex;
    align-items: center;

    .Courses-item-title a{
      display: block;
      font-size: 22px;
      color: #222;
      text-align: center;
    }

    .Courses-item-thumb img{
      border-radius: 15px;
    }
  }
}

</style>