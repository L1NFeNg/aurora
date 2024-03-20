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
          {
            id: generateId(),
            icon: "icon-dingdan",
            title: "表单",
            route: "./form",
          },
          {
            id: generateId(),
            icon: "icon-dingdan",
            title: "防抖节流测试",
            route: "./deb-thr",
          },
          {
            id: generateId(),
            icon: "icon-dingdan",
            title: "粘性头部测试",
            route: "./sticky-header",
          },
          {
            id: generateId(),
            icon: "icon-dingdan",
            title: "居中测试",
            route: "./center-test",
          },
        ],
      },
    };
  },
};