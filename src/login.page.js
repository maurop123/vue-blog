import template from './login.page.html'

export default { template,
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const {email, password} = this
      this.$store.dispatch('login', { email, password })
      .then(rx => rx.subscribe(authed => {
        if (authed) this.$router.go(-1)
      }))
    }
  }
}
