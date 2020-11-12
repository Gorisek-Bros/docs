# Frame

Parent element name: inrun\
Element name: frame

![1](/frame.png)

::: warning
t0, m0 and c0 attributes apply only during the plastic is enabled (so for example during the summer).
:::

| Attribute  | Type                       | Default value | Description                                                                                        |
| ---------- | -------------------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| bh         | +Float                     | 1.5           | Frame height                                                                                       |
| by         | +Float                     | 0.0           | The position relative to the Y-axis                                                                |
| bdrz       | Float                      | 0.0           | The position relative to the Z-axis in terms of the right side                                     |
| bdlz       | Float                      | 0.0           | The position relative to the Z-axis in terms of the left side                                      |
| snow       | Boolean                    | false         | Toggles snowing between guardrail line and width determined by inrun-left and inrun-right profiles |
| topsnow    | Boolean                    | true          | Toggles snowing at the flat section above the inrun                                                |
| left       | Boolean                    | true          | Toggles the left side visibility                                                                   |
| right      | Boolean                    | true          | Toggles the right side visibility                                                                  |
| [t, m, c]0 | [Texture, Material, Color] |               | Texture, material and color of inrun sides                                                         |
| [t, m, c]1 | [Texture, Material, Color] |               | Texture, material and color of the top side of the frame                                           |
| [t, m, c]2 | [Texture, Material, Color] |               | Texture, material and color of the rear side of the frame                                          |
| [t, m, c]3 | [Texture, Material, Color] |               | Texture, material and color of left and right sides of the frame                                   |
