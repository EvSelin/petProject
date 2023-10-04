// Styles
import '@mdi/font/css/materialdesignicons.css'
import '../styles/main.scss';
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.min.css'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#252733',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    blue: '#3751FF',
    'grey-lighten-1': '#A4A6B3',
    'grey-lighten-2': '#9FA2B4',
    'grey-lighten-3': '#F7F8FC',
    'grey-lighten-4': '#DFE0EB',
    'grey-lighten-5': '#C5C7CD',
    'grey-darken-5': '#363740',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})
