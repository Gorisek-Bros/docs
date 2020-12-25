# Missing attributes

The list below presents missing XML attributes in the documentation. They will be added successively.

::: tip
The format of the list is the following:

* "bigger" header is equal to the parent element name
* "smaller" header is equal to children element
* the list below headers presents missing attributes

For example

## profile

* maxturn

### start

* refyx

means that the profile element is missing maxstep and maxturn attributes explanation and start element which is the children element of the profile is missing refyx.
:::

::: tip
If you know any usage of attributes below, contact the documenation maintainer.
:::

## profile

* maxturn

### start

* refyx

### line

* refyx
* corner

### polynom3

* x
* y
* k1
* k2

::: warning
arc element was never used and its implementation is probably bugged.
:::

### arc

* x
* y
* x0
* y0

### profile

* id
* x
* y
* n
* dx

## lights

* n
* zmargin

## railing

* n[1, 2]
* pt[1, 2, 3, 4, 5, 6]
* texture[1, 2, 3, 4, 5, 6]-refy
* ta[1, 2, 3, 4, 5, 6]

## pillar

* n[top, bottom]
* texture-refy

## beam

* ny[1, 2]?
* nz[1, 2]?
* r[1, 2]?[b]?
* side
* n_[x, y, z]
* invert

## beamgroup

* [d, n][x, y, z][1, 2]?
* n_[x, y, z]

## inrun

### profile

* t

### startgate

* pdy

## dhill

### profile

* r2[x, y]

## terrain

### profile

* fillraised
