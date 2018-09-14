/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/.storybook */

import { setOptions } from '@storybook/addon-options'
import centered from './decorator-centered'
import { configure, addDecorator } from '@storybook/react'

const context = require.context('../', true, /Screen\.js$/)

addDecorator(centered)

setOptions({
  name: 'Morpheus-UI',
  url: 'https://github.com/MainframeHQ/morpheus-ui',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
})

function loadStories() {
  context.keys().forEach(context)
}

configure(loadStories, module)
