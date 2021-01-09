# Lights

Parent element name: inrun\
Element name: lights

::: tip
Optional element.
:::


| Name        | Type    | Allowed values                                                           | Default value | Description                                                 | Optional |
| ----------- | ------- | ------------------------------------------------------------------------ | ------------- | ----------------------------------------------------------- | -------- |
| refx[1, 2]? | String  | A built-in reference which applies for refx or custom refx id            | inrun         | A reference to the X-axis, which lights are based on        | True     |
| refy        | String  | A built-in reference which applies for refy or your defined profile name | inrun-top     | A reference to the Y-axis, which lights are based on        | True     |
| refz        | String  | A built-in reference which applies for refz or your defined profile name |               | A reference to the Z-axis, which lights are based on        |          |
| x1          | Float   |                                                                          | 0             | The starting point in position relative to the X-axis       | True     |
| x2          | Float   |                                                                          | 100           | The ending point in position relative to the X-axis         | True     |
| step        | +Float  |                                                                          |               | Step between lamps                                          |          |
| h           | Float   |                                                                          | 0.0           | The position relative to the Y-axis                         | True     |
| n           | Float   |                                                                          | 0.0           | The position perpendicular relative to the refy profile     | True     |
| d           | Float   |                                                                          | 0.1           | The position relative to the Z-axis                         | True     |
| l           | Float   |                                                                          |               | Light length                                                |          |
| [r, g, b]   | +Float  | <0.0; 1.0>                                                               |               | Light color                                                 |          |
| attn        | Float   |                                                                          |               | Lights attenuation                                          |          |
| range       | Float   |                                                                          |               | Lights range                                                |          |
| day         | Boolean |                                                                          | true          | Toggles lights visibility during a day                      | True     |
| zmargin     | Float   |                                                                          |               | The position shift of lighting start relative to the Z-axis | True     |
