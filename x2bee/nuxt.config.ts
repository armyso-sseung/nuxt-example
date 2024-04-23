// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false
  },
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
