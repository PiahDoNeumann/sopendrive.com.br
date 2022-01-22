<template>
  <div class="parcerias">
    <h3>Seja bem vindo e aproveite nossas parcerias e produtos de qualidade</h3>

    <parceiro-santilena/>

  </div>
</template>

<script>
/*
https://www.atacadaodaroupa.com/index.php?route=affiliate/login
https://ui.awin.com/publisher-signup/br/awin/step1
https://www.awin.com/br/afiliados
https://www.sachii.com.br/index.php?route=information/information&information_id=13
https://afiliados.compreroupa.com.br/
https://www.marisa.com.br/promocao/c/afiliados
https://br.shein.com/affiliate-a-427.html



*/
import ParceiroSantilena from './ParceiroSantilena.vue'

export default {
  name: 'Parceiros',
  props: {
    msg: String
  },
  components: {
    ParceiroSantilena
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
