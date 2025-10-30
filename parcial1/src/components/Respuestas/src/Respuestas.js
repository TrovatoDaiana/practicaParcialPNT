export default {
  name: 'RespuestasTable',
  data() {
    return {
      rows: [],
      // inicializamos con ejemplo guardado mínimo para que se muestre estático
      saved: true,
      savedRows: [
        { pregunta: 1, respuesta: 'a,c' },
        { pregunta: 2, respuesta: 'd' }
      ]
    }
  },
  computed: {
    // true si todas las filas son válidas (o no hay filas)
    allValid() {
      if (this.rows.length === 0) return false
      return this.rows.every(r => this.rowValid(r))
    }
  },
  methods: {
    makeRow() {
      return {
        _id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
        pregunta: null,
        respuesta: '',
        dirty: { pregunta: false, respuesta: false }
      }
    },
    addRow() {
      this.rows.push(this.makeRow())
      // focus management could be added later
    },
    removeRow(i) {
      this.rows.splice(i,1)
    },
    markDirty(row, field) {
      if (!row || !field) return
      row.dirty = row.dirty || {}
      row.dirty[field] = true
    },
    getError(row, field) {
      // devuelve {mensaje, mostrar, ok}
      const val = row && row[field]
      let mensaje = ''
      if (field === 'pregunta') {
        if (val === null || val === '' || typeof val === 'undefined') mensaje = 'El número de pregunta es obligatorio.'
        else if (!Number.isFinite(Number(val))) mensaje = 'Debe ser un número válido.'
        else if (Number(val) <= 0) mensaje = 'Debe ser mayor que 0.'
      }
      if (field === 'respuesta') {
        const s = (val == null ? '' : String(val)).trim()
        if (!s) mensaje = 'La respuesta es obligatoria.'
        else if (s.length < 1) mensaje = 'La respuesta debe tener al menos 1 carácter.'
      }
      const mostrar = mensaje !== '' && row && row.dirty && row.dirty[field]
      return { mensaje, mostrar, ok: mensaje === '' }
    },
    rowValid(row) {
      return this.getError(row,'pregunta').ok && this.getError(row,'respuesta').ok
    },
    guardar() {
      // marcar todas las celdas como dirty para mostrar errores si existen
      this.rows.forEach(r => { r.dirty = { pregunta: true, respuesta: true } })
      if (!this.allValid) return
      // aquí podemos emitir o guardar en localStorage; por ahora lo logueamos
      const payload = this.rows.map(r => ({ pregunta: Number(r.pregunta), respuesta: String(r.respuesta).trim() }))
      console.log('Guardando respuestas:', payload)
      // guardar en localStorage para que queden persistidas y mostremos la vista estática
      try {
        localStorage.setItem('respuestas_saved', JSON.stringify(payload))
        this.savedRows = payload
        this.saved = true
        // emitir evento también por si un padre quiere reaccionar
        this.$emit('save', payload)
      } catch (e) {
        console.error('Error guardando en localStorage', e)
      }
    }
    ,
    // volver a modo edición: cargar filas desde savedRows para editar
    editar() {
      this.rows = this.savedRows.map(r => ({ ...this.makeRow(), pregunta: r.pregunta, respuesta: r.respuesta, dirty: { pregunta: false, respuesta: false } }))
      this.saved = false
    },
    descargarCSV() {
      const rows = this.savedRows
      if (!rows || rows.length === 0) return
      const header = ['pregunta,respuesta']
      const csv = [header, ...rows.map(r => `${r.pregunta},"${String(r.respuesta).replace(/"/g,'""')}"`)].join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'respuestas.csv'
      a.click()
      URL.revokeObjectURL(url)
    },
    borrarGuardado() {
      localStorage.removeItem('respuestas_saved')
      this.savedRows = []
      this.saved = false
      this.rows = []
    }
    ,
    /**
     * API pública: fijar programáticamente respuestas guardadas.
     * payload: array de objetos { pregunta: Number, respuesta: String }
     */
    setSaved(payload) {
      if (!Array.isArray(payload)) return
      const normalized = payload.map(r => ({ pregunta: Number(r.pregunta), respuesta: String(r.respuesta) }))
      try {
        localStorage.setItem('respuestas_saved', JSON.stringify(normalized))
        this.savedRows = normalized
        this.saved = true
        // vaciamos filas de edición para evitar confusión
        this.rows = []
        this.$emit('save', normalized)
      } catch (e) {
        console.error('Error en setSaved:', e)
      }
    }
    ,
    // cargar guardado al montar
    loadSaved() {
      try {
        const raw = localStorage.getItem('respuestas_saved')
        if (!raw) return
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.savedRows = parsed
          this.saved = true
        }
      } catch (e) {
        console.error('Error leyendo guardado', e)
      }
    }
  }
  ,
  mounted() {
    this.loadSaved()
  }
}
