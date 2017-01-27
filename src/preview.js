const template = `
  <div id="preview" class="col s6">
    <div class="col s12" v-html="title"></div>
    <div class="col s12" v-html="message"></div>
  </div>
`
export default {
  name: 'preview',
  template: template,
  props: ['title', 'message']
}
