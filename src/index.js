import { createFilter } from 'rollup-pluginutils'

let c = 0
const convertedExt = '.styl.css'
export default function(options = {}) {
  const styles = {}
  c++
  // const filter = createFilter(options.include, options.exclude);
  const filter = createFilter(options.include || '**/*.styl', options.exclude)
  return {
    name: 'rollup-plugin-rj-learning',
    resolveId(importee, importer) {
      console.log("%d 01 resolveId importee=%s, importer=%s", c, importee, importer);
      // the converted id
      if (importee.endsWith(convertedExt)) return importee
    },
    load(id) {
      console.log("%d 02 load id=%s", c, id);
      // return converted code
      if (id.endsWith(convertedExt)) return styles[id] || ''
    },
    transform(code, id) {
      console.log("%d 03 transform id=%s, code=%s", c, id, code)
      if (!filter(id)) return null
      console.log("%d 04 transform match", c)
      const convertedId = id + '.css'
      styles[convertedId] = 'body{color:#666}' // cache the converted content
      return {
        // make next css plugin work 
        code: `import ${JSON.stringify(convertedId)}`
      }
    }
  }
}