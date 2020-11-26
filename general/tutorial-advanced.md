# Advanced tutorial

In this tutorial, we're going to make a semi-advanced hill.

## Requirements

* basic hill making skills

## Starting off

First, copy the code below and paste it into your own created .xml file.

```xml
<hill version="DSJ4-1.7.0">
    <location latitude="49.1976" longitude="20.0712" orientation="245" timezone="2" altitude="1300" />
    <weather pollution="0.0" firstsnow="300" lastsnow="90" maxsnow="1.5" precipitationprobability="0.1" fogprobability="0.1" />
    <inrun>
        <profile e="88.5" es="13.8" t="6.43" gamma="33.5" alpha="10.5" r1="105" s="2.5" b1="2.0" z0="0" l="6.5" f="3.0" />
        <guardrail z1="-1.2" z2="1.2" x="10" />
        <startgate default="8" max="30" step="0.5" wind="2.4" z1="-1.0" z2="1.0" pz1="-0.8" pz2="0.8" t1="Textures\metal.png" m1="Materials\material1.xml" c1="0xaaaaaa" t2="Textures\metal.png" m2="Materials\material1.xml" c2="0x999999" t3="Textures\metal.png" m3="Materials\material1.xml" c3="0x858585" />
        <gatenumbers z="1.4" y="-0.05" c1="0xff000000" c2="0xffffffff" size="0.15" />
        <startbanner z="0" text="TEMPLATE" textsize="0.1" />
        <frame bh="2.0" snow="true" t="Textures\concrete5.png" m="Materials\material1.xml" c0="0x97a594" c1="0xB2ABA0" c="0x504941" c2="0xB2ABA0" />
        <flag x="12.5" z="4.55" hf="1.4" pf="1.5" hp="19.0" rb="0.07" rt="0.05" tf="Textures\flag-pol.png" mf="Materials\flag.xml" tp="Textures\wood1.png" mp="Materials\material1.xml" cp="0xffffff" />
        <twigs lz="1.0" rz="-1.0" />
    </inrun>
    <dhill>
        <profile alpha="6.28" h="62.93" n="107.41" l1="16.04" l2="13.38" a="87.5" beta-p="37.7" beta="34.7" beta-l="32.2" rl="306.15" r2="73.22" b0="9.5" bk="23.37" ba="25" hr="10" nr="60" ar="10" k="120" hs="134" />
        <fence t="Textures\fenceback.png" m="Materials\material1.xml" c="0xffffff" />
        <judgetower d="68.5" q="25.4" h="+4" t1="Textures\wood3.png" m1="Materials\wood.xml" c1="0x78554e" t2="Textures\wood3.png" m2="Materials\wood.xml" c2="0x959183" />
        <lights step="60" size="3" h="30" d="25" r="0.70" g="0.65" b="0.60" attn="0.0005" range="200" t="Textures\rust1.png" m="Materials\metal.xml" c="0x999999" />
        <windflags h="4" l="4.1" d="0.6" t="Textures\rust1.png" m="Materials\metal.xml" c="0x999999" />
        <measurers c1="0x578ad1" c2="0xeeeeee" />
        <label summer-d="75" winter-d="75" text="TEMPLATE" textsize="2.5" />
        <plastic c="0x769391" />
        <lines summer-min="105" summer-max="145" winter-min="105" winter-max="145" />
        <numbers min="50" max="140" />
    </dhill>

    <profile id="inrun-left" side="left" maxstep="1000">
        <start x="-10" y="1.2" refx="inrun" />
        <line x="0" y="1.2" refx="dhill" />
    </profile>

    <profile id="inrun-right" side="right" maxstep="1000">
        <start x="-10" y="-1.2" refx="inrun" />
        <line x="0" y="-1.2" refx="dhill" />
    </profile>

    <terrain>
        <profile in="0.85" a0="5.0" l0="50.0" y0="-15.0" hd="13.5" dd="75.0" sd="30" fd="300" sc="0.07" sm="0.47" rs="1820" c1="0x443920" c2="0x5D603A" tsc="0.008" tsm="0.4" />
        <trees count="10000" minheight="10" maxheight="20" fractalthreshold="0.8" maxaltitude="1600" normalaltitude="1000" seed="142" />
        <blocks count="10" minsaturation="0.0" maxsaturation="0.1" minfloors="1" maxfloors="4" maxaltitude="1300" normalaltitude="1000" fractalthreshold="0.3" seed="258" />
        <houses count="200" minsaturation="0.0" maxsaturation="0.2" minfloors="1" maxfloors="3" maxaltitude="1600" normalaltitude="1000" fractalthreshold="0.5" seed="156" />
        <audience count="500" d="20" x0="0" seed="413" />
    </terrain>

    <railing t="Textures\concrete1.png" y="-1.52" c="0xcbd3d6" m="Materials\material1.xml" h="1.5" refx1="inrun" refx2="dhill" w="4.0" />

    <stairs refx="inrun" s="0.5" lz="-1.2" rz="-1.9" c2="0xe8ebea" m2="Materials\material1.xml" t2="Textures\concrete1.png" c1="0xf2e5c7" m1="Materials\material1.xml" t1="Textures\rubbermat.png" x1="0" x2="20" />

    <railing refx1="inrun" refx2="dhill" type="glass" h="0.4" w="0.05" z1="1.1" z2="1.1" t="Textures\railing-glass.png" m="Materials\window.xml" c="0xffffffff" t3="Textures\railing-glass-cut.png" m3="Materials\window.xml" c3="0xffffffff" t6="Textures\railing-glass-cut.png" m6="Materials\window.xml" c6="0xffffffff" />
    <railing refx1="inrun" refx2="dhill" guard="false" type="glass" h="0.4" w="0.05" z1="-1.1" z2="-1.1" t="Textures\railing-glass.png" m="Materials\window.xml" c="0xffffffff" t3="Textures\railing-glass-cut.png" m3="Materials\window.xml" c3="0xffffffff" t6="Textures\railing-glass-cut.png" m6="Materials\window.xml" c6="0xffffffff" />
</hill>
```

