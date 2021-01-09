# Pillars

Parent element name: hill\
Element name: pillar

Pillars are an essential part of DSJ4 hill buildings. It can be defined as a textured block that can have different shapes. It can be used under the inrun flat section as "tower", under inrun as hill support etc.

::: tip
This section of the documentation contains things, that can't be described using only words. The best way to test the parameters described below is to use elements from already existing hills and play with them.
:::

## Positioning pillars

| Name        | Type   | Allowed values                                                           | Description                                                                    | Optional |
| ----------- | ------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | -------- |
| y[1, 2]     | Float  |                                                                          | The position relative to the Y-axis                                            | True     |
| breflz      | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the bottom left side, which pillar is based on  | True     |
| brefrz      | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the bottom right side, which pillar is based on | True     |
| brefy       | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis from the bottom side, which pillar is based on       | True     |
| brefz       | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the bottom side, which pillar is based on       | True     |
| reflz       | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the left side, which pillar is based on         | True     |
| refrz       | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the right side, which pillar is based on        | True     |
| refx[1, 2]? | String | A built-in reference which applies for refx                              | A reference to the X-axis, which pillar is based on                            | True     |
| refy        | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis, which pillar is based on                            | True     |
| refz        | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis, which pillar is based on                            | True     |
| treflz      | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the top left side, which pillar is based on     | True     |
| trefrz      | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the top right side, which pillar is based on    | True     |
| trefy       | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis from the top side, which pillar is based on          | True     |
| trefz       | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis from the top side, which pillar is based on          | True     |

::: tip
If you are a beginner you don't have to use all these refs. The most basic are enough - refx or refx1 and refx2, refy and refz.
:::

## Sizing pillars

::: tip
Manipulating the length of pillars in DSJ4 is based on manipulating x1 and x2 attributes, width on lz and rz, height on ty and by.
:::

| Name           | Type  | Description                                                                        | Optional |
| -------------- | ----- | ---------------------------------------------------------------------------------- | -------- |
| x1             | Float | The starting point in position relative to the X-axis                              |          |
| x2             | Float | The ending point in position relative to the X-axis                                |          |
| lz[1, 2]?      | Float | The starting point in position relative to the Z-axis                              |          |
| rz[1, 2]?      | Float | The ending point in position relative to the Z-axis                                |          |
| bly[1, 2]?     | Float | The bottom left side coordinate(s) relative to the Y-axis                          | True     |
| blz[1, 2]?     | Float | The bottom left side coordinate(s) relative to the Z-axis                          | True     |
| bry[1, 2]?     | Float | The bottom right side coordinate(s) relative to the Y-axis                         | True     |
| brz[1, 2]?     | Float | The bottom right side coordinate(s) relative to the Z-axis                         | True     |
| by[1, 2]?      | Float | The bottom coordinate(s) relative to the Y-axis                                    | True     |
| tly[1, 2]?     | Float | The top left side coordinate(s) relative to the Y-axis                             | True     |
| tlz[1, 2]?     | Float | The top left side coordinate(s) relative to the Z-axis                             | True     |
| try[1, 2]?     | Float | The top right side coordinate(s) relative to the Y-axis                            | True     |
| trz[1, 2]?     | Float | The top right side coordinate(s) relative to the Z-axis                            | True     |
| ty[1, 2]?      | Float | The top coordinate(s) relative to the Y-axis                                       | True     |
| n[top, bottom] | Float | The top or bottom height in position perpendicular relative to [t, b]refy? profile | True     |

::: tip
If you are a beginner you don't have to use all these position attributes. The most basic are enough - x1 and x2, lz and rz, ty and by.
:::

## Multiple pillars

::: tip
If steps between the next pillars are the same, you can use the step and count attributes to create multiple pillars using only one element.
:::

| Name  | Type     | Default value | Description                     | Optional |
| ----- | -------- | ------------- | ------------------------------- | -------- |
| step  | +Float   | 0.0           | Step between pillars            | True     |
| count | +Integer | 0             | Count of pillars to be rendered | True     |

## Controlling sides visibility

| Name   | Type    | Description                        | Optional |
| ------ | ------- | ---------------------------------- | -------- |
| bottom | Boolean | Toggles the bottom side visibility | True     |
| front  | Boolean | Toggles the front side visibility  | True     |
| left   | Boolean | Toggles the left side visibility   | True     |
| rear   | Boolean | Toggles the rear side visibility   | True     |
| right  | Boolean | Toggles the right side visibility  | True     |
| top    | Boolean | Toggles the top side visibility    | True     |

## Texturing pillars

::: tip
Use normal type attribute if you are using opaque texture. When using textures with alpha channels such as grid.png, use blend type. In case of transparent textures, use glass type.
:::

::: tip
If you have two surfaces that are overlapping each other, specify the zbias attribute, so this surface will appear "above" the second surface.
:::

| Name         | Type                       | Allowed values       | Description                                          | Optional |
| ------------ | -------------------------- | -------------------- | ---------------------------------------------------- | -------- |
| [t, m, c]    | [Texture, Material, Color] |                      | Texture, material and color                          |          |
| pt           | Boolean                    |                      | Toggles texture snapping to the pillar shape         | True     |
| scale        | Float                      |                      | Texture scaling factor                               | True     |
| texture-refy | Float                      |                      | A reference to the Y-axis, which texture is based on | True     |
| type         | String                     | normal, blend, glass | Texture type                                         | True     |
| zbias        | +Integer                   |                      | Z-index                                              | True     |

::: tip
Texture-refy attribute works only when `pt="false"`. 
:::

## Code snippets

``` xml
<hill version="DSJ4-1.7.0">
    <!-- Rest of code omitted for clearance -->
    <!-- This XML outputs in pillar placed directly under the flat section of the inrun. -->
    <pillar brefy="terrain" trefy="inrun-top" t="Textures\concrete1.png" m="Materials\material1.xml" c="0xf2e5c7" reflz="inrun-left" refrz="inrun-right" x1="0" x2="3" />
</hill>
```
