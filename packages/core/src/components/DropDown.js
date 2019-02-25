// @flow

import React, { Component, createRef, type ElementRef } from 'react'
import styled from 'styled-components/native'

import memoize from 'memoize-one'

import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'
import { Modal } from 'react-overlays'

import zIndex from '../zIndexClass'
import getElementPosition from '../getElementPosition'
import Theme, { getTheme } from './ThemeProvider'

const BACKSTYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'auto',
}

const SvgArrowDown = props => (
  <svg width="8" height="5" viewBox="0 0 8 5" {...props}>
    <path
      d="M7.146.146L4 3.293.853.146a.5.5 0 0 0-.707.708l3.5 3.5a.498.498 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const OutterContainer = styled.View`
  position: relative;
  margin: ${props => props.muitheme.margin};
`

const Container = styled.View`
  flex-direction: column;
  position: relative;
`
const Touchable = styled.TouchableOpacity`
  ${props => props.isopen && ` outline: none;`}
`

const InnerContainer = styled.View`
  position: relative;
  z-index: 1;
  min-width: ${props => props.muitheme.minWidth};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-width: ${props => props.muitheme.borderWidth};
  border-color: ${props => props.muitheme.borderColor};
  border-style: solid;
  border-radius: ${props => props.muitheme.borderRadius};
  padding: ${props => props.muitheme.padding};
  background-color: ${props => props.muitheme.backgroundColor};

  ${props =>
    props.disabled &&
    `border-color: ${props.muitheme.borderDisabledColor};
     background-color: ${props.muitheme.backgroundDisabledColor};`}
`

const Label = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  font-size: ${props => props.muitheme.fontSize};
  font-weight: ${props => props.muitheme.fontWeight};
  font-style: ${props => props.muitheme.fontStyle};
  color: ${props => props.muitheme.labelColor};

  ${props => props.value && `color: ${props.labelCheckedColor};`}

  ${props =>
    props.disabled &&
    `color: ${props.muitheme.labelDisabledColor};`}
 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const IconContainer = styled.Text`
  color: ${props => props.muitheme.arrowColor};
  display: flex;
  margin-left: ${props => props.muitheme.arrowMargin};
`

const ErrorMessage = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  font-size: ${props => props.muitheme.errorFontSize};
  color: ${props => props.muitheme.errorColor};
  padding: 2px 0;
  margin-bottom: 2px;
`
const DropMenu = styled.View`
  background-color: ${props => props.muitheme.menuBackgroundColor};
  position: absolute;
  width: ${props => props.width}px;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y - 1}px;
  ${props =>
    props.muitheme.menuShadow &&
    `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `};

  max-height: ${props => props.muitheme.menuMaxHeight};

  border-width: ${props => props.muitheme.menuBorderWidth};
  border-color: ${props => props.muitheme.menuBorderColor};
  border-style: solid;
  border-radius: ${props => props.muitheme.menuBorderRadius};
`

const Backdrop = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${props => props.muitheme.menuBackdropColor};
`

const ScrollView = styled.ScrollView``

const DropItem = styled.TouchableOpacity`
  outline: none;
`

const ItemText = styled.Text`
  background-color: ${props => props.muitheme.menuItemBackgroundColor};
  padding: ${props => props.muitheme.menuItemPadding};
  color: ${props => props.muitheme.menuItemTextColor};
  font-size: ${props => props.muitheme.menuItemFontSize};
  border-bottom-width: ${props => props.muitheme.menuItemSeparatorWidth};
  border-bottom-color: ${props => props.muitheme.menuItemSeparatorColor};
  border-bottom-style: solid;

  ${props =>
    props.selected &&
    `background-color: ${props.muitheme.menuItemSelectedBackgroundColor};`}

  ${props =>
    props.withfocus === 'true' &&
    `background-color: ${props.muitheme.menuItemFocusBackgroundColor};
     color: ${props.muitheme.menuItemFocusTextColor};`}

  ${props =>
    props.selected && `color: ${props.muitheme.menuItemSelectedTextColor};`}
`

type Props = FieldProps & {
  checkedLabel?: string,
  value?: ?string,
  defaultValue?: string,
  disabled: boolean,
  variant?: string | Array<string>,
  options: Array<string | Object>,
  valueKey?: string,
  displayKey?: string,
}

type State = {
  open: boolean,
  value: ?string,
  focus: number,
  containerPos?: Object,
  containerWidth?: ?Number,
}

export class DropDownComponent extends Component<Props, State> {
  static contextType = Theme

  // $FlowFixMe: React Ref
  containerRef: ElementRef<'div'> = createRef()

  constructor(props: Props) {
    super(props)

    this.state = {
      value: (props.defaultValue && props.defaultValue.toString()) || null,
      open: false,
      focus: -1,
    }
  }

  componentDidMount() {
    this.getPosition()

    window.addEventListener('scroll', this.getPosition)
    window.addEventListener('resize', this.getPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getPosition)
    window.removeEventListener('resize', this.getPosition)
  }

  getPosition = () => {
    this.setState({
      containerPos: getElementPosition(this.containerRef.current),
      containerWidth: this.containerRef.current
        ? // $FlowFixMe: OffSet
          this.containerRef.current.offsetWidth
        : null,
    })
  }

  getDropDownTheme = memoize((props: Props, context: Object) =>
    getTheme('DropDown', props, context),
  )

  onPress = () => {
    if (this.state.open) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  openMenu = () => {
    if (!this.props.disabled) {
      this.setState({ open: true })
      !this.props.dirty && this.props.setDirty && this.props.setDirty()
    }
  }

  closeMenu = () => {
    if (this.state.focus > -1) {
      const item = this.props.options[this.state.focus]
      if (typeof item === 'string') {
        this.selectItem(item)
      } else {
        this.selectItem(item[this.props.valueKey])
      }
    }
    this.dismissMenu()
  }

  dismissMenu = () => {
    this.setState({ open: false, focus: -1 })
  }

  handleInputKeyDown = (e: Object) => {
    const key = e.which || e.keyCode
    if (this.state.open) {
      if (key === 27) {
        // ESCAPE
        this.dismissMenu()
      }
      if (key === 38) {
        // Arrow UP
        this.moveFocus(-1)
      }
      if (key === 40) {
        // Arrow Down
        this.moveFocus(1)
      }
    } else {
      if (key === 38 || key === 40) {
        // Arrow UP or Down
        this.openMenu()
      }
    }
  }

  printValue = (value: any) => {
    const item = this.getItemFromValue(value)
    return this.printItem(item)
  }

  printItem = (item: string | Object) => {
    if (typeof item === 'string') {
      return item
    }

    if (!this.props.displayKey) {
      return item[this.props.valueKey]
    }

    return item[this.props.displayKey]
  }

  getItemFromValue = (value: string) => {
    if (!this.props.valueKey) {
      return value
    }

    return this.props.options.filter(item =>
      typeof item === 'string'
        ? item === value
        : // eslint-disable-next-line eqeqeq
          item[this.props.valueKey] == value,
    )[0]
  }

  getValueFromItem = (item: string | Object) => {
    if (typeof item === 'string') {
      return item
    }

    if (!this.props.valueKey) {
      return item
    }

    return item[this.props.valueKey]
  }

  getValue() {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return fieldValue != null ? fieldValue : defaultValue || null
    }

    if (value != null) {
      return value || defaultValue || null
    }

    return this.state.value
  }

  selectItem = (value: string) => {
    this.props.onChange && this.props.onChange(value)
    if (!this.props.inForm) {
      this.setState({
        value: value,
      })
    }
  }

  setFocus = (index: number) => {
    this.setState({ focus: index })
  }

  moveFocus = (offset: number) => {
    let nextFocusIndex = this.state.focus + offset

    if (nextFocusIndex < 0) {
      nextFocusIndex = this.props.options.length - 1
    } else if (nextFocusIndex >= this.props.options.length) {
      nextFocusIndex = 0
    }
    this.setFocus(nextFocusIndex)
  }

  render() {
    const muitheme: Object = this.getDropDownTheme(this.props, this.context)
    const value = this.getValue()
    const showError =
      (this.props.isSubmitted() || this.props.dirty) &&
      !!this.props.errorMessage

    return (
      <OutterContainer muitheme={muitheme} onKeyDown={this.handleInputKeyDown}>
        <div ref={this.containerRef}>
          <Container>
            <Touchable
              isopen={this.state.open}
              disabled={this.props.disabled}
              onPress={this.onPress}>
              <InnerContainer
                muitheme={muitheme}
                disabled={this.props.disabled}>
                <Label disabled={this.props.disabled} muitheme={muitheme}>
                  {value != null ? this.printValue(value) : this.props.label}
                </Label>
                {!this.props.disabled && (
                  <IconContainer muitheme={muitheme}>
                    <SvgArrowDown />
                  </IconContainer>
                )}
              </InnerContainer>
            </Touchable>
            <ErrorMessage muitheme={muitheme}>
              {showError ? this.props.errorMessage : ''}
            </ErrorMessage>
          </Container>
        </div>
        {this.state.open && (
          <>
            <Modal className={zIndex} show style={BACKSTYLE}>
              <div>
                <Backdrop
                  muitheme={muitheme}
                  onPress={this.dismissMenu}
                  onMouseOver={() => this.setFocus(-1)}
                />
                <DropMenu
                  muitheme={muitheme}
                  position={this.state.containerPos}
                  width={this.state.containerWidth}>
                  <ScrollView>
                    {this.props.options.map((item, index) => {
                      const itemValue = this.getValueFromItem(item)
                      return (
                        <DropItem
                          muitheme={muitheme}
                          onMouseOver={() => this.setFocus(index)}
                          onFocus={() => this.setFocus(index)}
                          onPress={() => this.closeMenu()}
                          key={`item-${index}`}>
                          <ItemText
                            muitheme={muitheme}
                            withfocus={(this.state.focus === index).toString()}
                            // $FlowFixMe
                            selected={value == itemValue}>
                            {this.printItem(item)}
                          </ItemText>
                        </DropItem>
                      )
                    })}
                  </ScrollView>
                </DropMenu>
              </div>
            </Modal>
          </>
        )}
      </OutterContainer>
    )
  }
}

export default turnIntoField(DropDownComponent)
