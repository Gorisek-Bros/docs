module.exports = {
  title: "DSJ4 Hills Engine Documentation",
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    ["meta", { name: "robots", content: "noindex" }],
    [
      "meta",
      {
        name: "description",
        content: "The official DSJ4 Hills Engine documentation"
      }
    ],
    [
      "meta",
      { property: "og:title", content: "DSJ4 Hills Engine Documentation" }
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "The official DSJ4 Hills Engine Documentation, brought by Gorišek Bros."
      }
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "/og_img.png"
      }
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-EWHMDZ873D"
      }
    ],
    [
      "script",
      {
        src: "/gtag.js"
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        text: "General",
        children: [
          { link: "/general/introduction", text: "Introduction" },
          { link: "/general/faq", text: "FAQ" },
          { link: "/general/basics", text: "Basics" },
          {
            link: "/general/textures-and-materials",
            text: "Textures and materials"
          },
          { link: "/general/tutorial", text: "Tutorial" },
          { link: "/general/tutorial-advanced", text: "Advanced tutorial" },
          { link: "/general/missing", text: "Missing attributes" }
        ]
      },
      {
        text: "Atmosphere",
        children: [
          { link: "/atmosphere/time", text: "Time" },
          {
            link: "/atmosphere/location",
            text: "Location"
          },
          {
            link: "/atmosphere/weather",
            text: "Weather"
          }
        ]
      },
      {
        text: "Inrun",
        children: [
          {
            link: "/inrun/track",
            text: "Track"
          },
          {
            link: "/inrun/profile",
            text: "Profile"
          },
          {
            link: "/inrun/guardrail",
            text: "Guardrail"
          },
          {
            link: "/inrun/frame",
            text: "Frame"
          },
          {
            link: "/inrun/twigs",
            text: "Twigs"
          },
          {
            link: "/inrun/gates",
            text: "Gates"
          },
          {
            link: "/inrun/flag",
            text: "Flag"
          }
        ]
      },
      {
        text: "Hill",
        children: [
          {
            link: "/hill/profile",
            text: "Profile"
          },
          {
            link: "/hill/fence",
            text: "Fence"
          },
          {
            link: "/hill/constructions",
            text: "Constructions"
          }
        ]
      },
      {
        text: "Terrain",
        children: [
          {
            link: "/terrain",
            text: "Terrain"
          },
          {
            link: "/terrain/trees",
            text: "Trees"
          },
          {
            link: "/terrain/blocks",
            text: "Blocks"
          },
          {
            link: "/terrain/audience",
            text: "Audience"
          }
        ]
      },
      {
        text: "Hill",
        link: "/hill"
      },
      {
        text: "Refx",
        link: "/refx"
      },
      {
        text: "Profile",
        link: "/profile"
      },
      {
        text: "Stairs",
        link: "/stairs"
      },
      {
        text: "Railings",
        link: "/railings"
      },
      {
        text: "Pillars",
        link: "/pillars"
      },
      {
        text: "Beams and beamgroups",
        link: "/beams"
      },
      {
        text: "3D Model",
        link: "/3dmodel"
      }
    ]
  }
};
