import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "./components/ui/provider.jsx"
import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  preflight: false,
})

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')).render(
  <Provider >
    <App />
  </Provider>
)
