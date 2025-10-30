<template>
    <section class="card">
        <div class="card-header">
            <h3>Complete la informacion solicitada a continuacion</h3>
        </div>

        <div class="card-body">
            <h3><u>Interpolacion, v-text, v-html</u></h3>
            <!--Interpolacion-->
            <p>{{ mensaje }}</p>
            <!--v-text -->
            <p v-text="mensaje"></p>
            <!--v-html -->
            <p v-html="mensaje"></p>
            
            <br />

            <h3><u>Property Binding, v-bind</u></h3>
            <!--hay varias formas de hacer binding-->
            <input  type="text" value="123" /> <br />
            <!--forma completa de v-bind utilizando un atributo declarado por fuera-->
            <input type="text" v-bind:value="valor" /><br />
            <!--tambien se puede sumar interpolacion-->
            <input type="text" v-bind:value="valor" />{{ valor }}<br />
            <!--forma reducida de v-bind-->
            <input type="text" :value="valor" /><br />
            
            <br />

            <h3><u>Event Binding, v-on</u></h3>
            <button class="btn btn-success me-3" v-on:click="contador++">
                Contar {{ contador }}
            </button>

            <!--forma reducida de v-on-->
             <button class="btn btn-success me-3" @click="contador2++">
                Contar {{ contador2 }}
            </button>

            <button class="btn btn-success me-3" @click="incrementar()">
                Contar {{ getContador3() }}
            </button>

            <br />

            <h3><u>Double data binding, v-model</u></h3>
            <!--conocido como data binding manual-->
            <input type="text" :value="valor2" @input="actualizar($event)" /><br />{{ valor2 }}
            <!--v-model o automatico-->
            <input type="text" v-model="valor2" /><br />{{ valor2 }}
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
			mensaje: "Bienvenido al formulario de pagos",
            valor: 123,
            valor2:123,
            contador:0,
            contador2:0,
            contador3:0
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
		incrementar() {
            this.contador3++;
        },
        getContador3() {
            return this.contador3;
        },
        actualizar(e){
            const valor2 = e.target.value;
            console.log(valor2);
            this.valor2 = valor2;
            
        }
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
    background-color: #66199d;
    color: white;
}
</style>

