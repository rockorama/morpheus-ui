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

const req = require.context('../stories', true, /.js$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
