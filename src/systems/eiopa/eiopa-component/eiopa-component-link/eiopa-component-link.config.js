const contextDefault = require('./data/demo--default');
const contextExternal = require('./data/demo--external');
const contextStandalone = require('./data/demo--standalone');
const contextInverted = require('./data/demo--inverted');
const contextAll = require('./data/demo--all');
const contextMore = require('./data/demo--more');

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div>Lorem ipsum, ${markup} consectetur adipiscing elit</div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: contextDefault,
    },
    {
      name: 'external',
      label: 'External',
      context: contextExternal,
    },
    {
      name: 'standalone',
      label: 'Standalone',
      context: contextStandalone,
    },
    {
      name: 'inverted',
      label: 'Inverted',
      context: contextInverted,
    },
    {
      name: 'all',
      label: 'All',
      context: contextAll,
    },
    {
      name: 'more',
      label: 'More',
      context: contextMore,
    },
  ],
};
