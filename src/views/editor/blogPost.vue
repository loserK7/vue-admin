
<script>
export default {
  name: 'blog-post',
  render: function (h) {
    var header = this.$slots.header
    var body = this.$slots.default
    var footer = this.$slots.footer
    console.log(body, 'body')
    return h('div', [
      h('header', header),
      h('main', body),
      h('footer', footer)
    ])
  }
}
</script>

<style>
</style>
