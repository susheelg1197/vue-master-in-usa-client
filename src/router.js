import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import UniversityInformation from "./views/UniversityInformation.vue";
import UniversityCourses from "./views/UniversityCourses.vue";

import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    // {
    //   path: "/",
    //   name: "components",
    //   components: {
    //     header: AppHeader,
    //     default: Components,
    //     footer: AppFooter
    //   }
    // },
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/university-information/:id/:name",
      name: "university-information",
      components: {
        header: AppHeader,
        default: UniversityInformation,
        footer: AppFooter
      }
    },
    {
      path: "/university-information/:universityId/:universityName/:courseId/:courseName",
      name: "university-course-information",
      components: {
        header: AppHeader,
        default: UniversityCourses,
        footer: AppFooter
      }
    }
    // {
    //   path: "/login",
    //   name: "login",
    //   components: {
    //     header: AppHeader,
    //     default: Login,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   components: {
    //     header: AppHeader,
    //     default: Register,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: {
    //     header: AppHeader,
    //     default: Profile,
    //     footer: AppFooter
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
