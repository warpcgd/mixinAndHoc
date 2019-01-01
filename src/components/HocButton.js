function debounce (func, delay, context, event) {
  clearTimeout(func.timer)
  func.timer = setTimeout(function () {
    func.call(context, event)
  }, delay)
}

export default {
  props: {},
  name: 'ButtonHoc',
  data () {
    return {}
  },
  mounted () {
    console.log('HOC succeed')
  },
  methods: {
    handleClickLink (event) {
      let that = this
      debounce(that.$listeners.click, 300, that, event)
    }
  },
  render (h) {
    console.log(this)
    return h('Button', {
      on: {
        click: this.handleClickLink
      },
      attrs: this.$attrs,
      props: this.$props
    }, this.$slot) // eslint-disable-line
  }
}
