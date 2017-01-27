const template = `<nav>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/editor">Editor</router-link>
    </li>
  </ul>
</nav>`

export default {
  name: 'navbar',
  template: template
}
