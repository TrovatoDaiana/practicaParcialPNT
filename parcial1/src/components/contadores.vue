<template>
	 <section class="card">
        <div class="card-header">
            <h3>Componentes contadores</h3>
        </div>

        <div class="card-body">
			<Contador ini="123" fondo="danger"/>
			<Contador ini="456" fondo="warning"/>
			<Contador ini="789" fondo="success"/>
		</div>
	</section>
</template>

<script>
import Contador from './Contador/index.vue';

export default {
	name: 'Contadores',
	props: {
		// ejemplo: value: { type: [String, Number], default: '' }
	},
	data() {
		return {


		}
	},
	watch: {
		// observadores de propiedades o datos
	},
	components: {
		Contador
	},
	computed: {
		// propiedades computadas
	},
	methods: {
		// métodos del componente
	},
	created() {
		// hook created
	},
	mounted() {
		// hook mounted
	},
	beforeUnmount() {
		// limpieza antes de destruir
	}
}
</script>

<style scoped>
.card-header {
	background-color: #9500ff;
	color: white;
}
</style>