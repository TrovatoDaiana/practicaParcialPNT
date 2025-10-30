<template>
    <section class="card">
        <div class="card-header">
            <h3>Atributos del formulario</h3>
        </div>

        <div class="card-body">
            <!--:style-->
            <button class="btn btn-success my-3" @click="estado1 = !estado1">Cambiar color fondo</button>
            <p :style="{ backgroundColor: estado1 ? 'blueviolet' : 'red', color: 'aliceblue', padding: '10px', borderRadius: '10px' }">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum sit, reprehenderit vel quae optio doloribus totam esse quasi maxime quibusdam nesciunt sint sapiente rem aliquam impedit facilis voluptatibus fugit?</p>

            <br />
             <!--:class-->
            <button class="btn btn-success my-3" @click="estado2 = !estado2">Cambiar color fondo</button>
            <!--<p :class="{ btn:true, 'btn-success': estado2, 'btn-danger': !estado2 }"-->
            <p :class="[`btn`, {'btn-success': estado2, 'btn-danger': !estado2}]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum sit, reprehenderit vel quae optio doloribus totam esse quasi maxime quibusdam nesciunt sint sapiente rem aliquam impedit facilis voluptatibus fugit?</p>
        </div>
    </section>
</template>

<script>
export default {
	name: 'Atributos',
	props: {
		// ejemplo: value: { type: [String, Number], default: '' }
	},
	data() {
		return {
			estado1: true,
            estado2:true
           
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