# Hill constructions

## Judge tower

Parent element name: dhill\
Element name: judgetower

::: tip
Optional element.
:::

::: tip
Judge tower position affects the F7 camera position, unless not defined using camera element.
:::

::: tip
d attribute values are relative to the beginning of the downhill.
:::

::: tip
When setting the h attribute value, you have to have a specified sign of value. For example - +4 value means that the judge tower will be placed 4 meters above the terrain level, -4 value - 4 meters under the terrain level.
:::

| Attribute  | Type                       | Description                                     |
| ---------- | -------------------------- | ----------------------------------------------- |
| d          | Float                      | The position relative to the X-axis             |
| h          | Float                      | The position relative to the Y-axis             |
| q          | Float                      | The position relative to the Z-axis             |
| [t, m, c]1 | [Texture, Material, Color] | Judge tower outside texture, material and color |
| [t, m, c]2 | [Texture, Material, Color] | Judge tower inside texture, material and color  |

## Lights

Parent element name: dhill\
Element name: lights

::: tip
You can have multiple lights instances.
:::

| Attribute  | Type                       | Allowed values | Default value     | Description                                                   | Optional |
| ---------- | -------------------------- | -------------- | ----------------- | ------------------------------------------------------------- | -------- |
| x1         | Float                      |                | 0                 | The starting point in position relative to the X-axis         |          |
| x2         | Float                      |                | 100               | The ending point in position relative to the X-axis           |          |
| step       | +Float                     |                |                   | Step between lamps                                            |          |
| size       | +Float                     |                |                   | Lamps size                                                    |          |
| h          | Float                      |                | 0.0               | The position relative to the Z-axis                           |          |
| d          | Float                      |                | 0.1               | The position relative to the Y-axis                           |          |
| [r, g, b]  | +Float                     | <0.0; 1.0>     |                   | Light color                                                   |          |
| attn       | Float                      |                |                   | Lights attenaution                                            |          |
| range      | Float                      |                |                   | Lights range                                                  |          |
| side       | String                     | left, right    |                   | Placement in terms of downhill side                           |          |
| [t, m, c]  | [Texture, Material, Color] |                |                   | Lamp pole texture, material and color                         |          |
| [b, t]refy | String                     |                | terrain, terrain0 | A built-in reference to the Y-axis, which lights are based on | True     |

## Wind flags

Parent element name: dhill\
Element name: windflags

| Attribute | Type                       | Default value | Description                                 |
| --------- | -------------------------- | ------------- | ------------------------------------------- |
| h         | Float                      | 4.0           | Wind flags position relative to the Y-axis  |
| d         | Real                       | 0.6           | Wind flags position relative to the Z-axis  |
| l         | Real                       | 5.0           | Wind flags height                           |
| count     | +Integer                   | 8             | Wind flags count                            |
| [t, m, c] | [Texture, Material, Color] |               | Wind flags pole texture, material and color |

## Measurers

Parent element name: dhill\
Element name: measurers

![1](/measurers.png)

| Attribute | Type  | Description              |
| --------- | ----- | ------------------------ |
| c[1, 2]   | Color | Shirt and trousers color |

## Label

Parent element name: dhill\
Element name: label

![2](/label.png)

::: tip
You can have multiple label instances.
:::

::: tip
Notice the refd[1, 2]? attributes, its allowed values refer to:
* f - fall line
* hs - hill size
* k - construction point
* p - landing point
:::

| Attribute          | Type     | Allowed values       | Description                                          | Optional |
| ------------------ | -------- | -------------------- | ---------------------------------------------------- | -------- |
| season             | String   | winter, summer, both | Displayment season                                   |          |
| [summer, winter]-d | +Integer |                      | Position relative to the downhill                    |          |
| text               | String   |                      | Text to be displayed                                 |          |
| textsize           | +Float   |                      | Text size                                            |          |
| c                  | Color    |                      | Text color                                           |          |
| alignment          | String   |                      | Text alignment                                       | True     |
| refd[1, 2]?        | String   | f, hs, k, p          | Position relative to the built-in distance reference | True     |

## Plastic

Parent element name: dhill\
Element name: plastic

![3](/plastic.png)

| Attribute | Type  | Description |
| --------- | ----- | ----------- |
| c         | Color | Color       |

## Lines

Parent element name: dhill\
Element name: lines

| Attribute                   | Type     | Description                                                                                            |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| [summer, winter]-[min, max] | +Integer | Minimum and maximum summer and winter line start and end position in position relative to the downhill |

## Numbers

Parent element name: dhill\
Element name: numbers

![4](/numbers.png)

| Attribute | Type     | Default value | Description                                            |
| --------- | -------- | ------------- | ------------------------------------------------------ |
| min       | +Integer |               | Start of numbers indicators position terms of downhill |
| max       | +Integer |               | End of numbers indicators position terms of downhill   |
| h1        | +Float   | 0.5           | Size of smaller numbers indicators                     |
| h2        | +Float   | 0.75          | Size of larger numbers indicators                      |
