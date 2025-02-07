export const setupCrumbs = async (router: any) => {
  requestAnimationFrame(() => {
    showCrumbs();
  });
  router.events.on("routeChangeComplete", (url: string) => {
    showCrumbs();
  });
};

const showCrumbs = async () => {
  let crumbClassName = "crumb";
  if (!document.querySelector("#crumb-style")) {
    let css = getCrumbCSS(),
      style = document.createElement("style");
    style.id = "crumb-style";
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
  setTimeout(function () {
    let sections = document.querySelectorAll(".template");
    sections.forEach((section) => {
      if (!section.querySelector(".crumb")) {
        let id = section.id;
        let crumb = document.createElement("div");
        crumb.classList.add(crumbClassName);
        crumb.innerHTML = id;
        section.prepend(crumb);
      }
    });
  }, 1000);
};

/**
 * Get CSS for crumb.
 * @returns CSString
 */
function getCrumbCSS() {
  return `
  .template {
    position: relative;
  }

  .template:hover {
    outline: 1px solid #f3a83b;
    outline-offset: -1px;
  }

  .template:hover > .crumb {
    display: block;
  }
  
  .crumb {
    position: absolute;
    top: 0;
    left: 1rem;
    z-index: 100;
    padding: 5px 10px;
    font-size: 12px;
    color: #dd8401;;
    background-color: #faf6f1;
    border-bottom: 1px solid #f3a83b;
    border-left: 1px solid #f3a83b;
    border-right: 1px solid #f3a83b;
    border-radius: 0 0 5px 5px;
    display: none;
  }`;
}
