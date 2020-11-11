# Weather

Parent element name: hill\
Element name: weather

::: warning
These attributes don't affect training mode, as training defined settings have higher priority than XML attribute values.
:::

::: tip
It's not possible to completely get rid of snow.
:::

| Attribute                | Type     | Allowed values | Description                       |
| ------------------------ | -------- | -------------- | --------------------------------- |
| pollution                | +Float   | <0.0; 1.0>     | Air turbidity                     |
| firstsnow                | +Integer | <0; 365>       | The first day, when snow appears  |
| lastsnow                 | +Integer | <0; 365>       | The last day, when snow appears   |
| maxsnow                  | +Float   | <0.0; 1.0>     | Max snow                          |
| precipitationprobability | +Float   | <0.0; 1.0>     | Probability of rainfall occurence |
| fogprobability           | +Float   | <0.0; 1.0>     | Probability of fog occurence      |
