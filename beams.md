# Beams and beamgroups

## Beams

Parent element name: hill\
Element name: beam

The beam is a bollard. It's ideal to create for example simple handrail. Many beams can be defined as one element named beamgroup.

### Positioning beams

| Name        | Type   | Allowed values                                                           | Description                                                         | Optional |
| ----------- | ------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------- | -------- |
| x[1, 2]?    | Float  |                                                                          | The starting and/or ending point in position relative to the X-axis |          |
| y[1, 2]?    | Float  |                                                                          | The starting and/or ending point in position relative to the Y-axis | True     |
| z[1, 2]?    | Float  |                                                                          | The starting and/or ending point in position relative to the Z-axis | True     |
| refx[1, 2]? | String | A built-in reference which applies for refx                              | A reference to the X-axis, which beam is based on                   |          |
| refy[1, 2]? | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis, which beam is based on                   | True     |
| refz[1, 2]? | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis, which beam is based on                   | True     |

### Advanced beams positioning and rotating

::: tip
In many cases you don't need to use attributes from this table. However, they can be helpful, when you want to make realistic looking hill.  
:::

| Name        | Type   | Description                                                                                                       | Optional |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------- | -------- |
| ny[1, 2]?   | Float  | The starting and/or ending point in position perpendicular (using normal vectors) relative to refy[1, 2]? profile | True     |
| nz[1, 2]?   | Float  | The starting and/or ending point in position perpendicular (using normal vectors) relative to refz[1, 2]? profile | True     |
| n_[x, y, z] | Float  | The [X, Y, Z]-coordinate of a normal vector to one of side edges of the beam                                      | True     |

::: tip
By changing n_[x, y, z] attributes, you can control rotation of the beam sides. 
:::

### Sizing beams

| Name      | Type   | Description                   | Optional |
| --------- | ------ | ----------------------------- | -------- |
| r[1, 2]?  | +Float | Beam radius                   |          |
| rb[1, 2]? | +Float | Second beam radius value      | True     |

::: tip
r[1, 2] (rb[1, 2]) are usually used if beam is to have different radius at both ends. 
:::

### Controlling sides

| Name      | Type     | Default value | Description                                    | Optional |
| --------- | -------- | ------------- | ---------------------------------------------- | -------- |
| edges     | +Integer |               | Edges count                                    |          |
| smooth    | Boolean  | False         | Toggles smooth sides                           | True     |
| rect      | Boolean  | False         | Toggles a cuboid shape                         | True     |
| side      | Boolean  | True          | Toggles rendering sides of the beam            | True     |
| end[1, 2] | Boolean  | False         | Toggles rendering full shapes of beams         | True     |
| invert    | Boolean  | False         | Toggles the inversion of all sides of the beam | True     |

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
| stepper | +integer | <0; 5>        | Step management way             |          |

### Rendering beamgroups

| Name      | Type    | Default value | Description                                   | Optional |
| --------- | ------- | ------------- | --------------------------------------------- | -------- |
| first     | Boolean | Trur          | Toggles rendering the first beam in beamgroup | True     |
| last      | Boolean | True          | Toggles rendering the last beam in beamgroup  | True     |
| end[1, 2] | Boolean | False         | Toggles rendering full shapes of beams        | True     |
| side      | Boolean | True          | Toggles rendering sides of the beam            | True     |

### Positioning beamgroups

::: tip
These attributes manage the position of the starting beam. The position of the next beam relative to the X-axis is calculated with formula dx[1, 2]? * n + step, where n is an index of the nth beam in beamgroup.
:::

::: tip
Beamgroups render multiple beams in a range of positions from [x, y, z]1 to [x, y, z]2.
:::

| Name      | Type  | Description                                                         |
| --------- | ----- | ------------------------------------------------------------------- |
| dx[1, 2]? | Float | The position relative to X-axis of starting beam                    |
| dy[1, 2]? | Float | The position relative to Y-axis of starting beam                    |
| dz[1, 2]? | Float | The position relative to Z-axis of starting beam                    |
| ny[1, 2]? | Float | The position perpendicular relative to refy[1, 2]? of starting beam |
| nz[1, 2]? | Float | The position perpendicular relative to refz[1, 2]? of starting beam |