You should have a hill like this.

![11](/tutorial11.png)

## Widening inrun

Let's widen the inrun, so we will have some more space in it.

```xml
<railing t="Textures\concrete1.png" y="-1.02" c="0xcbd3d6" m="Materials\material1.xml" h="1" refx="inrun" w="2.0" z="2.5" x1="0" x2="21"/>
```

We have added the concrete railing starting in the beginning of the inrun and ending in its 21 meters. Let's also add stairs.

```xml
<stairs refx="inrun" lz="3.4" s="0.5" rz="1.2" c2="0xe8ebea" m2="Materials\material1.xml" t2="Textures\concrete1.png" c1="0xf2e5c7" m1="Materials\material1.xml" t1="Textures\rubbermat.png" x1="0" x2="20" />
```

![12](/tutorial12.png)

## Extending our construction

Let's make the left side of the inrun looking nicer.

```xml
<beamgroup refx1="inrun" refx2="dhill" refy="inrun-top" x1="0" x2="-2" z="-1.95" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="0" x2="-2" z="-1.95" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="0" x2="-2" z="-1.95" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
```

What's with this beamgroup? You can find the reference for it in Beams and beamgroups section. Our defined beamgroup covers almost whole inrun (refx1, refx2, x2), it's basis radius is equal to 0.025 meters (r). The step between beams is equal to 2 meters (step). Similarly, let's do the right side of the inrun.

```xml
<beamgroup refx1="inrun" refx2="dhill" refy="inrun-top" x1="22" x2="-2" z="1.95" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="22" x2="-2" z="1.95" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="22" x2="-2" z="1.95" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<beamgroup refx1="inrun" refx2="inrun" refy="inrun-top" x1="0" x2="20.5" z="3.45" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="inrun" refy="inrun-top" w="0.05" x1="0" x2="20.5" z="3.45" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
<railing refx1="inrun" refx2="inrun" refy="inrun-top" w="0.05" x1="0" x2="20.5" z="3.45" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3"/>
```

![13](/tutorial13.png)

## Adjusting downhill terrain

Add the code below to your script but remember to put it before the terrain element. How to understand it?

* in the start of the downhill (x="0"), terrain level is set to -1.3 meters (y="-1.3") terms of default state
* in the 8 meters of the downhill, terrain level is set to -1.8 meters terms of default state
* and so on...

```xml
<profile id="dhill-terrain">
    <start x="0" y="-1.3"/>
    <line x="8" y="-1.8"/>
    <line x="14" y="-2"/>
    <line x="40" y="-1.5"/>
    <line x="50" y="-0.1"/>
    <line x="67" y="-0.1"/>
    <line x="67.1" y="0"/>
</profile>
```

