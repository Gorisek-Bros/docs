# Flag

Parent element name: inrun\
Element name: flag

::: tip
The flag can be placed in two different places, depending on its position

* when x and z coordinates are placed on inrun, its basis will start on the inrun
* when x and z coordinates are placed outside inrun, its basis will start on the ground
:::

::: tip
Displayed flag country can be modified using the tf attribute. The schema of flag textures is Textures\flag-[iso3].png, where iso3 stands for ISO3 country code. For codes reference go [here](https://www.mediamond.fi/forum/viewtopic.php?f=12&t=4693).
:::

| Attribute  | Type                       | Description                                                      |
| ---------- | -------------------------- | ---------------------------------------------------------------- |
| x          | Real                       | Pole shift from inrun start in position relative to the X-axis   |
| z          | Real                       | Board shift from inrun center in position relative to the Z-axis |
| hf         | +Float                     | Board height                                                     |
| pf         | +Float                     | Proportion of flag width to height                               |
| hp         | +Float                     | Pole height                                                      |
| rp         | +Float                     | Section radius at basis                                          |
| rt         | +Float                     | Section radius at peak                                           |
| [t, m, c]f | [Texture, Material, Color] | Flag board texture, material and color                           |
| [t, m, c]p | [Texture, Material, Color] | Flag pole texture, material and color                            |
