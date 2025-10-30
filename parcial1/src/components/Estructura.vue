<template>
    <section class="card">
        <div class="card-header">
            <h3>Estructura del formulario</h3>
        </div>

        <div class="card-body">
            <h3><u>v-if, v-else</u></h3>

            <button class="btn btn-success my-3" @click="mostrar = !mostrar">
                {{ mostrar ? 'Ocultar' : 'Mostrar' }}
            </button>
            <p v-if="mostrar" class="alert alert-warning">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aut perspiciatis soluta neque sint.
                Sit sint animi dignissimos quisquam ipsa consequuntur incidunt ea cumque, dolore ex deserunt quidem
                officiis nisi?
            </p>

            <p v-else class="alert alert-danger">
                Este es un mensaje de advertencia que se muestra cuando el párrafo anterior está oculto.
            </p>

            <br />
            <h3><u>v-show</u></h3>
            <button class="btn btn-success my-3" @click="mostrar2 = !mostrar2">
                {{ mostrar2 ? 'Ocultar' : 'Mostrar' }}
            </button>
            <p v-show="mostrar2" class="alert alert-warning">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aut perspiciatis soluta neque sint.
                Sit sint animi dignissimos quisquam ipsa consequuntur incidunt ea cumque, dolore ex deserunt quidem
                officiis nisi?
            </p>

            <br />
            <h3><u>v-for</u></h3>
            <ul>
                <li v-for="usuario in usuarios">{{ usuario }}</li>
            </ul>

            <br />
            <h3><u>v-foreach</u></h3>
            <ul>
                <li v-for="(usuario, index) in usuarios" :key="index">
                    {{ index + 1 }}-{{ usuario }}
                </li>
            </ul>

            <br />
            <h3><u>v-foreach2</u></h3>

            <button class="btn btn-warning" @click="agregarAlumno">Agregar Alumno</button>
            <div v-if="alumnos.length">
                <ul>
                    <li v-for="(alumno, index) in alumnos" :key="index">
                        <!--la etiqueta pre hace que los objetos se vean como un json-->
                        <!-- {{ index+1 }} - <pre>{{ alumno }}</pre> -->

                        <!--otra forma es concatenando-->
                        <!-- {{ (index+1) + ' - ' + alumno.nombre + ' ' + alumno.apellido + ', edad: ' + alumno.edad + ', curso: ' + (alumno.curso ? 'activo' : 'inactivo') }} -->

                        <!--con interpolación-->
                        {{ `${index + 1} - ${alumno.nombre} ${alumno.apellido}, edad: ${alumno.edad}, curso:
                        ${alumno.curso ? 'activo' : 'inactivo'}` }}

                    </li>
                </ul>

                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Curso</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(alumno, index) in alumnos" :key="index">
                            <td>{{ alumno.nombre }}</td>
                            <td>{{ alumno.apellido }}</td>
                            <td>{{ alumno.edad }}</td>
                            <td>{{ alumno.curso ? 'Activo' : 'Inactivo' }}</td>
                            <td><img :src="alumno.foto" width="100" alt="Foto de {{ alumno.nombre }}" /></td>
                        </tr>
                    </tbody>
                </table>

                <!--Propiedades computadas + v-if,v-else-if y v-else-->
                <h4 class="alert alert-primary">
                    <span v-if="obtenerDatosAlumnos.cantidad==0">Ningun alumno hizo el curso</span>
                    <span v-else-if="obtenerDatosAlumnos.cantidad==obtenerDatosAlumnos.total">Todos los alumnos hicieron el curso</span>
                    <span v-else>{{ obtenerDatosAlumnos.cantidad }} de {{ obtenerDatosAlumnos.total }} alumnos hicieron el curso</span>
                </h4>
                <br />
                <div v-for="(alumno, index) in alumnos" :key="index" class=" media alert alert-danger w-50">
                    <img :src="alumno.foto" width="300" alt="Foto de {{ alumno.nombre }}" />
                    <div>
                        <h5 class="mb-3"><u>Orden #{{ index + 1 }}</u></h5>
                        <p>Nombre: <a :href="alumno.foto"> {{ alumno.nombre }} {{ alumno.apellido }}</a></p>
                        <p>Edad: {{ alumno.edad }}</p>
                        Curso <input type="checkbox" v-model="alumno.curso" />
                        <button class="btn btn-danger ms-5" @click="borrarAlumno(index)">Borrar</button>
                    </div>
                </div>
            </div>
            <h4 v-else class="alert alert-danger">
                No se encontraron alumnos
            </h4>
        </div>
       

    </section>
</template>

<script>

export default {
    name: 'Estructura',
    props: {
        // ejemplo: value: { type: [String, Number], default: '' }
    },
    data() {
        return {
            mostrar: true,
            mostrar2: true,
            usuarios: [
                'Juan Perez',
                'Ana Gomez',
            ],
            alumnos: [
                { nombre: 'Luis', apellido: 'Gonzalez', edad: 20, curso: true, foto: 'https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-flat/512/employee_person_man_business_office_businessman_people_male_worker-256.png' },
                { nombre: 'Maria', apellido: 'Lopez', edad: 22, curso: false, foto: 'https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-flat/512/business_employee_female_woman_businesswoman_office_work_manager_worker-256.png' },
                { nombre: 'Carlos', apellido: 'Martinez', edad: 19, curso: true, foto: 'https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-flat/512/outstanding_business_idea_leadership_creative_different_leader_top_skill_Confident-256.png' },
            ]
        }
    },
    watch: {
        // observadores de propiedades o datos
    },
    components: {
        // subcomponentes
    },
    computed: {
        obtenerDatosAlumnos() {
            let cant =0;
            this.alumnos.forEach(alumno => {
                if(alumno.curso) cant++;
            });
            return {
                cantidad: cant,
                total: this.alumnos.length
            };
        }
    },
    methods: {
        borrarAlumno(index) {
            this.alumnos.splice(index, 1);
        },
        agregarAlumno(){
            this.alumnos.push({ nombre: 'Nuevo', apellido: 'Alumno', edad: 18, curso: false, foto: 'https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-flat/512/employee_person_man_business_office_businessman_people_male_worker-256.png' });
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
    background-color: #8a43c0;
    color: white;
}

.table td {
    vertical-align: middle;
}

.media {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
</style>