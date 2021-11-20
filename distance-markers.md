# Distance markers <version-badge>1.10.0+</version-badge>

Parent element name: dhill\
Element name: distance-marker

::: tip
distances attribute uses the following format: &lt;min&gt;-&lt;max&gt;@step. So for example, definition 0-50@5 will generate markers from 0 to 50 meter, with 5 meter step between each. You can also use &lt;min&gt;-&lt;max&gt; pattern, then to skip some distances, use skip-distances attribute with &lt;min&gt;-&lt;max&gt;@step format. 
:::

| Attribute       | Type     | Default value | Description                                                                      |
| --------------- | -------- | ------------- | -------------------------------------------------------------------------------- |
| refx            | String   |               | A reference to X-axis, which markers are based on                                |
| refz            | String   |               | A reference to Z-axis, which axis are based on                                   |
| angle           | Float    | 0.0           | Marker board rotation angle                                                      |
| r[1, 2]?[a, b]? | Float    | 0.1           | Marker board radius                                                              |
| edges           | +Integer | 4             | Marker board edges count                                                         |
| smooth          | Boolean  | False         | Toggles smooth marker board edges                                                |
| rear            | Boolean  | false         | Toggles marker board rear side visibility                                        |
| thickness       | +Float   |               | Marker board thickness                                                           |
| dx              | Float    | 0.0           | Ending points of markers in position relative to X-axis                          |
| dy              | Float    | 0.0           | Ending points of markers in position relative to Y-axis                          |
| dz              | Float    | 0.0           | Ending points of markers in position relative to Z-axis                          |
| ny              | Float    | 0.0           | Ending points of markers in position perpendicular relative to dhill-top profile |
| nz              | Float    | 0.0           | Ending points of markers in position perpendicular relative to refz profile      |
| font-size       | +Float   | 0.1           | Marker label font size                                                           |
| font-color      | Color    | 0x000000      | Marker label font color                                                          |
| front-color     | Color    | 0xFFFFFF      | Marker board front side color                                                    |
| rear-color      | Color    | 0xFFFFFF      | Marker board rear side color                                                     |
| side-color      | Color    | 0xFFFFFF      | Marker board side side color                                                     |
| invert          | Boolean  | False         | Toggles marker board rear side visibility                                        |
| digits          | +Integer | 0             | Numbers digits count to be displayed                                             |
| label           | +String  |               | Label to be displayed                                                            |
| distances       | String   |               | Distances to be generated                                                        |
| skip-distances  | String   |               | Distances to be skipped                                                          |
| pole            | Boolean  | False         | Toggles stick behind marker visibility                                           |
| pole-r[b]?      | Float    | 0.02          | Stick radius                                                                     |
| pole-edges      | +Integer |               | Stick edges count                                                                |
| pole-dheight    | +Float   | 0             | Stick height                                                                     |
| pole-color      | Color    | 0xFFFFFF      | Stick color                                                                      |
| pole-ddepth     | Float    | 0.0           | Stick position relative to the Y-axis                                            |
| pole-smooth     | Float    | 0.0           | Toggles smooth stick sides                                                       |

## Code snippets

```xml
<hill version="DSJ4-1.10.0">
    <!-- Rest of code omitted for clearance -->
    <dhill>
        <!-- ... -->
        <distance-marker refz="dhill-left" refy="dhill-top" distances="80-250@5" r="0.4" edges="20" smooth="true" thickness="0.005" dx="0" dy="0.55" dz="-0.02" nz="0" ny="0.0" font-size="0.5" font-color="0xA00000" rear="false" color="0xFFD700"/>
        <distance-marker refz="dhill-right" refy="dhill-top" distances="80-250@5" r="0.4" edges="20" smooth="true" thickness="0.005" dx="0" dy="0.55" dz="0.02" nz="0" ny="0.0" font-size="0.5" font-color="0xA00000" rear="false" color="0xFFD700"/>
        <distance-marker refz="dhill-left" refy="dhill-top" distances="80-250" skip-distances="80-250@5" r="0.25" edges="20" smooth="true" thickness="0.005" dx="0" dy="0.6" dz="-0.02" nz="0" ny="0.0" font-size="0.5" font-color="0x000000" rear="false" color="0xFFD700" digits="1"/>
        <distance-marker refz="dhill-right" refy="dhill-top" distances="80-250" skip-distances="80-250@5" r="0.25" edges="20" smooth="true" thickness="0.005" dx="0" dy="0.6" dz="0.02" nz="0" ny="0.0" font-size="0.5" font-color="0x000000" rear="false" color="0xFFD700" digits="1"/>
    </dhill>
</hill>
```
![0](/markers.png)

<script setup>
import VersionBadge from "./components/version-badge.vue"
</script>