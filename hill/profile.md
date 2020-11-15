# Hill profile

Parent element name: dhill\
Element name: profile

::: tip
 Many definitions below are taken from [Jumping Hills Construction Norm 2018](https://assets.fis-ski.com/image/upload/v1592381507/fis-prod/assets/Construction-Norm_2018-2.pdf) which is an official FIS document regarding ski jumping hills homologations.
:::

::: warning
rl is a deprecated, but required attribute. It means that this attribute doesn't do anything, however you still need to define its value.
:::

| Attribute | Type     | Allowed Values | Description                                                                                                                                               | Optional |
| --------- | -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| alpha     | +Float   |                | Inrun slope angle right after inrun                                                                                                                       |          |
| h         | +Float   |                | Difference in height between the takeoff and K                                                                                                            |          |
| n         | +Float   |                | Horizontal distance between the takeoff and K                                                                                                             |          |
| l1        | +Float   |                | Length of the curve between the beginning of the landing area and construction point                                                                      |          |
| l2        | +Float   |                | Length of the curve between construction point and end of the landing area                                                                                |          |
| a         | +Float   |                | Length of the outrun after the end of the transition curve to the outrun                                                                                  |          |
| beta-p    | +Float   |                | Angle of the tangent at beginning of the landing area                                                                                                     |          |
| beta      | +Float   |                | Angle of the tangent at construction point                                                                                                                |          |
| beta-l    | +Float   |                | Angle of the tangent at end of the landing area                                                                                                           |          |
| rl        | +Float   |                | Radius of the circular landing area                                                                                                                       |          |
| r2        | +Float   |                | Radius of the transition curve from the end of the landing area to end of the transition curve to the outrun at end of the transition curve to the outrun |          |
| b0        | +Float   |                | Width of the knoll at the base of the takeoff                                                                                                             |          |
| bk        | +Float   |                | Width at construction point                                                                                                                               |          |
| ba        | +Float   |                | Width at safety line                                                                                                                                      |          |
| hr        | +Float   |                | Backslope height                                                                                                                                          |          |
| nr        | +Float   |                | Backslope curve radius                                                                                                                                    |          |
| ar        | +Float   |                | The position of the start of backslope curve                                                                                                              |          |
| k         | +Integer |                | Construction point                                                                                                                                        |          |
| hs        | +Integer | (0; 1000)      | Hill size point                                                                                                                                           |          |
| x0        | +Integer |                | Starting point of the frame and snow either plastic appearance                                                                                            | True     |
