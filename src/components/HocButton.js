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
      console.log('debounce')
      debounce(that.$listeners.click, 300, that, event)
    }
  },
  render (h) {
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })
    console.log('$attrs', this.$attrs)
    return h('Button', {
      on: {
        click: this.handleClickLink
      },
      props: this.$props,
      // 透传 scopedSlots
      scopedSlots: this.$scopedSlots,
      attrs: this.$attrs
    }, slots)
  }
}
