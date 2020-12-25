# Profile

Parent element name: hill\
Element name: profile

A profile is a continuous function that can be described as an Y(X) (when used as refy) or Z(X) (when used as refz) function where both X and Y are axes. They are the most important point when creating custom hill constructions. They allow the creation of such buildings as wind grids, towers, and more advanced things.

::: tip
This section of the documentation contains things, that can't be described using only words. The best way to test the parameters described below is to use elements from already existing hills and play with them.
:::

## Starting with profiles

The root element of the profile is the profile. It takes two attributes.

::: tip
It's not usually required to adjust the maxstep. One of cases when you can adjust it might be better looking spot lights.
:::

| Name    | Type     | Allowed values | Description                         | Optional |
| ------- | -------- | -------------- | ----------------------------------- | -------- |
| id      | String   |                | A profile name                      |          |
| side    | String   | left, right    | Placement in terms of refx          | True     |
| maxstep | +Integer | 1000           | A profile linear points split count | True     |

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

There are two required profiles that you have to define by yourself, without them, your hill won't load.

| Name        | Placement                   |
| ----------- | --------------------------- |
| inrun-left  | The left side of the inrun  |
| inrun-right | The right side of the inrun |

## Built-in profiles

DSJ4 already includes some predefined profiles, that can be used to create basic constructions.

| Name        | Placement                      | Applies for      |
| ----------- | ------------------------------ | ---------------- |
| dhill       | The whole hill                 | refx             |
| dhill-left  | The left side of the downhill  | refz, ref[l, r]z |
| dhill-right | The right side of the downhill | refz, ref[l, r]z |
| dhill-top   | The top side of the downhill   | refy, [b, t]refy |
| inrun       | The whole inrun                | refx             |
| inrun-top   | The top side of the inrun      | refy, [b, t]refy |
| terrain     | The terrain                    | refy, [b, t]refy |

## Overridable profiles

These profiles are also built-in, however, you have to specify their start and line elements, otherwise, the game won't include them.

::: tip
inrun-extension profile example usage can be seen on Bischofshofen HS140 hill.
:::

::: tip
For inrun-terrain and dhill-terrain profiles reference navigate to the Terrain section.
:::

| Name            | Description                                  |
| --------------- | -------------------------------------------- |
| inrun-extension | Collision area after the ending of the inrun |
| inrun-terrain   | Terrain at the inrun                         |
| dhill-terrain   | Terrain at the downhill                      |

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

``` xml
<!-- The inrun-extension profile code taken from Bischofshofen HS140 hill -->
<profile id="inrun-extension">
    <start x="0" y="4" />
    <line x="3" y="3.42757" />
    <line x="3.1" y="3" />
</profile>
```
