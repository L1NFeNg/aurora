import Mock from "mockjs";
import menuApi from "@/api/mocks/menu.ts";


// 设置延时时间
Mock.setup({
  timeout: "300-600",
});

// 请求拦截
Mock.mock("/mock/menu/getMenuList", menuApi.getMenuList());
