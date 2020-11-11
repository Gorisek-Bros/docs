# Refx

Element name: refx\
Parent element name: hill

::: tip
Use this element if you want to have a "ruler" in terms of defined refx attribute.
:::

| Name  | Type   | Allowed values | Description                                               |
| ----- | ------ | -------------- | --------------------------------------------------------- |
| id    | String |                | A refx name                                               |
| value | Float  |                | The starting point in position relative to the X-axis |
| refx  | String | inrun, dhill   | A reference to the X-axis, which refx is based on         |

## Code snippet

``` xml
<hill version="DSJ4-1.5.0">
    <!-- Rest of code omitted for clearance -->

    <!-- If you declare the following refx element -->
    <refx id="example" value="10" refx="inrun" />

    <!-- Then using its id as refx will cause that x1 will be equal to 10 and x2 will be equal to 20, as x1 and x2 attributes value is based on refx value attribute added to x1 and x2  -->
    <stairs refx="example" lz="-1" rz="-2" c2="0xe8ebea" m2="Materials\material1.xml" t2="Textures\concrete1.png" c1="0x123456" m1="Materials\material1.xml" t1="Textures\rubbermat.png" x1="0" x2="20" />
</hill>
```
