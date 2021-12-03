# Camera <version-badge>1.10.0+</version-badge>

Parent element name: hill\
Element name: camera

::: tip
Judge refers to F7, audience refers to F8, startgate refers to F5 camera and takeoff refers to F6 camera.
:::

| Attribute | Type   | Allowed values                      | Description                                                 |
| --------- | ------ | ----------------------------------- | ----------------------------------------------------------- |
| type      | String | judge, audience, startgate, takeoff | Camera type                                                 |
| refx      | String |                                     | A built-in reference to the X-axis which camera is based on |
| refy      | String |                                     | A built-in reference to the Y-axis which camera is based on |
| refz      | String |                                     | A built-in reference to the Z-axis which camera is based on |
| x         | Float  |                                     | Position relative to the X-axis                             |
| y         | Float  |                                     | Position relative to the Y-axis                             |
| z         | Float  |                                     | Position relative to the Z-axis                             |

<script setup>
import VersionBadge from "./components/version-badge.vue"
</script>