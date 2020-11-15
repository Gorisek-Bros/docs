# Example

The XML code below presents minimal K120/HS134 hill without any hill constructions.

```xml
<hill version="DSJ4-1.5.0">
    <location latitude="49.1976" longitude="20.0712" orientation="245" timezone="2" altitude="1300" />
    <weather pollution="0.0" firstsnow="300" lastsnow="90" maxsnow="1.5" precipitationprobability="0.1" fogprobability="0.1" />
    <inrun>
        <profile e="91.5" es="15" t="6.43" gamma="33.5" alpha="10.5" r1="105" s="2.5" b1="2.0" z0="0" l="6.5" f="3.0" />
        <guardrail z1="-1.0" z2="1.0" x="10" />
        <startgate default="8" max="30" step="0.35" wind="2.4" z1="-1.0" z2="1.0" pz1="-0.8" pz2="0.8" t1="Textures\metal.png" m1="Materials\material1.xml" c1="0xaaaaaa" t2="Textures\metal.png" m2="Materials\material1.xml" c2="0x999999" t3="Textures\metal.png" m3="Materials\material1.xml" c3="0x858585" />
        <gatenumbers z="2.0" y="-0.12" c1="0xff000000" c2="0xffffffff" size="0.15" />
        <startbanner z="0" text="TEMPLATE" textsize="0.1" />
        <frame bh="2.0" pt="false" snow="true" t="Textures\concrete5.png" m="Materials\material1.xml" c0="0x97a594" c1="0xB2ABA0" c="0x504941" c2="0xB2ABA0" />
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
        <start x="-10" y="1.0" refx="inrun" />
        <line x="0" y="1.0" refx="dhill" />
    </profile>

    <profile id="inrun-right" side="right" maxstep="1000">
        <start x="-10" y="-1.0" refx="inrun" />
        <line x="0" y="-1.0" refx="dhill" />
    </profile>

    <terrain>
        <profile in="0.7" a0="5.0" l0="50.0" y0="-15.0" hd="13.5" dd="75.0" sd="30" fd="300" sc="0.07" sm="0.47" rs="1820" c1="0x443920" c2="0x5D603A" tsc="0.008" tsm="0.4" />
        <trees count="10000" minheight="10" maxheight="20" fractalthreshold="0.8" maxaltitude="1600" normalaltitude="1000" seed="142" />
        <blocks count="10" minsaturation="0.0" maxsaturation="0.1" minfloors="1" maxfloors="4" maxaltitude="1300" normalaltitude="1000" fractalthreshold="0.3" seed="258" />
        <houses count="200" minsaturation="0.0" maxsaturation="0.2" minfloors="1" maxfloors="3" maxaltitude="1600" normalaltitude="1000" fractalthreshold="0.5" seed="156" />
        <audience count="500" d="20" x0="0" seed="413" />
    </terrain>
</hill>
```
