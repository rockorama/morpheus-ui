import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Morpheus UI',
  url: 'https://github.com/MainframeHQ/morpheus-ui',
  goFullScreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
})

function loadStories() {
  require('../stories/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
