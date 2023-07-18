/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",

    // `${srcDir}/components/**/*.{vue,js,ts}`,
    // `${srcDir}/layouts/**/*.vue`,
    // `${srcDir}/pages/**/*.vue`,
    // `${srcDir}/composables/**/*.{js,ts}`,
    // `${srcDir}/plugins/**/*.{js,ts}`,
    // `${srcDir}/utils/**/*.{js,ts}`,
    // `${srcDir}/App.{js,ts,vue}`,
    // `${srcDir}/app.{js,ts,vue}`,
    // `${srcDir}/Error.{js,ts,vue}`,
    // `${srcDir}/error.{js,ts,vue}`,
    // `${srcDir}/nuxt.config.{js,ts}`

  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '520px',
        md: '820px',
        lg: '1140px',
        xl: '1440px',
      },
      container: {
        center: true,
      },
      colors: {
        'main-primary': '#074866',
        'main-secondary': '#0F293E',
        'main-dark': '#001E35',
        'main-info': '#2A72A9',
        'main-light': '#4C80A9',
      },
      fontFamily: {
        'sans': ['Proxima-Extrabold', 'Noto Sans', 'Open Sans', ],
        'serif': ['Proxima-Extrabold', 'Noto Sans', 'Open Sans', ],
        'mono': ['Proxima-Extrabold', 'Noto Sans', 'Open Sans', ],
        'display': ['Proxima-Extrabold', 'Noto Sans', 'Open Sans', ],
        'body': ['Proxima-Extrabold', 'Noto Sans', 'Open Sans', ],
        'large': ['Open Sans', ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

