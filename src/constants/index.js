export const home = {
  title: "Graphic Design",
  subtitle: "For content creators and gaming communities",
  creatorsLogo: require("@/assets/images/creators/creators-logo.png"),
  standardLogo: require("@/assets/images/standard/standard-logo.png")
};

export const brand = {
  title: "why choose creative reyne?",
  columns: [
    {
      imageCreators: require("@/assets/images/creators/creators-logo.png"),
      imageStandard: require("@/assets/images/standard/standard-print-design1.png"),
      title: "Experience",
      description:
        "With over 10 years of experience in graphic design and printing, you can rest knowing I will find a solution that works for you and your platform"
    },
    {
      imageCreators: require("@/assets/images/creators/creators-emotes.png"),
      imageStandard: require("@/assets/images/standard/standard-shirt.png"),
      title: "Tailored Process",
      description:
        "It all begins with an idea. Maybe you want to launch a new stream. Maybe you want to turn your youtube channel into something more. Or maybe you have a podcast to share with the world. Whatever it is, I will make sure you don’t go unnoticed"
    },
    {
      imageCreators: require("@/assets/images/creators/creators-websites1.png"),
      imageStandard: require("@/assets/images/standard/standard-print-design2.png"),
      title: "Industry Insider",
      description:
        "10 years of experience doesn’t just mean I know what to do, but also who to talk to. From the best local printers to the coolest product vendors, we know them all and can work with them to make sure your project is the best it can be."
    }
  ]
};

export const portfolio = {
  title: "make it stand out",
  creatorsColumns: [
    {
      image: require("@/assets/images/creators/creators-logo-design2.png"),
      title: "Logo Design",
      description:
        "Your logo is the face of your brand. With a wide range of logo designs under my belt, I’m ready to bring your project to life with a tailored design based on your taste and my market research."
    },
    {
      image: require("@/assets/images/creators/creators-emotes.png"),
      title: "Emotes & Badges",
      description:
        "Whether you’re a streamer looking for cool emotes and badges for twitch, or a gaming community looking to spice up your discord, I’ve got you covered."
    },
    {
      image: require("@/assets/images/creators/creators-brand-packages.png"),
      title: "Brand Packages",
      description:
        "Branding is a little more than just a logo. It’s a color pallet, a recognizable theme, and most importantly it’s a uniform look across all your online platforms. Take pride in the project you’re starting with a branding package."
    },
    {
      image: require("@/assets/images/creators/creators-websites2.png"),
      title: "Website Design",
      description:
        "Website design can be expensive and extremely time consuming, even if you know what you’re doing. I can design and implement your new website with the some of the most competitive prices on the market."
    }
  ],
  standardColumns: [
    {
      image: require("@/assets/images/standard/standard-logo-design2.png"),
      title: "Logo Design",
      description:
        "Logo design is the face of your business. With a wide range of logo designs under my belt, I’m ready to bring your project to life with a tailored design based on your taste and my market research."
    },
    {
      image: require("@/assets/images/standard/standard-print-design3.png"),
      title: "Print Design",
      description:
        "Print is the core of most storefront companies. With experience not only in design, but also managing and working in print production, I can make sure that all your designs fit the medium."
    },
    {
      image: require("@/assets/images/standard/standard-brand-package2.png"),
      title: "Brand Packages",
      description:
        "Branding is a little more than just a logo. It’s a color pallet, a recognizable theme, and most importantly it’s a uniform look across all your ads and product lines. Take pride in the project you’re starting."
    },
    {
      image: require("@/assets/images/standard/standard-websites2.png"),
      title: "Website Design",
      description:
        "Website design can be expensive and extremely time consuming, even if you know what you’re doing. I can design and implement your new website with some of the most competitive prices on the market."
    }
  ]
};

export const projects = {
  creatorsImages: [
    require("@/assets/images/creators/creators-logo-design1.png"),
    require("@/assets/images/creators/creators-logo-design2.png"),
    require("@/assets/images/creators/creators-logo-design3.png"),
    require("@/assets/images/creators/creators-websites1.png"),
    require("@/assets/images/creators/creators-websites2.png"),
    require("@/assets/images/creators/creators-websites3.png"),
    require("@/assets/images/creators/creators-badges1.png"),
    require("@/assets/images/creators/creators-badges2.png"),
    require("@/assets/images/creators/creators-emotes.png"),
    require("@/assets/images/creators/creators-brand-packages.png")
  ],
  standardImages: [
    require("@/assets/images/standard/standard-projects1.png"),
    require("@/assets/images/standard/standard-projects2.png"),
    require("@/assets/images/standard/standard-projects3.png"),
    require("@/assets/images/standard/standard-projects4.png"),
    require("@/assets/images/standard/standard-projects5.png"),
    require("@/assets/images/standard/standard-projects6.png"),
    require("@/assets/images/standard/standard-projects7.png")
  ]
};

