# Gates

## Start gate

Parent element name: inrun\
Element name: startgate

| Attribute  | Type                       | Default value | Description                                                                              |
| ---------- | -------------------------- | ------------- | ---------------------------------------------------------------------------------------- |
| default    | +Integer                   |               | Default gate in wind 0.0 m/s                                                             |
| min        | +Integer                   | 1             | Minimal possible gate to set                                                             |
| max        | +Integer                   |               | Maximal possible gate to set                                                             |
| step       | +Float                     | 0.5           | Default step between gates                                                               |
| wind       | Real                       |               | Wind influence on gate                                                                   |
| z[1, 2]    | Real                       | -1, 1         | Distance between ending of gate from inrun center in position relative to the the Z-axis |
| pz[1, 2]   | Real                       | -1, 1         | Distance between gate stands from inrun center in position relative to the the Z-axis    |
| [t, m, c]1 | [Texture, Material, Color] |               | Gate texture, material and color                                                         |
| [t, m, c]2 | [Texture, Material, Color] |               | Gate pillar texture, material and color                                                  |
| [t, m, c]3 | [Texture, Material, Color] |               | Gate stands texture, material and color                                                  |

## Gate steps

Parent element name: startgate\
Element name: steps

::: tip
Optional element. Steps between gates can be different. When this element is not defined, the step between all the gates will be equal to the step attribute value in the startgate element.
:::

| Attribute | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| n         | +Integer | Count of the gates placed according to step declared in step attribute |
| step      | +Float   | Step between gates                                                     |

## Gate numbers

Parent element name: inrun\
Element name: gatenumbers

::: tip
You can have multiple gatenumbers instances.
:::

| Attribute | Type     | Default value | Description                                                | Optional |
| --------- | -------- | ------------- | ---------------------------------------------------------- | -------- |
| y         | Float    |               | Shift in position relative to the Y-axis                   |          |
| z         | Float    |               | Shift from inrun center in position relative to the Z-axis |          |
| size      | +Float   | 0.1           | Text size                                                  |          |
| c1        | Color    |               | Text color                                                 |          |
| c2        | Color    |               | Background color                                           |          |
| min       | +Integer |               | Minimum gate number affected by attributes above           | True     |
| max       | +Integer |               | Maximum gate number affected by attributes above           | True     |

## Start banner

Parent element name: inrun\
Element name: startbanner

| Attribute | Type   | Description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| z         | Float  | Shift from inrun center in position relative to the Z-axis |
| text      | String | Text to be displayed                                       |
| textsize  | +Float | Text size                                                  |