Now let's add a base and support for downhill.

```xml
<pillar refx1="dhill" refx2="dhill" x1="0" x2="45" reflz="dhill-left" refrz="dhill-right" lz="0" rz="0" trefy="dhill-top" brefy="dhill-top" ty="0" by="-0.2" t="Textures\concrete3.png" m="Materials\material1.xml" c="0xfaf7f2" scale="0.8" top="false"/>
<pillar refx1="dhill" count="9" step="5" refx2="dhill" x1="2.55" x2="2.8" lz="4.1" rz="3.8" trefy="dhill-top" brefy="terrain" ty="-0.4" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xfaf7f2" bottom="false" />
<pillar refx1="dhill" count="9" step="5" refx2="dhill" x1="2.55" x2="2.8" lz="-3.8" rz="-4.1" trefy="dhill-top" brefy="terrain" ty="-0.4" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xfaf7f2" bottom="false" />
```

![14](/tutorial14.png)

## Inrun support

We can also use beamgroup to add inrun support.

``` xml
<beamgroup refx="inrun" refx2="dhill" refy="inrun-top" end2="true" rect="true" x1="12.1" x2="-14.1" z="0" step="22" stepper="1" fitstep="true" dy1="-1" dy2="-20" r="1" edges="4" t="Textures\metal.png" m="Materials\material1.xml" c="0xededed" />
<beamgroup refx="inrun" refx2="dhill" refy="inrun-top" end2="true" rect="true" x1="12.7" x2="-13.5" z="0" step="22" stepper="1" fitstep="true" dy1="-1" dy2="-20" r="0.7" edges="4" t="Textures\metal.png" m="Materials\material1.xml" c="0xb5b5b5" />
```

![15](/tutorial15.png)

## Inrun lights

To add lights on the inrun, you need to define the refz property set to inrun-right or inrun-left.

``` xml
<lights refx="inrun" refz="inrun-right" x1="3.7" x2="84.2" step="1.08" l="1.0" h="0.6" d="-0.7" r="0.2" g="0.18" b="0.16" attn="0.5" range="35.0" />
<lights refx="inrun" refz="inrun-left" x1="3.7" x2="20.2" step="1.08" l="1.0" h="0.6" d="-2.22 " r="0.2" g="0.18" b="0.16" attn="0.1" range="45.0" />
```

![16](/tutorial16.png)

## Simple building

Now we are going to add a simple building like in Einsiedeln hill.

``` xml
<pillar refx="inrun" x1="-4" x2="0" lz="2" rz="-2" trefy="inrun-top" brefy="terrain" ty="5" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" bottom="false" />
<pillar refx="inrun" x1="-3" x2="0.1" lz="2.1" rz="-2.1" trefy="inrun-top" brefy="inrun-top" ty="4" by="1" t="Textures\metal.png" m="Materials\material1.xml" c="0x737373" />
```

![17](/tutorial17.png)

## Final code

