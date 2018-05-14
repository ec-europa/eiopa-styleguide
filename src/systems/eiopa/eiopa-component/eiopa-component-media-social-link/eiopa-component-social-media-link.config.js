const contextDefault = require('./data/demo--default');
const contextDefaultSpecific = require('./data/demo--default-specific');
const contextHorizontal = require('./data/demo--horizontal');
const contextHorizontalSpecific = require('./data/demo--horizontal-specific');

module.exports = {
  title: 'Social Media Links',
  label: 'Social Media Links',
  status: 'ready',
  tags: ['molecule'],
  collated: false,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default list with default display',
      context: contextDefault,
    },
    {
      name: 'default-specific',
      label: 'Specific list with default display',
      context: contextDefaultSpecific,
    },
    {
      name: ' horizontal',
      label: ' Default list with horizontal display',
      context: contextHorizontal,
    },
    {
      name: 'horizontal-specific',
      label: 'Specific list with horizontal display',
      context: contextHorizontalSpecific,
    },
  ],
};
