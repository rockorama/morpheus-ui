import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import Layout from '../../components/Layout'

export default class NormalButtonExample extends Component {
  render() {
    const importStatement = "import { Button } from '@morpheus-ui/core'\n"
    const normalButtonCode =
      "import { Button } from '@morpheus-ui/core'\n\n<Button \n onPress={action('clicked')} \n title='Normal' \n/>"
    const iconButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'\n\n<Button \n onPress={action('clicked')} \n title='Icon Button' \n Icon={CircleArrowRight} \n/>"
    const smallButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Small Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'small'}\n/>"
    const largeButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Large Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'large'}\n/>"
    const disabledButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Disabled Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'disabled'}\n/>"
    const iconTopButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Icon Top' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'icon-top'}\n/>"
    const noBorderButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='No Border' \n Icon={CircleArrowRight} \n variant={'no-border'}\n/>"
    const hoverShadowButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Hover Shadow' \n Icon={CircleArrowRight}\n variant={['no-border', 'hover-shadow']}\n/>"

    return (
      <Layout>
        <Text variant="h2">{'Button'}</Text>
        <Row size={1}>
          <Column>
            <Text variant="h3">{'Import statement'}</Text>
            <SyntaxHighlighter
              language="javascript"
              highlighter={'prism' || 'hljs'}>
              {importStatement}
            </SyntaxHighlighter>
          </Column>
        </Row>
        <Text variant="h3">{'Normal button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {normalButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button onPress={action('clicked')} title="Normal" />
          </Column>
        </Row>
        <Text variant="h3">{'Icon button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {iconButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Icon Button"
              Icon={CircleArrowRight}
            />
          </Column>
        </Row>
        <Text variant="h3">{'Small button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {smallButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Small Button"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="small"
            />
          </Column>
        </Row>
        <Text variant="h3">{'Large button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {largeButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Large Button"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="large"
            />
          </Column>
        </Row>
        <Text variant="h3">{'Disabled button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {disabledButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Disabled"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              disabled
            />
          </Column>
        </Row>
        <Text variant="h3">{'Icon top'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {iconTopButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Icon Top"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="icon-top"
            />
          </Column>
        </Row>
        <Text variant="h3">{'Borderless button'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {iconTopButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="No Border"
              Icon={CircleArrowRight}
              variant="no-border"
            />
          </Column>
        </Row>
        <Text variant="h3">{'Hover shadow'}</Text>
        <Row size={2}>
          <Column>
            <SyntaxHighlighter language="javascript" highlighter={'prism'}>
              {iconTopButtonCode}
            </SyntaxHighlighter>
          </Column>
          <Column>
            <Text>{'example:'}</Text>
            <Button
              onPress={action('clicked')}
              title="Hover Shadow"
              Icon={CircleArrowRight}
              variant={['no-border', 'hover-shadow']}
            />
          </Column>
        </Row>
      </Layout>
    )
  }
}
