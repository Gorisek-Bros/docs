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
Maxstep can be understood as max length of subelements, which create linear element. The smaller the maxstep value is, linear elements are splitted into more smaller elements not longer than maxstep.   
It's not usually required to adjust the maxstep. One of cases when you can adjust it might be better looking spot lights.
:::

::: tip
Maxturn attribute can be understood as max chord length of curved lines. The smaller the maxturn value is, the smoother the profile is, but more vertices and faces are rendered. Default value is circa 0.5.
:::

| Name    | Type     | Allowed values | Description                                    | Optional |
| ------- | -------- | -------------- | ---------------------------------------------- | -------- |
| id      | String   |                | A profile name                                 |          |
| side    | String   | left, right    | Placement in terms of refx                     | True     |
| maxstep | +Float   |                | A profile linear points max interval length    | True     |
| maxturn | +Float   |                | A profile nonlinear points max interval length | True     |

## Children elements

::: tip
In your defined profile you don't need to use all of below elements. Only use of *start* element and one of other elements (line, polynom3, arc or profile) is required. *line*, *polynom3*, *arc* or *profile* elements can be used multiple times. 
:::

### Start

Parent element name: profile\
Element name: start


The starting point of every profile is the start element.

| Name  | Type   | Description                                                                 | Optional |
| ----- | ------ | --------------------------------------------------------------------------- | -------- |
| x     | Float  | The starting point in position relative to the X-axis                       |          |
| y     | Float  | The starting point in position relative to the Y-axis                       |          |
| refx  | String | A reference to the X-axis, which profile is based on                        | True     |
| refy  | String | A reference to the Y-axis, which profile is based on                        | True     |
| refyx | Float  | A reference to the X-point, which Y-point (from *y* attribute) is based on  | True     |


### Line
Parent element name: profile\
Element name: line

The next points are defined using the line element. As the profile is continuous, the start and lines will be connected in defined coordinates.

| Name  | Type   | Description                                                                | Optional |
| ----- | ------ | -------------------------------------------------------------------------- | -------- |
| x     | Float  | The next point in position relative to the X-axis                          |          |
| y     | Float  | The next point in position relative to the Y-axis                          |          |
| refx  | String | A reference to the X-axis, which profile is based on                       | True     |
| refy  | String | A reference to the Y-axis, which profile is based on                       | True     |
| refyx | Float  | A reference to the X-point, which Y-point (from *y* attribute) is based on | True     |

### Polynom3
Parent element name: profile\
Element name: polynom3

The next points can also be reach by using more sophisticated way e.g. by using polynom3. Polynom3 element describes a 3rd degree polynomial. 

| Name  | Type   | Description                                                                | Optional |
| ----- | ------ | -------------------------------------------------------------------------- | -------- |
| x     | Float  | The next point in position relative to the X-axis                          |          |
| y     | Float  | The next point in position relative to the Y-axis                          |          |
| k1    | Float  | First derivative at the start of polynom3                                  | True     |
| k2    | Float  | First derivative at the end of polynom3                                    |          |
| refx  | String | A reference to the X-axis, which profile is based on                       | True     |
| refy  | String | A reference to the Y-axis, which profile is based on                       | True     |
| refyx | Float  | A reference to the X-point, which Y-point (from *y* attribute) is based on | True     |

::: tip
Start point of polynom3 means the end of previous element.  
:::
::: tip
If you don't define *k1* attribute, polynom3 will continue previous element at starting point. 
:::

### Profile
Parent element name: profile\
Element name: profile

Your defined profile can also contain build-in or yours, predefined profiles.

| Name  | Type   | Description                                                                         | Optional |
| ----- | ------ | ----------------------------------------------------------------------------------- | -------- |
| id    | String | The name of profile used                                                            |          |
| x     | Float  | The end point of profile in position relative to the X-axis                         | True     |
| y     | Float  | The profile shift in position relative to the Y-axis                                | True     |
| n     | Float  | The profile shift in position perpendicular (using normal vectors) to this profile  | True     |
| dx    | Float  | The profile shift in position relative to the X-axis                                | True     |
| refx  | String | A reference to the X-axis, which X-point (from *x* attribute) is based on           | True     |

::: warning
Profile, by default, is shifted in position relative to Y-axis to match previously used element. *y* and *n* attibutes apply to this, default shift. 
:::

### Arc
Parent element name: profile\
Element name: arc

Arc element defines the arc that is part of a circle. It can be used e.g. to create elements that can't be created by beams. 

| Name  | Type   | Description                                                                | Optional |
| ----- | ------ | -------------------------------------------------------------------------- | -------- |
| x     | Float  | The next point in position relative to the X-axis                          |          |
| y     | Float  | The next point in position relative to the Y-axis                          |          |
| x0    | Float  | The centre point of circle in position relative to X0-axis                 |          |
| y0    | Float  | The centre point of circle in position relative to Y0-axis                 |          |
| refx  | String | A reference to the X-axis, which profile is based on                       | True     |
| refy  | String | A reference to the Y-axis, which profile is based on                       | True     |
| refyx | Float  | A reference to the X-point, which Y-point (from *y* attribute) is based on | True     |

::: warning 
X0(Y0)-axis is the axis of global coordinates system. You can't change its reference.
:::

::: tip
The origin of global coordinates system is located under centre of take-off as shown in the picture.

![1](/arc.png)
::: 


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
