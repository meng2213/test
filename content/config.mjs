
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
  // title will be displayed on the top of your site
  title: "My Awesome Blog",
  // adding a description helps with SEO
  description: "This is my awesome blog built with Flowershow",
  // author of site displayed on the bottom of your site
  author: "John",
  // logo image
  authorLogo: "/images/logo.svg",
  // url to author website
  domain: "https://john.app/",
  // links to the pages you want to link to in the navbar
  navLinks: [{ href: "/about", name: "About" }],
  // 添加 showSidebar 配置
  showSidebar: true,
};

export default config;
