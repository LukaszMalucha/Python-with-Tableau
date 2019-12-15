import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import LifeExpectancy from "./views/LifeExpectancy.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/life-expectancy",
      name: "life-expectancy",
      component: LifeExpectancy
    },
    {
      path: "*",
      name: "page-not-found",
      component: NotFound,
    },
  ]
})
