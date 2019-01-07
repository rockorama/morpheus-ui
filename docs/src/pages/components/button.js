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
      "import { Button } from '@morpheus-ui/core'\n\n<Button onPress={action('clicked')} \n title='Normal' \n/>"
    const iconButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'\n\n<Button onPress={action('clicked')} \n title='Normal' \n Icon={CircleArrowRight} \n/>"
    const smallButtonCode =
      "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button onPress={action('clicked')} \n title='Small Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'small'}\n/>"

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
              title="Normal"
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
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Large Button"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="large"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Disabled"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              disabled
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Icon Top"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="icon-top"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="No Border"
              Icon={CircleArrowRight}
              variant="no-border"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
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
