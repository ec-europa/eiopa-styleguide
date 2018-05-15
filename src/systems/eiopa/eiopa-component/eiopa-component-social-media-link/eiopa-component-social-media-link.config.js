const contextDefault = require('./data/demo--default');
const contextDefaultSpecific = require('./data/demo--default-specific');
const contextHorizontal = require('./data/demo--horizontal');
const contextHorizontalSpecific = require('./data/demo--horizontal-specific');

module.exports = {
  title: 'Social Media Links',
  label: 'Social Media Links',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'horizontal',
  variants: [
    {
      name: 'horizontal-specific',
      label: 'Horizontal list without label',
      context: contextHorizontalSpecific,
    },
    {
      name: 'horizontal',
      label: 'Horizontal list with label',
      context: contextHorizontal,
    },
    {
      name: 'default-specific',
      label: 'Vertical list without label',
      context: contextDefaultSpecific,
    },
    {
      name: 'default',
      label: 'Vertical list with label',
      context: contextDefault,
    },
  ],
};
