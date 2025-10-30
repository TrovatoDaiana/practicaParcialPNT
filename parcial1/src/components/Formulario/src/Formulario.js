export default {
  name: 'FormularioPago',
  data() {
    return {
      form: {
        nombre: '',
        dni: '',
        total: null,
        pago: null,
      },
      errors: {},
      pagos: [],
      // track whether a field was "touched" (ensuciado) by the user
      formDirty: {
        nombre: false,
        dni: false,
        total: false,
        pago: false,
      }
    }
  },
  computed: {
    errorNombre() {
      const nombreRaw = this.form.nombre == null ? '' : String(this.form.nombre)
      const nombre = nombreRaw.trim()
      let mensaje = ''
      if (!nombre) mensaje = 'El nombre es obligatorio.'
      else if (nombre.includes(' ')) mensaje = 'El nombre no puede contener espacios.'
      else if (nombre.length < 3) mensaje = 'El nombre debe tener al menos 3 caracteres.'
      else if (nombre.length > 10) mensaje = 'El nombre no puede tener más de 10 caracteres.'
      return { mensaje, mostrar: mensaje !== '' && this.formDirty.nombre, ok: mensaje === '' }
    },
    errorDni() {
      const dniRaw = this.form.dni == null ? '' : String(this.form.dni).trim()
      let mensaje = ''
      if (!dniRaw) mensaje = 'El DNI es obligatorio.'
      else if (!/^[0-9]+$/.test(dniRaw)) mensaje = 'El DNI debe contener sólo números.'
      else if (dniRaw.length < 7) mensaje = 'El DNI debe tener al menos 7 dígitos.'
      return { mensaje, mostrar: mensaje !== '' && this.formDirty.dni, ok: mensaje === '' }
    },
    errorTotal() {
      const v = this.form.total
      let mensaje = ''
      if (v === null || v === '' || isNaN(v)) mensaje = 'El total es obligatorio y debe ser un número.'
      else if (Number(v) < 0) mensaje = 'El total no puede ser negativo.'
      return { mensaje, mostrar: mensaje !== '' && this.formDirty.total, ok: mensaje === '' }
    },
    errorPago() {
      const v = this.form.pago
      let mensaje = ''
      if (v === null || v === '' || isNaN(v)) mensaje = 'El pago es obligatorio y debe ser un número.'
      else if (Number(v) < 0) mensaje = 'El pago no puede ser negativo.'
      return { mensaje, mostrar: mensaje !== '' && this.formDirty.pago, ok: mensaje === '' }
    },
    formValid() {
      return this.errorNombre.ok && this.errorDni.ok && this.errorTotal.ok && this.errorPago.ok
    }
  },
  methods: {
    // mark all fields as dirty (used when the user tries to submit)
    markAllDirty() {
      Object.keys(this.formDirty).forEach(k => { this.formDirty[k] = true })
    },
    submitPago() {
      // mark fields as touched so validation messages appear
      this.markAllDirty()
      if (!this.formValid) return
      const total = Number(this.form.total)
      const pago = Number(this.form.pago)
      const saldo = total - pago
      const now = new Date()
      const fecha = this.formatFecha(now)
      this.pagos.unshift({
        nombre: this.form.nombre.trim(),
        dni: this.form.dni.toString().trim(),
        total,
        pago,
        saldo,
        fecha
      })
      // reset form
      this.form.nombre = ''
      this.form.dni = ''
      this.form.total = null
      this.form.pago = null
      // reset dirty flags so messages disappear until user touches again
      Object.keys(this.formDirty).forEach(k => { this.formDirty[k] = false })
    },
    formatFecha(d) {
      const pad = (n) => String(n).padStart(2, '0')
      const dd = pad(d.getDate())
      const mm = pad(d.getMonth() + 1)
      const yyyy = d.getFullYear()
      const hh = pad(d.getHours())
      const min = pad(d.getMinutes())
      const ss = pad(d.getSeconds())
      return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`
    },
    rowClass(p) {
      if (p.saldo === 0) return 'table-success'
      if (p.saldo > 0) return 'table-danger'
      // p.saldo < 0 -> pagó de más
      return 'table-primary'
    }
  }
}
  // End of FormularioPago component