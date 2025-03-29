import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

const config = defineConfig({
  projectId: 'a17lfg3x',
  dataset: 'production',
  apiVersion: '2021-03-25',
  title: 'Kmaxx',
  basePath: '/admin',
  plugins: [deskTool()],
  useCdn: true,
  
})


export default config;
