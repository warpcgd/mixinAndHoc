export default {
  props: {
    name: {
      type: String
    },
    label: {
      type: [String, Function],
      default: ''
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: null
    }
  }, // eslint-disable-line
  name: 'tabPane',
  methods: {
    updateNav () {
      this.$parent.updateNav()
    }
  },
  mounted () {
    console.log('HOC succeed')
  },
  render (h) {
    return h('TabPane', {
      on: this.$listeners,
      attrs: this.$attrs,
      props: this.$props
    }, this.$slot) // eslint-disable-line
  }
}
