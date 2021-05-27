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
        }
      ]
    }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue"),
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
        }
      ]
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
    meta: {
      title: "Creative Reyne - Projects",
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
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
        }
      ]
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
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
