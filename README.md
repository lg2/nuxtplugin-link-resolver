# nuxtplugin-link-resolver

create a `linkResolver`base on your ``~/assets/jsons/link-resolver.json`

```
$lr({__typename:'ArticleRecord'})
```

###how to use
`~/plugins/link-resolver.js`
```
import linkResolver from '@lg2/nuxtplugin-link-resolver'
console.log(linkResolver)
export default (_ctx, inject) => {
  inject('linkResolver', linkResolver)
}
```