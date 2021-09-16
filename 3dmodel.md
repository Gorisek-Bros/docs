# 3D Model

Parent element name: hill\
Element name: 3dmodel or model

::: warning
You can name element **3dmodel** in DSJ4 versions from 1.7.0, **model** only from 1.8.0.
:::

::: tip
Attributes related to skeletal modeling are usually not needed.
:::

::: tip
refx, refy and refz attributes values should be set to near the center of the object.
:::

::: tip
refbone applies for skeletal modeling.
:::

| Attribute | Type   | Default value | Description                                               |
| --------- | ------ | ------------- | --------------------------------------------------------- |
| id        | String |               | 3D Model Identification                                   |
| refx      | Float  | 0.0           | Default reference of X coordinate for lighting            |
| refy      | Float  | 0.0           | Default reference of Y coordinate for lighting            |
| refz      | Float  | 0.0           | Default reference of Z coordinate for lighting            |
| refbone   | String |               | Identification of the default reference bone for lighting |

## Batch

Parent element name: 3dmodel\
Element name: batch

::: tip
Flexible Vertex Format (FVF) defines which data each vertex will contain when the batch is sent to a rendering pipeline. For further reference go [here](https://docs.microsoft.com/en-us/windows/win32/direct3d9/fixed-function-fvf-codes).

In most cases, it's enough to set fvf attribute value equal to 322.\
```322 = D3DFVF_XYZ + D3DFVF_DIFFUSE + D3DFVF_TEX1 + D3DFVF_TEXCOORDSIZE2(0)```

For statically lit objects you don't define D3DFVF_NORMAL as the vertices will be pre-lit.
:::

::: warning
Currently, the 3dmodel does not support multitexturing.
:::

::: tip
The lower the attribute order value is, the faster batch will render.
:::

::: tip
If you have two surfaces that are overlapping each other, specify the zbias attribute, so this surface will appear "above" the second surface.
:::

::: tip
alphatest attribute works in the following way:

* if the value is set to 0, rendering batch is disabled
* if the value is in the range from 1 to 255, rendering batch is enabled when alpha >= alphatest
* if the value is in the range from 256 to 511, rendering batch is enabled when alpha < alphatest - 256
:::

::: tip
Blending mode works in the following way:

* when the value is set to 0, blend mode is normal
* when the value is set to 1, blend mode is set to addition
* when the value is set to 2, blend mode is set to substraction
:::

::: tip
Set staticlighting attribute value to true for static non-moving objects for the best performance.
:::

::: tip
b1, b2, b3, b4 and refbone attributes apply for skeletal modeling.
:::

| Attribute      | Type     | Default value        | Description                                                                              |
| -------------- | -------- | -------------------- | ---------------------------------------------------------------------------------------- |
| id             | String   |                      | Batch Identification                                                                     |
| fvf            | +Integer | 0                    | Flexible Vertex Format                                                                   |
| texture1       | Texture  |                      | Batch texture                                                                            |
| material       | Material |                      | Batch material                                                                           |
| order          | +Integer | 0                    | Rendering order                                                                          |
| zbias          | Float    | 0                    | Z-index                                                                                  |
| alphatest      | +Integer | 0                    | Toggles rendering based on alpha                                                         |
| blending       | Boolean  | False                | Toggles alpha blending                                                                   |
| culling        | Boolean  | True                 | Toggles face culling (CCW), should be enabled whenever possible for the best performance |
| blendmode      | Integer  | 0                    | Blending mode                                                                            |
| zwrite         | Boolean  | True                 | Toggles writing Z-values to Z-buffer                                                     |
| staticligthing | Boolean  | False                | Toggles precalculate lighting                                                            |
| mipmaplodbias  | Float    | 0.0                  | Select sharper/softer mipmap level                                                       |
| refx           | Float    | 0.0                  | Reference of X-point for lighting                                                        |
| refy           | Float    | 0.0                  | Reference of Y-point for lighting                                                        |
| refz           | Float    | 0.0                  | Reference of Z-point for lighting                                                        |
| b1             | String   |                      | Identification of the first bone                                                         |
| b2             | String   |                      | Identification of the second bone                                                        |
| b3             | String   |                      | Identification of the third bone                                                         |
| b4             | String   |                      | Identification of the fourth bone                                                        |
| refbone        | String   |                      | Reference of bone                                                                        |
| type           | String   | normal, blend, glass | Texture type                                                                             |

## Vertex

Parent element name: batch\
Element name: vertex

::: tip
Leave nx, ny and nz values to 0 to calculate normals automatically.
:::

::: tip
b1, b2, b3, b4 attributes apply for skeletal modeling.
:::

| Attribute | Type   | Default value | Description                          |
| --------- | ------ | ------------- | ------------------------------------ |
| x         | Float  | 0.0           | Position relative to the X-axis      |
| y         | Float  | 0.0           | Position relative to the Y-axis      |
| z         | Float  | 0.0           | Position relative to the Z-axis      |
| diffuse   | Color  |               | Diffuse color for texture            |
| u1        | Float  |               | Texture u coordinate                 |
| v1        | Float  |               | Texture v coordinate                 |
| nx        | Float  | 0.0           | Normal vector relative to the X-axis |
| ny        | Float  | 0.0           | Normal vector relative to the Y-axis |
| nz        | Float  | 0.0           | Normal vector relative to the Z-axis |
| psize     | Float  | 0.0           | Point size when rendering points     |
| b1        | String |               | Identification of the first bone     |
| b2        | String |               | Identification of the second bone    |
| b3        | String |               | Identification of the third bone     |
| b4        | String |               | Identification of the fourth bone    |
| w1        | Float  | 0.0           | Weight of the first bone             |
| w2        | Float  | 0.0           | Weight of the second bone            |
| w3        | Float  | 0.0           | Weight of the third bone             |
| rhw       | Float  | 0.0           | Reciprocal of homegenous w           |

## Face

Parent element name: batch\
Element name: face

| Attribute | Type   | Default value | Description                         |
| --------- | ------ | ------------- | ----------------------------------- |
| v1        | String |               | Identification of the first vertex  |
| v2        | String |               | Identification of the second vertex |
| v3        | String |               | Identification of the third vertex  |

## Seam

Parent element name: 3dmodel\
Element name: seam

::: tip
Add seams between vertices in different batches to smoothen the surface when using automatic vertex normals calculation.
:::

| Attribute | Type   | Default value | Description                         |
| --------- | ------ | ------------- | ----------------------------------- |
| b1        | String |               | Identification of the source batch  |
| v1        | String |               | Identification of the source vertex |
| b2        | String |               | Identification of the target batch  |
| v2        | String |               | Identification of the target vertex |

## 3D Model Instance

Parent element name: hill\
Element name: 3dmodel-instance or model-instance

::: warning
You can name element **3dmodel** in DSJ4 versions from 1.7.0, **model** only from 1.8.0.
:::

| Attribute | Type   | Default value | Description                                          |
| --------- | ------ | ------------- | ---------------------------------------------------- |
| id        | String |               | Identification of the 3d model to instantiate        |
| x         | Float  |               | Position relative to the X-axis                      |
| y         | Float  |               | Position relative to the Y-axis                      |
| z         | Float  |               | Position relative to the Z-axis                      |
| refx      | String |               | A reference to the X-axis, which 3dmodel is based on |
| refy      | String |               | A reference to the Y-axis, which 3dmodel is based on |
| refz      | String |               | A reference to the Z-axis, which 3dmodel is based on |

## Code snippets

```xml
<hill version="DSJ4-1.8.0">
    <!-- Rest of code omitted for clearance -->
   <model id="vdf134-roof">
      <batch id="roof" texture1="Textures\concrete5.png" material="Materials\material1.xml" fvf="322" order="0">
         <vertex id="1" x="-3" y="0" z="-3" u1="-3" v1="-3" diffuse="0xff747681"/>
         <vertex id="2" x="-3" y="0" z="3" u1="-3" v1="3" diffuse="0xff747681"/>
         <vertex id="3" x="0" y="2.5" z="0" u1="0" v1="0" diffuse="0xff747681"/>
         
         <vertex id="4" x="3" y="0" z="3" u1="3" v1="3" diffuse="0xff747681"/>
         <vertex id="5" x="3" y="0" z="-3" u1="3" v1="-3" diffuse="0xff747681"/>
         <vertex id="6" x="0" y="2.5" z="0" u1="0" v1="0" diffuse="0xff747681"/>

         <vertex id="7" x="-3" y="0" z="3" u1="-3" v1="3" diffuse="0xff747681"/>
         <vertex id="8" x="3" y="0" z="3" u1="3" v1="3" diffuse="0xff747681"/>
         <vertex id="9" x="0" y="2.5" z="0" u1="0" v1="0" diffuse="0xff747681"/>

         <vertex id="10" x="3" y="0" z="-3" u1="3" v1="-3" diffuse="0xff747681"/>
         <vertex id="11" x="-3" y="0" z="-3" u1="-3" v1="-3" diffuse="0xff747681"/>
         <vertex id="12" x="0" y="2.5" z="0" u1="0" v1="0" diffuse="0xff747681"/>
         
         <face v1="1" v2="2" v3="3"/>
         <face v1="4" v2="5" v3="6"/>
         <face v1="7" v2="8" v3="9"/>
         <face v1="10" v2="11" v3="12"/>
      </batch>
   </model>
   <model-instance id="vdf134-roof" refx="inrun0" refy="inrun-top" x="3.525" y="2.85" z="1.175"/>
</hill>
```

By Jussi Koskela
