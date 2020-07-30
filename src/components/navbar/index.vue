<template>
<b-row>
  <b-col cols="12">
    <div class="Header">
      <div>
      <h2>Cursos e treinamentos</h2>
      <h5>Selecione o curso ou treinamento que deseja</h5>
      </div>
    </div>
  </b-col>
</b-row>
</template>

<script>
export default {
  name: 'custom-navbar',
  props:{
    btn:{
      type: String
    }
  }  
}
</script>

<style lang="scss" scoped>

.Header{
  height: 300px;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
  background-image: url('https://certificadocursosonline.com/wp-content/uploads/2018/07/curso-de-mecanica.jpg');
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
</style>