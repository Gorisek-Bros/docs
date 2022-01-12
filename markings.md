# Markings <version-badge>1.10.0+</version-badge>

Parent element name: dhill\
Element name: markings


::: tip
Notice the refd[1, 2]? attributes in some elements below, its allowed values refer to:
* f - fall line
* hs - hill size
* k - construction point
* p - landing point

Using them, you can precisely place markings in common zones, without doing monkey calculations.
:::

::: tip
Markings support special profiles named left and right used within refz[1, 2]? referring to downhill sides.
:::

## Summer and winter markings

### Banner

Parent element name: summer, winter\
Element name: banner


| Name        | Type     | Allowed values    | Description                                          | Optional |
| ----------- | -------- | ----------------- | ---------------------------------------------------- | -------- |
| d[1, 2]     | +Float |                   | Position relative to the downhill                    |          |
| side        | String   | both, left, right | Position relative to the downhill side               |          |
| w           | +Float   |                   | Zone thickness                                       |          |
| margin      | +Float   |                   | Shift in position relative to the downhill side      |          |
| c           | Color    |                   | Zone color                                           |          |
| refd[1, 2] | String   | f, hs, k, p       | Position relative to the built-in distance reference | True     |
| z[1, 2]     | Float    |                   | Position relative to the Z-axis                      |          |

## Summer markings

Parent element name: markings\
Element name: summer

### Grass

Parent element name: summer\
Element name: grass


| Name        | Type     | Allowed values    | Description                                          | Optional |
| ----------- | -------- | ----------------- | ---------------------------------------------------- | -------- |
| d[1, 2]     | +Float |                   | Position relative to the downhill                    |          |
| side        | String   | both, left, right | Position relative to the downhill side               |          |
| refd[1, 2]? | String   | f, hs, k, p       | Position relative to the built-in distance reference | True     |
| refz[1, 2]? | String   |                   | A built-in reference, which line is based on         | True     |
| z[1, 2]     | Float    |                   | Position relative to the Z-axis                      |          |

### Line

Parent element name: summer\
Element name: line

::: tip
You can use d1 and d2 attributes to define diagonal lines.
:::

| Name        | Type     | Allowed values        | Description                                          | Optional |
| ----------- | -------- | --------------------- | ---------------------------------------------------- | -------- |
| d[1, 2]?    | +Float |                       | Position relative to the downhill                    |          |
| z[1, 2]     | Float    |                       | Position relative to the Z-axis                      |          |
| w           | +Float   |                       | Line thickness                                       |          |
| c           | Color    |                       | Line color                                           |          |
| step        | +Float   |                       | Step between lines relative to the Z-axis            | True     |
| count       | +Integer |                       | Lines count                                          | True     |
| refz[1, 2] | String   |                       | A built-in reference, which line is based on         | True     |
| refd[1, 2]? | String   | f, hs, k, p           | Position relative to the built-in distance reference | True     |

## Winter markings

### Spray

Parent element name: winter\
Element name: spray

| Name        | Type     | Allowed values | Description                                          | Optional |
| ----------- | -------- | -------------- | ---------------------------------------------------- | -------- |
| d[1,2]?           | +Float |                | Position relative to the downhill                    |          |
| z[1, 2]     | Float  |                | Position relative to the Z-axis                      |          |
| w           | Float    |                | Spray thickness                                      |          |
| refz[1, 2]  | String   | left, right    | A built-in reference, which spray is based on        | True     |
| c           | Color    |                | Spray color                                          |          |
| fade[1, 2]  | Float    |                | Spray texture fade distance                          | True     |
| step        | +Float   |                | Step between lines relative to the Z-axis            | True     |
| count       | +Integer |                | Lines count                                          | True     |
| refd[1, 2]? | String   | f, hs, k, p    | Position relative to the built-in distance reference | True     |


### Twigs

Parent element name: winter\
Element name: twigs

| Name          | Type     | Allowed values | Description                                          | Optional |
| ------------- | -------- | -------------- | ---------------------------------------------------- | -------- |
| d[1, 2]?             | +Float |                | Position relative to the downhill                    |          |
| z[1, 2]       | Float  |                | Position relative to the Z-axis                      |          |
| refz[1, 2]    | String   | left, right    | A built-in reference, which spray is based on        | True     |
| size          | +Float   |                | Twig size                                            | True     |
| space         | +Float   |                | Step between twigs relative to the Z-axis            | True     |
| step          | +Float   |                | Step between lines relative to the Z-axis            | True     |
| count         | +Integer |                | Lines count                                          | True     |
| forcedetailed | Boolean  |                | Render each twig independently                       |          |
| refd[1, 2]?   | String   | f, hs, k, p    | Position relative to the built-in distance reference | True     |

<script setup>
import VersionBadge from "./components/version-badge.vue"
</script>
