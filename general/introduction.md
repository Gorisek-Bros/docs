# DSJ4 Hills Engine Documentation

Welcome to the official DSJ4 Hills Engine Documentation. This documentation covers almost completely all XML parameters and attributes required to create custom hills.

::: tip
DSJ4 hills are written in XML. This documentation assumes that you have basic knowledge of this language. If not, browse the guide on the internet.
:::

## Getting started

::: tip
This documentation is still subject to change. If you found something not clarified, not understandable either you found a mistake, please follow the Contributing section.
:::

Every documentation section includes:

* parent element name
* element name
* attribute
* type
* description
* allowed values, default value and optional column in some places

::: warning
When writing your XML hill, you have to include attribute type and allowed values. If you won't do that, the game may crash or throw an XML error.
:::

::: tip
The optional column means that such an attribute is not required in your XML code. In this case, this attribute value will default to the Default value column.
:::

Consider the Location section (parent element name is hill and element name is location).

| Attribute   | Type     | Allowed values  | Description                             |
| ----------- | -------- | --------------- | --------------------------------------- |
| lattitude   | Float    | <-90.0; 90.0>   | Lattitude                               |
| longitude   | Float    | <-180.0; 180.0> | Longitude                               |
| orientation | +Integer | <0; 360>        | Terrain rotation in regard to the Earth |
| timezone    | Integer  | <-12; 12>       | Time zone                               |
| altitude    | Float    | (-inf; +inf)    | High above sea level                    |

Basing on the information above, you can write the following XML code.

``` xml
<hill version="DSJ4-1.7.0">
    <!-- Rest of code omitted for clearance -->
    <!-- 
        The parent element is hill, so the location element is placed under the hill attribute
        The element name is location, so it's placed in the first place as an attribute
        Next on there are attributes with their values respecting type and allowed values.
     -->
    <location latitude="49.1976" longitude="20.0712" orientation="245" timezone="2" altitude="1300" />
</hill>
```

::: danger
Version attribute in the hill element equal to **DSJ4-1.5.0** or **DSJ4-1.7.0** is required.
:::

## Understanding types

Next to the attribute name, you could notice the Type column. When writing your hill you have to be specific about attribute values types. The table below presents how to understand types.

| Name     | Allowed values               | Description                                    | Example                                   |
| -------- | ---------------------------- | ---------------------------------------------- | ----------------------------------------- |
| Integer  | (-inf; +inf)                 | Integer                                        | -100, 100                                 |
| +Integer | <0; +inf)                    | Natural numbers                                | 100, 1000                                 |
| Float    | (-inf; +inf)                 | Numbers with digits                            | -1.01, 1.01                               |
| +Float   | <0.0; +inf)                  | Positive numbers with digits                   | 1.01, 1000.01                             |
| -Float   | (-inf; 0.0>                  | Negative numbers with digits                   | -1000.01, -1.01                           |
| String   |                              | Text                                           | Mediamond, Vikersund                      |
| Boolean  | true, false                  | Truthy or falsy                                | true, false                               |
| Texture  | Textures\.*.png              | Texture in .png format                         | Textures\metal.png, Textures\flag-aut.png |
| Material | Materials\.*.xml             | Material in .xml format                        | Materials\wood.xml, Materials\metal.xml   |
| Color    | 0x[000000 - FFFFFF][00 - FF] | Color in hexadecimal format with alpha channel | 0x123456FF                                |

## Additional notes

To avoid text repetition, some attribute names may be shortened. The table below presents how to understand different cases.

| Attribute          | Possible attributes names |
| ------------------ | ------------------------- |
| [r, g, b]          | r, g, b                   |
| [t, m, c]1         | t1, m1, c1                |
| [t, m, c][1, 2]    | t1, t2, m1, m2, c1, c2    |
| c[0, 1, 2]         | c0, c1, c2                |
| [summer, winter]-d | summer-d, winter-d        |
| refx[1, 2]?        | refx or refx1, refx2      |

::: warning
Notice possible attribute names at refx[1, 2]?. They can be refx OR refx1 and refx2. That means you can have either refx or refx1 and refx2 - such attributes when mixed are excluding each other.
:::

## Contributing

Everyone is welcomed to contribute to the documentation! Source code is available [here](https://github.com/Gorisek-Bros/docs). You can send your issues or pull requests. In case you don't have that much programming knowledge, you can contact the documentation maintainer using [Facebook](https://facebook.com/grzegorz.perun/) or [GitHub](https://github.com/Mensix/).
