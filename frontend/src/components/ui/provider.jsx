'use client'
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode';


const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(defaultConfig, config);

export function Provider(props) {
  return (
    <ChakraProvider value={system} resetCSS={false} disableGlobalStyle >
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
