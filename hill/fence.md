# Fence

Parent element name: dhill\
Element name: fence

![1](/fence.png)

::: warning
t, m, and c attributes apply for the rear side of the fence.
:::

::: warning
It's not possible to get rid of the fence.

* when the h attribute value is set to 0, the game crashes
* when the h attribute value is nearly 0, the hill takes a very long time to load, as a number of vertices grows very quickly
:::

| Attribute | Type                       | Default value | Description                 | Optional |
| --------- | -------------------------- | ------------- | --------------------------- | -------- |
| [t, m, c] | [Texture, Material, Color] |               | Texture, material and color |          |
| h         | +Float                     | 1.0           | Height                      | True     |
