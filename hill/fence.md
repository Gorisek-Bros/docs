# Fence

Parent element name: dhill\
Element name: fence

![1](/fence.png)

::: tip
Optional element.
:::

::: tip
Starting from v1.10.0, when fence had height less than 0.1 meter, it won't be shown anymore.
:::

::: warning
t, m, and c attributes apply for the rear side of the fence.
:::

| Attribute | Type                       | Default value | Description                                                            | Optional |
| --------- | -------------------------- | ------------- | ---------------------------------------------------------------------- | -------- |
| [t, m, c] | [Texture, Material, Color] |               | Texture, material and color                                            |          |
| h         | +Float                     | 1.0           | Height                                                                 | True     |
| d0        | +Float                     |               | Starting point of the fence appearance relative to the downhill X-axis | True     |
