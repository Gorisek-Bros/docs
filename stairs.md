# Stairs

Stairs are usually placed on inrun sides, or hill. They can be also used in custom constructions. There is only one element that defines stairs contains - stairs.

::: tip
This section of the documentation contains things, that can't be described using only words. The best way to test the parameters described below is to use elements from already existing hills and play with them.
:::

## Positioning stairs

| Name        | Type   | Allowed values                                                           | Description                                          | Optional |
| ----------- | ------ | ------------------------------------------------------------------------ | ---------------------------------------------------- | -------- |
| y[1, 2]?    | Float  |                                                                          | The position relative to the Y-axis                  | True     |
| z[1, 2]?    | Float  |                                                                          | The position relative to the Z-axis                  | True     |
| refx[1, 2]? | String | A built-in reference which applies for refx or custom refx id            | A reference to the X-axis, which stairs are based on | True     |
| refy[1, 2]? | String | A built-in reference which applies for refy or your defined profile name | A reference to the Y-axis, which stairs are based on | True     |
| refz[1, 2]? | String | A built-in reference which applies for refz or your defined profile name | A reference to the Z-axis, which stairs are based on | True     |

## Sizing stairs

::: tip
Manipulating length of stairs which cover defined refx in DSJ4 is based on manipulating x1 and x2 attributes, width on lz and rz.
:::

| Name | Type   | Description                                           |
| ---- | ------ | ----------------------------------------------------- |
| x1   | Float  | The starting point in position relative to the X-axis |
| x2   | Float  | The ending point in position relative to the X-axis   |
| lz   | Float  | The starting point in position relative to the Z-axis |
| rz   | Float  | The ending point position relative to the Z-axis      |
| s    | +Float | Length of one stair                                   |

## Controlling sides visibility

| Name  | Type    | Description                       | Optional |
| ----- | ------- | --------------------------------- | -------- |
| left  | Boolean | Toogles the left side visibility  | True     |
| right | Boolean | Toggles the right side visibility | True     |

## Texturing stairs

| Name       | Type                       | Description                                                       |
| ---------- | -------------------------- | ----------------------------------------------------------------- |
| [t, m, c]1 | [Texture, Material, Color] | Stair front, rear, left, right and bottom side material and color |
| [t, m, c]2 | [Texture, Material, Color] | Stair top side texture, material and color                        |

## Code snippets

``` xml
<hill version="DSJ4-1.10.0">
    <!-- Rest of code omitted for clearance -->
    <!-- Assuming that you have guardrail attribute defined with the following parameters -->
    <guardrail z1="-1.0" z2="1.0" x="10" />

    <!-- You can place example stairs on the left and right side of the inrun using this snippet -->
    <stairs s="0.3" c2="0xB87749" m2="Materials\material1.xml" t2="Textures\wood2.png" c1="0x333333" m1="Materials\material1.xml" t1="Textures\rubbermat.png" rz="-2.0" lz="-1.0" d="0.3" x2="15.0" x1="0.0" refx2="inrun" refx1="inrun"/>
    <stairs s="0.3" c2="0xB87749" m2="Materials\material1.xml" t2="Textures\wood2.png" c1="0x333333" m1="Materials\material1.xml" t1="Textures\rubbermat.png" rz="1.0" lz="2.0" d="0.3" x2="15.0" x1="0.0" refx2="inrun" refx1="inrun"/>
</hill>
```
