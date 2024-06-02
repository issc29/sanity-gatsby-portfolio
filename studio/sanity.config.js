// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import {graphiQLTool} from 'sanity-plugin-graphiql'
import { youtubeInput } from 'sanity-plugin-youtube-input'



export default defineConfig({
  title: "Yafe Beito",
  projectId: "2nbta4wp",
  dataset: "production",
  plugins: [
    deskTool({
        structure: deskStructure
    }),
    visionTool(),
    graphiQLTool({
        apiVersion: '2021-10-21'}),
    youtubeInput({ apiKey: "AIzaSyATEVyQUK8rt-FzWTswFCtP_rxoeAxqWTY" })
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});