``` xml
<hill version="DSJ4-1.7.0">
    <location latitude="49.1976" longitude="20.0712" orientation="245" timezone="2" altitude="1300" />
    <weather pollution="0.0" firstsnow="300" lastsnow="90" maxsnow="1.5" precipitationprobability="0.1" fogprobability="0.1" />
    <inrun>
        <profile e="88.5" es="13.8" t="6.43" gamma="33.5" alpha="10.5" r1="105" s="2.5" b1="2.0" z0="0" l="6.5" f="3.0" />
        <guardrail z1="-1.2" z2="1.2" x="10" />
        <startgate default="8" max="30" step="0.5" wind="2.4" z1="-1.0" z2="1.0" pz1="-0.8" pz2="0.8" t1="Textures\metal.png" m1="Materials\material1.xml" c1="0xaaaaaa" t2="Textures\metal.png" m2="Materials\material1.xml" c2="0x999999" t3="Textures\metal.png" m3="Materials\material1.xml" c3="0x858585" />
        <gatenumbers z="1.4" y="-0.05" c1="0xff000000" c2="0xffffffff" size="0.15" />
        <startbanner z="0" text="TEMPLATE" textsize="0.1" />
        <frame bh="2.0" snow="true" t="Textures\concrete5.png" m="Materials\material1.xml" c0="0x97a594" c1="0xB2ABA0" c="0x504941" c2="0xB2ABA0" />
        <flag x="12.5" z="4.55" hf="1.4" pf="1.5" hp="19.0" rb="0.07" rt="0.05" tf="Textures\flag-pol.png" mf="Materials\flag.xml" tp="Textures\wood1.png" mp="Materials\material1.xml" cp="0xffffff" />
        <twigs lz="1.0" rz="-1.0" />
    </inrun>
    <dhill>
        <profile alpha="6.28" h="62.93" n="107.41" l1="16.04" l2="13.38" a="87.5" beta-p="37.7" beta="34.7" beta-l="32.2" rl="306.15" r2="73.22" b0="9.5" bk="23.37" ba="25" hr="10" nr="60" ar="10" k="120" hs="134" />
        <fence t="Textures\fenceback.png" m="Materials\material1.xml" c="0xffffff" />
        <judgetower d="68.5" q="25.4" h="+4" t1="Textures\wood3.png" m1="Materials\wood.xml" c1="0x78554e" t2="Textures\wood3.png" m2="Materials\wood.xml" c2="0x959183" />
        <lights step="60" size="3" h="30" d="25" r="0.70" g="0.65" b="0.60" attn="0.0005" range="200" t="Textures\rust1.png" m="Materials\metal.xml" c="0x999999" />
        <windflags h="4" l="4.1" d="0.6" t="Textures\rust1.png" m="Materials\metal.xml" c="0x999999" />
        <measurers c1="0x578ad1" c2="0xeeeeee" />
        <label summer-d="75" winter-d="75" text="TEMPLATE" textsize="2.5" />
        <plastic c="0x769391" />
        <lines summer-min="105" summer-max="145" winter-min="105" winter-max="145" />
        <numbers min="50" max="140" />
    </dhill>

    <profile id="inrun-left" side="left" maxstep="1000">
        <start x="-10" y="1.2" refx="inrun" />
        <line x="0" y="1.2" refx="dhill" />
    </profile>

    <profile id="inrun-right" side="right" maxstep="1000">
        <start x="-10" y="-1.2" refx="inrun" />
        <line x="0" y="-1.2" refx="dhill" />
    </profile>

    <profile id="dhill-terrain">
        <start x="0" y="-1.3" />
        <line x="8" y="-1.8" />
        <line x="14" y="-2" />
        <line x="40" y="-1.5" />
        <line x="50" y="-0.1" />
        <line x="67" y="-0.1" />
        <line x="67.1" y="0" />
    </profile>

    <terrain>
        <profile in="0.85" a0="5.0" l0="50.0" y0="-15.0" hd="13.5" dd="75.0" sd="30" fd="300" sc="0.07" sm="0.47" rs="1820" c1="0x443920" c2="0x5D603A" tsc="0.008" tsm="0.4" />
        <trees count="10000" minheight="10" maxheight="20" fractalthreshold="0.8" maxaltitude="1600" normalaltitude="1000" seed="142" />
        <blocks count="10" minsaturation="0.0" maxsaturation="0.1" minfloors="1" maxfloors="4" maxaltitude="1300" normalaltitude="1000" fractalthreshold="0.3" seed="258" />
        <houses count="200" minsaturation="0.0" maxsaturation="0.2" minfloors="1" maxfloors="3" maxaltitude="1600" normalaltitude="1000" fractalthreshold="0.5" seed="156" />
        <audience count="500" d="20" x0="0" seed="413" />
    </terrain>

    <railing t="Textures\concrete1.png" y="-1.52" c="0xcbd3d6" m="Materials\material1.xml" h="1.5" refx1="inrun" refx2="dhill" w="4.0" />

    <stairs refx="inrun" lz="-1.2" rz="-1.9" c2="0xe8ebea" m2="Materials\material1.xml" t2="Textures\concrete1.png" c1="0xf2e5c7" m1="Materials\material1.xml" t1="Textures\rubbermat.png" s="0.5" x1="0" x2="20" />

    <railing refx1="inrun" refx2="dhill" type="glass" h="0.4" w="0.05" z1="1.1" z2="1.1" t="Textures\railing-glass.png" m="Materials\window.xml" c="0xffffffff" t3="Textures\railing-glass-cut.png" m3="Materials\window.xml" c3="0xffffffff" t6="Textures\railing-glass-cut.png" m6="Materials\window.xml" c6="0xffffffff" />
    <railing refx1="inrun" refx2="dhill" guard="false" type="glass" h="0.4" w="0.05" z1="-1.1" z2="-1.1" t="Textures\railing-glass.png" m="Materials\window.xml" c="0xffffffff" t3="Textures\railing-glass-cut.png" m3="Materials\window.xml" c3="0xffffffff" t6="Textures\railing-glass-cut.png" m6="Materials\window.xml" c6="0xffffffff" />

    <stairs refx="inrun" lz="3.4" rz="1.2" c2="0xe8ebea" m2="Materials\material1.xml" t2="Textures\concrete1.png" c1="0xf2e5c7" m1="Materials\material1.xml" t1="Textures\rubbermat.png" s="0.5" x1="0" x2="20" />

    <railing t="Textures\concrete1.png" y="-1.08" c="0xcbd3d6" m="Materials\material1.xml" h="1" refx="inrun" w="2.0" z="2.5" x2="21" />

    <beamgroup refx1="inrun" refx2="dhill" refy="inrun-top" x1="0" x2="-2" z="-1.95" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="0" x2="-2" z="-1.95" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="0" x2="-2" z="-1.95" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xde3e3e3" />

    <beamgroup refx1="inrun" refx2="dhill" refy="inrun-top" x1="22" x2="-2" z="1.95" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="22" x2="-2" z="1.95" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="dhill" refy="inrun-top" w="0.05" x1="22" x2="-2" z="1.95" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <beamgroup refx1="inrun" refx2="inrun" refy="inrun-top" x1="0" x2="20.5" z="3.45" step="2" stepper="1" dy1="-0.1" dy2="0.6" r="0.025" edges="8" smooth="true" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="inrun" refy="inrun-top" w="0.05" x1="0" x2="20.5" z="3.45" y="0.6" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <railing refx1="inrun" refx2="inrun" refy="inrun-top" w="0.05" x1="0" x2="20.5" z="3.45" y="0.3" h="0.05" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" />

    <pillar refx1="dhill" refx2="dhill" x1="0" x2="45" reflz="dhill-left" refrz="dhill-right" lz="0" rz="0" trefy="dhill-top" brefy="dhill-top" ty="0" by="-0.2" t="Textures\concrete3.png" m="Materials\material1.xml" c="0xfaf7f2" scale="0.8" top="false" />

    <pillar refx1="dhill" count="9" step="5" refx2="dhill" x1="2.55" x2="2.8" lz="4.1" rz="3.8" trefy="dhill-top" brefy="terrain" ty="-0.4" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xfaf7f2" bottom="false" />
    <pillar refx1="dhill" count="9" step="5" refx2="dhill" x1="2.55" x2="2.8" lz="-3.8" rz="-4.1" trefy="dhill-top" brefy="terrain" ty="-0.4" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xfaf7f2" bottom="false" />

    <beamgroup refx="inrun" refx2="dhill" refy="inrun-top" end2="true" rect="true" x1="12.1" x2="-14.1" z="0" step="22" stepper="1" fitstep="true" dy1="-1" dy2="-20" r="1" edges="4" t="Textures\metal.png" m="Materials\material1.xml" c="0xededed" />

    <beamgroup refx="inrun" refx2="dhill" refy="inrun-top" end2="true" rect="true" x1="12.7" x2="-13.5" z="0" step="22" stepper="1" fitstep="true" dy1="-1" dy2="-20" r="0.7" edges="4" t="Textures\metal.png" m="Materials\material1.xml" c="0xb5b5b5" />

    <lights refx="inrun" refz="inrun-right" x1="3.7" x2="84.2" step="1.08" l="1.0" h="0.6" d="-0.7" r="0.2" g="0.18" b="0.16" attn="0.5" range="35.0" />

    <lights refx="inrun" refz="inrun-left" x1="3.7" x2="20.2" step="1.08" l="1.0" h="0.6" d="-2.22 " r="0.2" g="0.18" b="0.16" attn="0.1" range="45.0" />

    <pillar refx="inrun" x1="-4" x2="0" lz="2" rz="-2" trefy="inrun-top" brefy="terrain" ty="5" by="0" t="Textures\metal.png" m="Materials\material1.xml" c="0xe3e3e3" bottom="false" />

    <pillar refx="inrun" x1="-3" x2="0.1" lz="2.1" rz="-2.1" trefy="inrun-top" brefy="inrun-top" ty="4" by="1" t="Textures\metal.png" m="Materials\material1.xml" c="0x737373" />
</hill>
```

Made by iSeb.
