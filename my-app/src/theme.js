import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Merriweather', serif`,
    link: `'Lato', sans-serif`,
  },
  colors: {
    brandGreen: '#8dc63f',
  }
})

export default theme;