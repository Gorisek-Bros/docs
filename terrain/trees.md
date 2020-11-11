# Trees

Parent element name: terrain\
Element name: trees

::: warning
Some attributes may behave unexpectedly:

* count - game settings have higher priority than XML attribute value
:::

| Attribute             | Allowed values | Type     | Description                              |
| --------------------- | -------------- | -------- | ---------------------------------------- |
| count                 | <0; 20000>     | +Integer | Trees count                              |
| [min, max]height      |                | +Integer | Minimum and maximum trees height         |
| fractalthreshold      |                | +Integer | Fractal threshold                        |
| [max, normal]altitude |                | +Float   | Max and normal trees altitude appearance |
| seed                  |                | Integer  | Seed used to generate trees placement    |
