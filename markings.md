# Markings <version-badge>1.10.0+</version-badge>

Parent element name: dhill\
Element name: markings

## Summer and winter markings

Parent element name: markings\
Element name: summer, winter

### Lines

Parent element name: summer, winter\
Element name: line

::: tip
You can use d1 and d2 attributes to define diagonal lines and twigs.
:::

| Name       | Type     | Allowed values        | Description                                  | Optional |
| ---------- | -------- | --------------------- | -------------------------------------------- | -------- |
| type       | String   | summer, winter, twigs | Type of line appearance                      |          |
| d[1, 2]?   | +Integer |                       | Position relative to the downhill            |          |
| z[1, 2]    | Integer  |                       | Position relative to the Z-axis              |          |
| w          | Float    |                       | Line thickness                               |          |
| c          | Color    |                       | Line color                                   |          |
| refz[1, 2] | String   | left, right           | A built-in reference, which line is based on | True     |

### Zone

Parent element name: summer, winter\
Element name: zone

| Name    | Type     | Allowed values | Description                                     |
| ------- | -------- | -------------- | ----------------------------------------------- |
| d[1, 2] | +Integer |                | Position relative to the downhill               |
| side    | String   | left, right    | Position relative to the downhill side          |
| w       | +Float   |                | Zone thickness                                  |
| margin  | +Float   |                | Shift in position relative to the downhill side |
| c       | Color    |                | Zone color                                      |

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