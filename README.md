# vue-v [![Latest version](https://badgen.net/npm/v/vue-v)](https://npm.im/vue-v) [![Monthly downloads](https://badgen.net/npm/dm/vue-v)](https://npm.im/vue-v) [![Install size](https://packagephobia.now.sh/badge?p=vue-v)](https://packagephobia.now.sh/result?p=vue-v) [![Bundle size](https://badgen.net/bundlephobia/minzip/vue-v)](https://bundlephobia.com/result?p=vue-v)

Render Vue vNodes in the template:

```html
<v :nodes="vnodes" />
```

## 🙋‍♂️ Why?
- **🎩 Render vNodes** in your template without converting your component to use a [render function](https://vuejs.org/v2/guide/render-function.html)!
- **🐥 Tiny** Weights almost nothing: `194 B` minzipped!

## 🚀 Install
```sh
npm i vue-v
```

#### Globally register
```js
import Vue from 'vue';
import V from 'vue-v';

Vue.component('v', V);
```

## 👨🏻‍🏫 Basic usage

```vue
<template>
    <div>
        <v :nodes="$slot.default" />
    </div>
</template>

<script>
import V from 'vue-v';

export default {
    components: {
        V
    }
};
</script>
```

## 💁‍♀️ FAQ

### When would I use this?
When you have vNodes that you want to render in a specific part of your template without having to use a [render function](https://vuejs.org/v2/guide/render-function.html).

For example, you might want to render just the text from the default `<slot />`:

```vue
<template>
    <div>
        <!-- Only render the text from <slot /> -->
        <v :nodes="textNodes()" />
    </div>
</template>

<script>
import V from 'vue-v';

export default {
    components: {
        V
    },

    methods: {
        // Can't use computed property because slots aren't reactive
        textNodes() {
            return (this.$slots.default || []).filter(vnode => !vnode.tag);
        }
    }
};
</script>
```


## 👨‍👩‍👧 Related
- [vue-proxi](https://github.com/privatenumber/vue-proxi) - 💠 Tiny proxy component for Vue.js
- [vue-subslot](https://github.com/privatenumber/vue-subslot) - 💍 Pick 'n choose what you want from a slot passed into your Vue component
- [vue-pseudo-window](https://github.com/privatenumber/vue-pseudo-window) - 🖼 Declaratively interface window/document in your Vue template
- [vue-vnode-syringe](https://github.com/privatenumber/vue-vnode-syringe) - 🧬Mutate your vNodes with vNode Syringe 💉
