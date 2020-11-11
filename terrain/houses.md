# Houses

Parent element name: terrain
Element name: houses

::: warning
Some attributes may behave unexpectedly:

* count - game settings have higher priority than XML attribute value
:::

| Attribute             | Type     | Allowed values | Description                               |
| --------------------- | -------- | -------------- | ----------------------------------------- |
| count                 | +Integer | 0 - 10000      | Houses count                              |
| [min, max]saturation  | +Float   | 0.0 - 1.0      | Minimum and maximum houses saturation     |
| [min, max]floors      | +Integer |                | Minimum and maximum houses floors         |
| fractalthreshold      | +Float   |                | Fractal threshold                         |
| [max, normal]altitude | +Float   |                | Max and normal houses altitude appearance |
| seed                  | Integer  |                | Seed used to generate houses placement    |
