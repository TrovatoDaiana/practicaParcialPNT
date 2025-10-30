<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
		<div class="container-fluid">
			<RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<ul class="navbar-nav">
					<li class="nav-item">
						<RouterLink class="nav-link" to="/binding">Binding</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/atributos">Atributos</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/estructura">Estructura</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/contadores">Contadores</RouterLink>
					</li>
					</ul>
					
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
	name: 'Navbar',
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
		// subcomponentes
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

<style scoped></style>