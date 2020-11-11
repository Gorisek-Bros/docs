# Railings

Parent element name: hill\
Element name: railing

Railings are usually thin, high, and long elements usually placed on inrun sides. They can also look and behave similarly as a pillar.

::: tip
This section of the documentation contains things, that can't be described using only words. The best way to test the parameters described below is to use elements from already existing hills and play with them.
:::

## Positioning railings

| Name        | Type   | Allowed values                                                         | Description                                                                 | Optional |
| ----------- | ------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------- |
| y[1, 2]     | Float  |                                                                        | The position relative to the Y-axis                                         | True     |
| z[1, 2]     | Float  |                                                                        | The position relative to the Z-axis                                         | True     |
| refx[1, 2]? | String | A built-in profile which applies for refx                              | A reference to the X-axis, which railings are based on                      | True     |
| refy        | String | A built-in profile which applies for refy or your defined profile name | A reference to the Y-axis, which railings are based on                      | True     |
| refz        | String | A built-in profile which applies for refz or your defined profile name | A reference to the Z-axis, which railings are based on                      | True     |
| brefy       | String | A built-in profile which applies for refy or your defined profile name | A reference to the Y-axis from the bottom side, which railings are based on | True     |
| trefy       | String | A built-in profile which applies for refy or your defined profile name | A reference to the Y-axis from the top side, which railings are based on    | True     |

## Sizing railings

::: tip
Manipulating the length of railings in DSJ4 is based on manipulating x1 and x2 attributes.
:::

| Name | Type  | Description                                           |
| ---- | ----- | ----------------------------------------------------- |
| x1   | Float | The starting point in position relative to the X-axis |
| x2   | Float | The ending point in position relative to the X-axis   |
| w    | Float | Width                                                 |
| h    | Float | Height                                                |
| h2   | Float | The second height value                               |

## Controlling sides visibility

| Name   | Type    | Description                        | Optional |
| ------ | ------- | ---------------------------------- | -------- |
| bottom | Boolean | Toggles the bottom side visibility | True     |
| front  | Boolean | Toggles the front side visibility  | True     |
| left   | Boolean | Toggles the left side visibility   | True     |
| rear   | Boolean | Toggles the rear side visibility   | True     |
| right  | Boolean | Toggles the right side visibility  | True     |
| top    | Boolean | Toggles the top side visibility    | True     |

## Texturing railings

::: tip
If you have two surfaces that are overlapping each other, specify the zbias attribute, so this surface will appear "above" the second surface
:::

| Name       | Type                       | Allowed values       | Description                                    | Optional |
| ---------- | -------------------------- | -------------------- | ---------------------------------------------- | -------- |
| [t, m, c]  | [Texture, Material, Color] |                      | Texture, material and color of all sides       |          |
| [t, m, c]1 | [Texture, Material, Color] |                      | Texture, material and color of the left side   | True     |
| [t, m, c]2 | [Texture, Material, Color] |                      | Texture, material and color of the right side  | True     |
| [t, m, c]3 | [Texture, Material, Color] |                      | Texture, material and color of the top side    | True     |
| [t, m, c]4 | [Texture, Material, Color] |                      | Texture, material and color of the bottom side | True     |
| [t, m, c]5 | [Texture, Material, Color] |                      | Texture, material and color of the rear side   | True     |
| [t, m, c]6 | [Texture, Material, Color] |                      | Texture, material and color of the front side  | True     |
| scale      | Float                      |                      | Texture scaling factor                         |          |
| type       | String                     | normal, blend, glass | Type                                           |          |
| zbias      | +Integer                   |                      | Z-index                                        | True     |

## Code snippets

``` xml
<hill version="DSJ4-1.7.0">
    <!-- Rest of code omitted for clearance -->
    <!-- 
        This XML outputs two railings on both inrun sides.
        They start on the inrun beginning and end on 25 meters of the inrun.
    -->
    <railing x1="0" x2="25" h="0.5" w="0.1" t="Textures\railing-glass-cut.png" m="Materials\window.xml" c="0xFFFFFFFF" y="0" z="-1" refx="inrun" />
    <railing x1="0" x2="25" h="0.5" w="0.1" t="Textures\railing-glass-cut.png" m="Materials\window.xml" c="0xFFFFFFFF" y="0" z="1" refx="inrun" />
</hill>```
