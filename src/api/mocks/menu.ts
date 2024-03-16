import { generateId } from "@/utils/generateId.ts";

export default {
  getMenuList: () => {
    return {
      code: 200,
      data: {
        menus: [
          {
            id: generateId(),
            icon: "icon-shouye",
            title: "首页",
            route: "./home",
          },
          {
            id: generateId(),
            icon: "icon-shandian",
            title: "欢迎页",
            route: "./welcome",
          },
          {
            id: generateId(),
            icon: "icon-dingdan",
            title: "TodoList",
            route: "./todolist",
          },
        ],
      },
    };
  },
};