<template>
<b-container fluid >
  <navbar />
  <courses />
</b-container>
</template>

<script>
import Navbar from '@/components/navbar/index.vue';
import Courses from '@/components/Courses/Index.vue';
export default {
  components: {
    Courses,
    Navbar
  }
}
</script>
