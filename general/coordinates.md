# Coordinates

To understand how elements can be placed and how profiles work, knowledge of the way DSJ4 coordinates is needed.

::: tip
Inrun start can be used as a reference to the X-axis value:

* the X-axis value is less than 0 behind the beginning of the inrun
* the X-axis value is equal to 0 at the beginning of the inrun
* the X-axis value is larger than 0 the more you go down with inrun and downhill
:::

::: tip
Guardrail z1 and z2 attributes can be used as a reference to the Z-axis value:

* z1 value is the Z-axis value of the left side of the inrun
* z2 value is the Z-axis value of the right side of the inrun

The further you get from the left side of the inrun, the Z-axis value is less.\
The further you get from the right side of the inrun, the Z-axis value is bigger.

Example code:

``` xml
<hill version="DSJ4-1.8.0">
    <!-- Rest of code omitted for clearance -->
    <!-- Assuming you have the following guardrail defined -->
    <guardrail z1="-1.0" z2="1.0" x="10" />

    <!-- 
        This XML outputs wooden pillar on the left side of inrun.
        Why left? lz is equal to -2, so futher the Z-axis value is placed two meters next to guardrails center from the left side.
        rz is equal to -1, so nearer the Z-axis value is placed one meter next to guardrails center from the left side.

        Also note that pillar rz attribute value is equal to guardrail z1 attribute value, so it means that the pillar right side is placed directly next to the left side of the guardrail (so also the left side of inrun).

        Using the same way you can place this pillar on the right side of inrun. Just remember that then the Z-axis value is larger than 0, so lz and rz attribute values have to be adjusted.
    -->
    <pillar refx="inrun" t="Textures\wood1.png" m="Materials\wood.xml" c="0x964B00" x1="0" x2="25" lz="-2" rz="-1" />
</hill>
```

:::

| Axis name | Description                         |
| --------- | ----------------------------------- |
| x         | Axis that goes along hill           |
| y         | Axis that goes above and under hill |
| z         | Axis that goes across hill          |
