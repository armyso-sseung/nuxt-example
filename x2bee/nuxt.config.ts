// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false
  },
  css: ['~/assets/styles/page/globals.css'],
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        moduleResolution: 'node',
      }
    }
  },
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
