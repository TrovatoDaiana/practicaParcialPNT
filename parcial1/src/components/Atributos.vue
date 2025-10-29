<template>
    <section class="card">
        <div class="card-header">
            <h3>Atributos del formulario</h3>
        </div>

        <div class="card-body">

        </div>
    </section>
</template>

<script>
export default {
	name: 'Binding',
	props: {
		// ejemplo: value: { type: [String, Number], default: '' }
	},
	data() {
		return {
			// estado local
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

<style scoped>
.card-header {
    background-color: #9868ba;
    color: white;
}
</style>