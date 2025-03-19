(async () => {
  while (!Spicetify?.React || !Spicetify?.ReactDOM || !Spicetify?.Platform) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const isGlobalNav = !!(
    Spicetify.Platform.version >= "1.2.46" ||
    document.querySelector(".globalNav") ||
    document.querySelector(".Root__globalNav") ||
    document.getElementById("global-nav-bar") ||
    document.querySelector(".main-globalNav-searchSection")
  );

  if (isGlobalNav) {
    document.body.classList.add("global-nav");
  } else {
    document.body.classList.add("control-nav");
  }

  // Add subtler page transitions
  const applyPageTransitions = () => {
    const style = document.createElement("style");
    style.innerHTML = `
      .main-view-container__scroll-node-child {
        animation: fadeIn 0.25s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0.8; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  };

  applyPageTransitions();
})();
