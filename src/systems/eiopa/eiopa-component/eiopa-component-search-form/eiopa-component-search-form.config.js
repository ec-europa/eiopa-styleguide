const contextDefault = require('./data/demo--default');
const contextInternal = require('./data/demo--internal');

module.exports = {
  title: 'Search forms',
  label: 'Search forms',
  status: 'wip',
  tags: ['molecule'],
  variants: [
    {
      name: 'default',
      label: 'Homepage',
      context: contextDefault,
    },
    {
      name: 'internal',
      label: 'Internal',
      context: contextInternal,
    },
  ],
};
