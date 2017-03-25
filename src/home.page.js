import template from './home.page.html'

export default {
  template: template,
  props: ['blog'],
  data() {
    return {
      postElmId: 'post'
    }
  },
  computed: {
    headerBackground() {
      return `background-image:url('${this.blog.header.background}')`;
    },
    posts() {
      return this.$store.state.posts
    },
    uri() {
      return this.$store.state.route.params.uri
    },
    post() {
      const latest = this.$store.getters.getLatestPost
      if (!this.uri && latest) this.$router.push(`/blog/${ latest.uri }`)
      const postByUri = (this.uri) ? this.$store.getters.getPostByUri : null
      return (postByUri) ? postByUri : latest
    },
    nextPost() {
      return this.$store.getters.getNextPost
    },
    prevPost() {
      return this.$store.getters.getPrevPost
    }
  },
  methods: {
    next() {
      this.$router.push(`/blog/${ this.nextPost.uri }`)
    },
    prev() {
      this.$router.push(`/blog/${ this.prevPost.uri }`)
    },
    goToPost(uri) {
      this.$router.push(`/blog/${uri}`)
    }
  },
}
