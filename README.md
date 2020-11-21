# vue-v [![Latest version](https://badgen.net/npm/v/vue-v)](https://npm.im/vue-v) [![Monthly downloads](https://badgen.net/npm/dm/vue-v)](https://npm.im/vue-v) [![Install size](https://packagephobia.now.sh/badge?p=vue-v)](https://packagephobia.now.sh/result?p=vue-v) [![Bundle size](https://badgen.net/bundlephobia/minzip/vue-v)](https://bundlephobia.com/result?p=vue-v)

Tiny component to render Vue.js vNodes in the template.

```html
<v :nodes="vnodes" />
```

## 🙋‍♂️ Why?
- **🎩 Render vNodes** without converting your component to use a [render function](https://vuejs.org/v2/guide/render-function.html)!
- **🔥 Declarative API** render multiple vNodes anywhere in your template!
- **🐥 Tiny** `250 B` minzipped!

## 🚀 Install
```sh
npm i vue-v
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

### How can I add a class, attribute, or event handler to the vNodes?

You can use [vNode Syringe](https://github.com/privatenumber/vue-vnode-syringe) to overwrite attributes, props, and event-listeners.

For example, if you want to overwrite the class, and add a `click` handler:

```vue
<template>
    <div>
        <vnode-syringe
            class!="overwrite-class"
            @click="onClick"
        >
            <v :nodes="vnodes" />
        </vnode-syringe>
    </div>
</template>

<script>
import V from 'vue-v';
import vnodeSyringe from 'vue-vnode-syringe';

export default {
    components: {
        V,
        vnodeSyringe
    },

    ...,

    methods: {
        onClick() {
            ...
        }
    }
};
</script>
```

## 👨‍👩‍👧 Related
- [vue-proxi](https://github.com/privatenumber/vue-proxi) - 💠 Tiny proxy component
- [vue-subslot](https://github.com/privatenumber/vue-subslot) - 💍 Pick 'n choose what you want from a slot passed into your Vue component
- [vue-pseudo-window](https://github.com/privatenumber/vue-pseudo-window) - 🖼 Declaratively interface window/document in your Vue template
- [vue-vnode-syringe](https://github.com/privatenumber/vue-vnode-syringe) - 🧬Mutate your vNodes with vNode Syringe 💉
- [vue-frag](https://github.com/privatenumber/vue-frag) - 🤲 Directive to return multiple root elements