export const pricing = {
  title: "pricing",
  creatorsColumns: [
    {
      image: require("@/assets/images/creators/creators-emotes.png"),
      title: "Emotes/Badges",
      items: [
        {
          item: "Twitch Badges",
          prices: [
            "$100 (color-changing badges x6)",
            "$240 (evolving badges x6)"
          ]
        },
        {
          item: "Twitch Emotes",
          prices: ["$30 each"]
        },
        {
          item: "Discord Emotes",
          prices: ["$30 each", "$20 each (set of 16)"]
        }
      ]
    },
    {
      image: require("@/assets/images/creators/creators-socials.png"),
      title: "Social Package",
      items: [
        {
          item: "Profile Picture",
          prices: ["$20 (1round + 1 square)"]
        },
        {
          item: "Cover Photo",
          prices: ["$100 (single site)", "$25 each (extra sites)"]
        },
        {
          item: "Twitch Panels",
          prices: ["$20 each"]
        }
      ]
    },
    {
      image: require("@/assets/images/creators/creators-websites1.png"),
      title: "Websites",
      items: [
        {
          item: "Landing page",
          prices: ["$600"]
        },
        {
          item: "Additional Pages",
          prices: ["$200 each"]
        },
        {
          item: "Add Merch Store",
          prices: ["$600"]
        }
      ]
    },
    {
      image: require("@/assets/images/creators/creators-logo.png"),
      title: "Logo Design",
      items: [
        {
          item: "Starting at",
          prices: ["$500"],
          note: "(Prices vary depending on project)"
        }
      ]
    }
  ],
  standardColumns: [
    {
      image: require("@/assets/images/standard/standard-print-design1.png"),
      title: "Print Design",
      items: [
        {
          item: "Business Cards",
          prices: ["$80 (double sided design)"]
        },
        {
          item: "Poster Design",
          prices: ["$150"]
        },
        {
          item: "Flyer Design",
          prices: ["$100"]
        },
        {
          item: "Menu Design",
          prices: ["$100/page single sided"]
        },
        {
          item: "Trifold Brochure",
          prices: ["$200"]
        },
        {
          item: "Other Inquiries",
          prices: ["Contact me =)"]
        }
      ]
    },
    {
      image: require("@/assets/images/standard/standard-brand-package.png"),
      title: "Social Package",
      items: [
        {
          item: "Full Package",
          prices: ["$1250"],
          note: "Includes:",
          list: [
            "Logo Design",
            "Color Pallet",
            "Business Card Design",
            "Letterhead Design",
            "Flyer Design",
            "Brochure Design",
            "Pop-up Banner Design",
            "Social Media Cover Photo (x3)",
            "Social Media Profile Picture (x4)",
            "Files for each design: .AI, .EPS, .PDF"
          ]
        }
      ]
    },
    {
      image: require("@/assets/images/standard/standard-websites.png"),
      title: "Websites",
      items: [
        {
          item: "Landing page",
          prices: ["$600"]
        },
        {
          item: "Additional Pages",
          prices: ["$200 each"]
        },
        {
          item: "Add Online Store",
          prices: ["Starting at $600"]
        }
      ]
    },
    {
      image: require("@/assets/images/standard/standard-logo-design.png"),
      title: "Logo Design",
      items: [
        {
          item: "Starting at",
          prices: ["$500"],
          note: "(Prices vary depending on project)"
        }
      ]
    }
  ]
};

export const contact = {
  title: "email me",
  subtitle: "direct message me",
  creatorsDescription:
    "is a Graphic Designer currently residing in Saskatchewan, Canada. At 15 years old he realized he wanted to use his creative ability to bring people’s passions to life. Almost 15 years later, with experience in nearly every facet of the graphic design industry, Alexander turned his attention to creating beautiful graphics for online communities and streamers looking to stand out in their space.",
  standardDescription:
    "is a Graphic Designer currently residing in Saskatchewan, Canada. At 15 years old he realized he wanted to use his creative ability to bring people’s passions to life. Almost 15 years later, with experience in nearly every facet of the graphic design industry, Alexander turned his attention to freelance design. Looking to help local and international businesses, Alex works from home on projects from all over the world.",
  image: require("@/assets/images/alexander-reyne.png")
};

export const nav = {
  title: "Creative Reyne",
  creatorsTitle: "Content Creators",
  creatorsLogo: require("@/assets/images/creators/creators-logo-thumb.png"),
  standardTitle: "Standard Business",
  standardLogo: require("@/assets/images/standard/standard-logo-thumb.png")
};
