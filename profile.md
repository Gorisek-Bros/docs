# Profile

Parent element name: hill\
Element name: profile

A profile is a continuous function that can be described as an X(Y) (when uses as refy) or X(Z) (when used as refy) function where both X and Y are axes. They are the most important point when creating custom hill constructions. They allow the creation of such buildings as wind grids, towers, and more advanced things.

::: tip
This section of the documentation contains things, that can't be described using only words. The best way to test the parameters described below is to use elements from already existing hills and play with them.
:::

## Starting with profiles

The root element of the profile is the profile. It takes two attributes.

| Name | Type   | Allowed values | Description                | Optional |
| ---- | ------ | -------------- | -------------------------- | -------- |
| id   | String |                | A profile name             |          |
| side | String | left, right    | Placement in terms of refx | True     |

## Children elements

The starting point of every profile is the start element.

| Name | Type   | Description                                           | Optional |
| ---- | ------ | ----------------------------------------------------- | -------- |
| x    | Float  | The starting point in position relative to the X-axis |          |
| y    | Float  | The starting point in position relative to the Y-axis |          |
| refx | String | A reference to the X-axis, which profile is based on  | True     |
| refy | String | A reference to the Y-axis, which profile is based on  | True     |

The next points are defined using the line element. As the profile is continuous, the start and lines will be connected in defined coordinates.

| Name | Type   | Description                                          | Optional |
| ---- | ------ | ---------------------------------------------------- | -------- |
| x    | Float  | The next point in position relative to the X-axis    |          |
| y    | Float  | The next point in position relative to the Y-axis    |          |
| refx | String | A reference to the X-axis, which profile is based on | True     |
| refy | String | A reference to the Y-axis, which profile is based on | True     |

## Required profiles

There are two required profiles that you have to define by yourself, without them, a hill won't load.

| Name        | Placement                   |
| ----------- | --------------------------- |
| inrun-left  | The left side of the inrun  |
| inrun-right | The right side of the inrun |

## Built-in profiles

DSJ4 already includes some predefined profiles, that can be used to create basic constructions.

| Name        | Placement                      | Applies for |
| ----------- | ------------------------------ | ----------- |
| dhill       | The whole hill                 | refx        |
| dhill-left  | The left side of the downhill  | refz        |
| dhill-right | The right side of the downhill | refz        |
| dhill-top   | The top side of the downhill   | refy        |
| inrun       | The whole inrun                | refx        |
| inrun-top   | The top side of the inrun      | refy        |
| terrain     | The terrain                    | refy        |

## Code snippets

``` xml
<!-- The most basic irnun-left profile definition -->
<profile id="inrun-left" side="left" maxstep="1000">
    <start x="-10" y="1.0" refx="inrun" />
    <line x="0" y="1.0" refx="dhill" />
</profile>
```

``` xml
<!-- The most basic irnun-right profile definition -->
<profile id="inrun-right" side="right" maxstep="1000">
    <start x="-10" y="-1.0" refx="inrun" />
    <line x="0" y="-1.0" refx="dhill" />
</profile>
```
