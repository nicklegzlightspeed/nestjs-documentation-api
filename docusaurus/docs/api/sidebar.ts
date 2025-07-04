import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/user-management-api",
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/users-controller-create",
          label: "Create a new user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/users-controller-find-one",
          label: "Get a user by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "App",
      items: [
        {
          type: "doc",
          id: "api/app-controller-get-hello",
          label: "AppController_getHello",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
