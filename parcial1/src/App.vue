<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>Formulario de ingreso de pagos</h2>
        </header>
      </div>

      <div class="card-body">
        <main>
          <Binding />
          <Estructura />
          <Atributos />
          <Formulario />
        </main>
      </div>

    </div>
  </div>
</template>

<script>
/* Importo componentes de archivo simple */
import Binding from './components/Binding.vue';
import Estructura from './components/Estructura.vue';
import Atributos from './components/Atributos.vue';
/*Importo componente Formulario de multiples archivos */
import Formulario from './components/Formulario/index.vue';

export default {
	name: 'App',
  components: {
		Binding,
		Estructura,
		Atributos,
    Formulario
	},
	
}
</script>

<style scoped>
.card-header {
  background-color: #3b085d;
  color: aliceblue;
}
</style>
