import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/Landing.vue"),
    meta: {
      title: "Creative Reyne",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca"
        }
      ]
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "Creative Reyne",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/home"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/home"
        }
      ]
    }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
    meta: {
      title: "Creative Reyne - Portfolio",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/portfolio"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/portfolio"
        }
      ]
    }
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/Pricing.vue"),
    meta: {
      title: "Creative Reyne - Pricing",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/pricing"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/pricing"
        }
      ]
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      title: "Creative Reyne - Contact",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/contact"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/contact"
        }
      ]
    }
  },
  {
    path: "/build-your-brand",
    name: "Build Your Brand",
    component: () =>
      import(/* webpackChunkName: "build" */ "../views/Brand.vue"),
    meta: {
      title: "Creative Reyne - Build Your Brand",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/build-your-brand"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/build-your-brand"
        }
      ]
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "FourOhFour",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/FourOhFour.vue"),
    meta: {
      notFound: true,
      title: "Creative Reyne - 404",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        },
        {
          property: "og:url",
          content: "https://creativereyne.ca/404"
        },
        {
          property: "twitter:description",
          content: "The about page of our example app."
        },
        {
          property: "twitter:url",
          content: "https://creativereyne.ca/404"
        }
      ]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Creative Reyne";

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode.removeChild(el));

  if (!to.meta.metaTags) return next();

  to.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
