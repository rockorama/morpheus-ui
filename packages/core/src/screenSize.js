// @flow
import withSizes from 'react-sizes'

const MEDIUM = 768
const LARGE = 1024

export type ScreenSize = 'lg' | 'md' | 'sm'

type Sizes = {
  width: number,
  height: number,
}

export type ScreenSizes = {
  screenWidth: number,
  screenHeight: number,
  screenSize: ScreenSize,
}

const getSize = (width: number): ScreenSize => {
  if (width >= LARGE) return 'lg'
  if (width >= MEDIUM) return 'md'
  return 'sm'
}

const mapSizesToProps = ({ width, height }: Sizes): ScreenSizes => {
  return {
    screenWidth: width,
    screenHeight: height,
    screenSize: getSize(width),
  }
}

export default (Component: any) => withSizes(mapSizesToProps)(Component)
