function debounce (func, delay, context, event) {
  clearTimeout(func.timer)
  func.timer = setTimeout(function () {
    func.call(context, event)
  }, delay)
}

function _handleClickLink (event) {
  this.$emit('click', event)
  const openInNewWindow = event.ctrlKey || event.metaKey
  this.handleCheckClick(event, openInNewWindow)
}

export default {
  props: {
  },
  mixins: [Vue.options.components.Button], // eslint-disable-line
  data () {
    return {}
  },
  mounted () {
    console.log('mixins succeed')
  },
  methods: {
    handleClickLink (event) {
      let that = this
      console.log('debounce')
      debounce(_handleClickLink, 300, that, event)
    }
  }
}
