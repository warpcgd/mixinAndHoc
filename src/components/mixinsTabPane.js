
function permissionTab (key) {
  return key === '1'
}

export default {
  props: {
    permission: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: function () {
        let statue = permissionTab.call(this, this.$options.propsData.permission)
        return statue
      }
    }
  },
  mixins: [Vue.options.components.TabPane], // eslint-disable-line
  data () {
    return {
    }
  },
  mounted () {
    console.log('mixins succeed')
  }
}
