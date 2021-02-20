# Terrain

Parent element name: terrain\
Element name: profile

| Attribute  | Type    | Default value      | Description                                                |
| ---------- | ------- | ------------------ | ---------------------------------------------------------- |
| in         | Float   |                    | Inrun weight                                               |
| y0         | Float   |                    | Horizon in terms of Y-axis                                 |
| sd         | Float   | 10.0               | Smooth distance                                            |
| fd         | Float   | 300.0              | Fade distance                                              |
| sc         | Float   | 0.1                | Fractal scale                                              |
| sm         | Float   | 0.5                | Fractal smoothness                                         |
| rs         | Float   |                    | Seed                                                       |
| c[1, 2]    | Color   | 0x4B4111, 0x6E7745 | Colors                                                     |
| tsc        | Float   | 0.008              | Tree fractal scale                                         |
| tsm        | Float   | 0.4                | Tree fractal smoothness                                    |
| fillraised | Boolean | True               | Toggles filling the terrain below the raised dhill profile |

## Terrain profiles

::: tip
For further profiles explanation, go to the Profile section.
:::

::: warning
These profiles must be placed before the terrain element in order to work.
:::

You can adjust terrain using two built-in profiles. There is no need to include any refx either refy.

| Name          | Placement        |
| ------------- | ---------------- |
| inrun-terrain | Inrun terrain    |
| dhill-terrain | Downhill terrain |

## Code snippets

``` xml
<hill version="DSJ4-1.8.0">
    <!-- Rest of code omitted for clearance -->
    <!-- This inrun terrain is adjusted in the following way: -->
    <!-- 
        => 90 meters before the inrun, terrain level is set to -1.5 meters
        => 80 meters before the inrun, terrain level is set to -1.5 meters
        => 10 meters before the inrun, terrain level is set to -1 meter
        => in the beginning of the inrun terrain level is set to -1 meter
     -->
    <profile id="inrun-terrain">
        <start x="-90" y="-1.5"/>
        <line x="-80" y="-1.5"/>
        <line x="-10" y="-1"/>
        <line x="0" y="-1"/>
    </profile>
</hill>
```
