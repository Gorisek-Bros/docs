# Location

Parent element name: hill\
Element name: location

::: warning
Some attributes may behave unexpectedly:

* altitude - very low/very high values cause very high/very low air density, therefore it's very hard to control the ski jumper
:::

| Attribute   | Type     | Allowed values  | Default value | Description                             |
| ----------- | -------- | --------------- | ------------- | --------------------------------------- |
| lattitude   | Float    | <-90.0; 90.0>   | 0.0           | Lattitude                               |
| longitude   | Float    | <-180.0; 180.0> | 0.0           | Longitude                               |
| orientation | +Integer | <0; 360>        | 0.0           | Terrain rotation in regard to the Earth |
| timezone    | Integer  | <-12; 12>       | 0.0           | Time zone                               |
| altitude    | Float    | (-inf; +inf)    | 0.0           | High above sea level                    |
