module.exports = {
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () {
        EIOPA.initExpandables('#example-expandable-button');
        EIOPA.dropdown('.ecl-dropdown');
      });
    `,
  },
  links: [
    {
      target: '#',
      title: 'Article',
    },
    {
      target: '#',
      title: 'Page',
    },
    {
      target: '#',
      title: 'Community',
    },
  ],
};
