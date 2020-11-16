# Blocks and houses

## Blocks

Parent element name: terrain\
Element name: blocks

::: warning
Some attributes may behave unexpectedly:

* count - game settings have higher priority than XML attribute value
:::

| Attribute             | Allowed values | Type     | Description                               |
| --------------------- | -------------- | -------- | ----------------------------------------- |
| count                 | <0; 10000>     | +Integer | Blocks count                              |
| [min, max]saturation  | <0.0; 1.0>     | +Float   | Minimum and maximum blocks saturation     |
| [min, max]floors      |                | +Integer | Minimum and maximum blocks floors         |
| fractalthreshold      |                | +Float   | Fractal threshold                         |
| [max, normal]altitude |                | +Float   | Max and normal blocks altitude appearance |
| seed                  |                | Integer  | Seed used to generate blocks placement    |

## Houses

Parent element name: terrain\
Element name: houses

::: warning
Some attributes may behave unexpectedly:

* count - game settings have higher priority than XML attribute value
:::

| Attribute             | Allowed values | Type     | Description                               |
| --------------------- | -------------- | -------- | ----------------------------------------- |
| count                 | <0; 10000>     | +Integer | Houses count                              |
| [min, max]saturation  | <0.0; 1.0>     | +Float   | Minimum and maximum houses saturation     |
| [min, max]floors      |                | +Integer | Minimum and maximum houses floors         |
| fractalthreshold      |                | +Float   | Fractal threshold                         |
| [max, normal]altitude |                | +Float   | Max and normal houses altitude appearance |
| seed                  |                | Integer  | Seed used to generate houses placement    |
