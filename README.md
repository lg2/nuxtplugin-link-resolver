# nuxtplugin-link-resolver

create a `linkResolver`base on your `~/assets/jsons/link-resolver.json`

```
  yarn add @lg2/nuxtplugin-link-resolver -D
  npm i @lg2/nuxtplugin-link-resolver -D
```

```
$lr({__typename:'ArticleRecord'})
```

### How to use
`~/plugins/link-resolver.js`
```
import linkResolver from '@lg2/nuxtplugin-link-resolver'
export default (_ctx, inject) => {
  inject('lr', linkResolver)
}
```