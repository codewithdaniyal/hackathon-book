// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Ch 1: Foundations',
          items: [
            // Docusaurus removed the "01-" prefixes, so we use the clean IDs here
            'introduction-physical-ai/foundations/what-is-physical-ai',
            'introduction-physical-ai/foundations/agents-vs-robots',
            'introduction-physical-ai/foundations/setup-dev-environment',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;