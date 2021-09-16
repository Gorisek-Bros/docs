# Markings <version-badge>1.10.0+</version-badge>

Parent element name: dhill\
Element name: markings


::: tip
Notice the refd[1, 2]? attributes in banner and line elements, its allowed values refer to:
* f - fall line
* hs - hill size
* k - construction point
* p - 
:::

::: warning
You can't use refd[1, 2]? and refz attributes together.
:::

## Summer and winter markings

### Banner

Parent element name: summer, winter\
Element name: banner


| Name        | Type     | Allowed values    | Description                                          | Optional |
| ----------- | -------- | ----------------- | ---------------------------------------------------- | -------- |
| d[1, 2]     | +Integer |                   | Position relative to the downhill                    |          |
| side        | String   | both, left, right | Position relative to the downhill side               |          |
| w           | +Float   |                   | Zone thickness                                       |          |
| margin      | +Float   |                   | Shift in position relative to the downhill side      |          |
| c           | Color    |                   | Zone color                                           |          |
| refd[1, 2]? | String   | f, hs, k, p       | Position relative to the built-in distance reference | True     |


## Summer markings

Parent element name: markings\
Element name: summer

### Line

Parent element name: summer, winter\
Element name: line

::: tip
You can use d1 and d2 attributes to define diagonal lines.
:::

::: tip
Custom lines support also special left and right profiles used within refz[1, 2]?.
:::

| Name        | Type     | Allowed values        | Description                                          | Optional |
| ----------- | -------- | --------------------- | ---------------------------------------------------- | -------- |
| type        | String   | summer, winter, twigs | Type of line appearance                              |          |
| d[1, 2]?    | +Integer |                       | Position relative to the downhill                    |          |
| z[1, 2]     | Float    |                       | Position relative to the Z-axis                      |          |
| w           | +Float   |                       | Line thickness                                       |          |
| c           | Color    |                       | Line color                                           |          |
| step        | +Float   |                       | Step between lines relative to the Z-axis            | True     |
| count       | +Float   |                       | Lines count                                          | True     |
| refz[1, 2]? | String   |                       | A built-in reference, which line is based on         | True     |
| refd[1, 2]? | String   | f, hs, k, p           | Position relative to the built-in distance reference | True     |

## Winter markings

### Spray

Parent element name: winter\
Element name: spray

| Name       | Type     | Allowed values | Description                                   | Optional |
| ---------- | -------- | -------------- | --------------------------------------------- | -------- |
| d          | +Integer |                | Position relative to the downhill             |          |
| z[1, 2]    | Integer  |                | Position relative to the Z-axis               |          |
| w          | Float    |                | Spray thickness                               |          |
| refz[1, 2] | String   | left, right    | A built-in reference, which spray is based on | True     |
| c          | Color    |                | Spray color                                   |          |

### Twigs

Parent element name: twigs\
Element name: twigs

| Name       | Type     | Allowed values | Description                                   | Optional |
| ---------- | -------- | -------------- | --------------------------------------------- | -------- |
| d          | +Integer |                | Position relative to the downhill             |          |
| z[1, 2]    | Integer  |                | Position relative to the Z-axis               |          |
| refz[1, 2] | String   | left, right    | A built-in reference, which spray is based on | True     |

<script setup>
import VersionBadge from "./components/version-badge.vue"
</script>