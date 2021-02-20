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
| refx[1, 2]? | String | A built-in reference which applies for refx or custom refx id            | A reference to the X-axis, which beam is based on                   |          |
| refy[1, 2]? | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis, which beam is based on                   | True     |
| refz[1, 2]? | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis, which beam is based on                   | True     |

::: warning
Beams are always created along the shortest possible path between [x, y, z]1 to [x, y, z]2. It isn't possible to create curved beams.
:::

### Advanced beams positioning and rotating

::: tip
In many cases, you don't need to use attributes from this table. However, they can be helpful, if you want to make a realistic-looking hill.  
:::

| Name        | Type  | Description                                                                                                       | Optional |
| ----------- | ----- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| ny[1, 2]?   | Float | The starting and/or ending point in position perpendicular (using normal vectors) relative to refy[1, 2]? profile | True     |
| nz[1, 2]?   | Float | The starting and/or ending point in position perpendicular (using normal vectors) relative to refz[1, 2]? profile | True     |
| n_[x, y, z] | Float | The [X, Y, Z]-coordinate of a normal vector to one of the side edges of the beam                                  | True     |

::: tip
By changing n_[x, y, z] attributes, you can control the rotation of the beam sides.
:::

### Sizing beams

| Name      | Type   | Description              | Optional |
| --------- | ------ | ------------------------ | -------- |
| r[1, 2]?  | +Float | Beam radius              |          |
| rb[1, 2]? | +Float | Second beam radius value | True     |

::: tip
Specify the rb attribute to create the ellipse beam.
:::

::: tip
r[1, 2] (rb[1, 2]) are usually used if the beam is to have a different radius at both ends.
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
The stepper attribute can't be described using only words, as it includes advanced math and deep knowledge of DSJ4 code. In most cases setting its value to 0 should be enough, however, the difference between values can be noticed.
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
| first     | Boolean | True          | Toggles rendering the first beam in beamgroup | True     |
| last      | Boolean | True          | Toggles rendering the last beam in beamgroup  | True     |
| end[1, 2] | Boolean | False         | Toggles rendering full shapes of beams        | True     |
| side      | Boolean | True          | Toggles rendering sides of the beam           | True     |

### Positioning beamgroups

::: tip
Beamgroups render multiple beams in a range of positions from [x, y, z]1 to [x, y, z]2.

The intermediate points for beams are calculated with the following formula (for `stepper="0"`):

`P(n) = P1 + [(P2 - P1) / Distance(P2 - P1)] * n * step,`

where P1 is [x, y, z]1 point in the global coordinate system and P2 is [x, y, z]2 point in the global coordinate system.
:::

::: tip
These attributes manage the ending points of each beam relative to `P(n)` points from the previous tip.
:::

| Name        | Type  | Description                                                                          |
| ----------- | ----- | ------------------------------------------------------------------------------------ |
| dx[1, 2]?   | Float | The ending points of beams in position relative to X-axis                            |
| dy[1, 2]?   | Float | The ending points of beams in position relative to Y-axis                            |
| dz[1, 2]?   | Float | The ending points of beams in position relative to Z-axis                            |
| ny[1, 2]?   | Float | The ending points of beams in position perpendicular relative to refy[1, 2]? profile |
| nz[1, 2]?   | Float | The ending points of beams in position perpendicular relative to refz[1, 2]? profile |
| n_[x, y, z] | Float | The [X, Y, Z]-coordinate of a normal vector to one of the side edges of the beams    |

## Code snippets

``` xml
<hill version="DSJ4-1.8.0">
    <!-- Rest of code omitted for clearance -->
    <!-- This XML outputs in simple barrier placed on left side of the inrun. -->
    <beam x1="5" x2="25" y="1.5" z="1.5" r="0.025" edges="8" end1="true" end2="true" smooth="true" t="Textures\metal.png" m="Materials\metal.xml" c="0x505050" refx="inrun" refy="inrun-top"/>
    <beamgroup x1="5" x2="25" y="0" z="1.5" r="0.025" edges="8" dy1="0" dy2="1.5" end1="false" end2="true" smooth="true" stepper="1" step="1" t="Textures\metal.png" m="Materials\metal.xml" c="0x505050" refx="inrun" refy="inrun-top"/>
</hill>
```
