/**
 * Display crumb (label with template name) when template is hovered over.
 */
export const setupCrumbs = async (router) => {
  let crumbClassName = "crumb";
  let css = getCrumbCSS(),
    head = document.head,
    style = document.createElement("style");
  head.appendChild(style);
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  setTimeout(() => {
    let crumbs = document.querySelectorAll(".crumb");
    if (crumbs.length) return;
    let sections = document.querySelectorAll(".template");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.classList.contains(crumbClassName)) {
        continue;
      }
      let id = section.id;
      var crumb = document.createElement("div");
      crumb.classList.add(crumbClassName);
      crumb.innerHTML = id;
      section.prepend(crumb);
    }
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
