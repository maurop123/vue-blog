import template from './post.page.html'

export default {
  template: template,
  data() {
    return {
      postElmId:'post'
    }
  },
  computed: {
    uri() {
      return this.$store.state.route.params.uri
    },
    post() {
      const postByUri = (this.uri) ? this.$store.getters.getPostByUri : null
      return postByUri
    }
  },
  methods: {
    convertMarkdown(text) {
      const converter = new showdown.Converter()
      return converter.makeHtml(text)
    }
  }
}
