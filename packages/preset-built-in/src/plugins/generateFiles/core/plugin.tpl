import { Plugin } from '{{{ runtimePath }}}';

const plugin = new Plugin({
  validKeys: [{{#validKeys}}'{{{ . }}}',{{/validKeys}}],
});
{{#plugins}}
plugin.register(require('{{{ . }}}'));
{{/plugins}}

export { plugin };
