# Beams and beamgroups

## Beams

Parent element name: hill\
Element name: beam

The beam is a bollard. It's ideal to create for example simple handrail. Many beams can be defined as one element named beamgroup.

### Positioning beams

| Name        | Type   | Allowed values                                                           | Description                                           | Optional |
| ----------- | ------ | ------------------------------------------------------------------------ | ----------------------------------------------------- | -------- |
| x1          | Float  |                                                                          | The starting point in position relative to the X-axis |          |
| x2          | Float  |                                                                          | The ending point in position relative to the X-axis   |          |
| y1          | Float  |                                                                          | The starting point in position relative to the Y-axis | True     |
| y2          | Float  |                                                                          | The ending point in position relative to the Y-axis   | True     |
| refx[1, 2]? | String | A built-in reference which applies for refx                              | A reference to the X-axis, which beam is based on     |          |
| refy[1, 2]? | String | A built-in reference which applies for refy or your defined profile name | A reference to the X-axis, which beam is based on     |          |
| refz[1, 2]? | String | A built-in reference which applies for refz or your defined profile name | A reference to the X-axis, which beam is based on     |          |

### Sizing beams

| Name | Type   | Description |
| ---- | ------ | ----------- |
| r    | +Float | Radius      |

### Controlling sides

| Name   | Type     | Description            | Optional |
| ------ | -------- | ---------------------- | -------- |
| edges  | +Integer | Edges count            |          |
| smooth | Boolean  | Toggles smooth sides   | True     |
| rect   | Boolean  | Toggles a cuboid shape | True     |

### Texturing beams

::: tip
If you have two surfaces that are overlapping each other, specify the zbias attribute, so this surface will appear "above" the second surface
:::

| Name      | Type                       | Description                 | Optional |
| --------- | -------------------------- | --------------------------- | -------- |
| [t, m, c] | [Texture, Material, Color] | Texture, material and color |          |
| zbias     | +Integer                   | Z-index                     | True     |

## Beamgroups

Parent element name: hill\
Element name: beamgroup

Beamgroup is a group of beams defined using one element named beamgroup. So instead of declaring beams multiple times, you can have one beamgroup.

::: tip
All beams' attributes are working also with beamgroups. However, some extra attributes apply for beamgroup only.
:::

::: tip
The stepper attribute can't be described using only words, as it includes advanced math and deep knowledge of DSJ4 code. In most cases setting its value to 0 should be enough, however the difference between values can be noticed.
:::

### Managing steps

| Name    | Type     | Default value | Description                     | Optional |
| ------- | -------- | ------------- | ------------------------------- | -------- |
| step    | +Float   |               | Step between beams              |          |
| fitstep | Boolean  |               | Toggles equal beams arrangement | True     |
| stepper | +integer | <0; 5>        | Step management way             |

### Rendering beamgroups

| Name  | Type    | Description                                   | Optional |
| ----- | ------- | --------------------------------------------- | -------- |
| first | Boolean | Toggles rendering the first beam in beamgroup | True     |
| last  | Boolean | Toggles rendering the last beam in beamgroup  | True     |

### Positioning beamgroups

::: tip
These attributes manage the position of the starting beam. The position of the next beam relative to the X-axis is calculated with formula dx[1, 2]? * n + step, where n is an index of the nth beam in beamgroup.
:::

::: tip
Beamgroups render multiple beams in a range of positions from x1 to x2.
:::

| Name      | Type  | Description                                      |
| --------- | ----- | ------------------------------------------------ |
| dx[1, 2]? | Float | The position relative to X-axis of starting beam |
| dy[1, 2]? | Float | The position relative to Y-axis of starting beam |
| dz[1, 2]? | Float | The position relative to Z-axis of starting beam |
