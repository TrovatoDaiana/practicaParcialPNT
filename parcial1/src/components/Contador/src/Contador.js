export default {
  name: 'Contador',
  props: {
    ini: { type: [String, Number], default: '0' },
    fondo: { type: String, default: 'primary' }
  },
  /* props: [ 'ini','fondo' ], */
  data() {
    return {
     contador: this.ini,
    };
  },
 
 
  methods: {
    contar(){
      this.contador++;
    },
    getColorFondo(){
      return 'btn-' + (this.fondo || 'primary');
    }
  },
}