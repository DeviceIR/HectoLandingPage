/**
 * Utility to load vendor scripts from assets folder
 * Uses Vite's asset handling to load scripts dynamically
 */

/**
 * Loads vendor scripts dynamically from assets folder
 * These scripts need to be loaded as global scripts for libraries like Isotope, GLightbox, etc.
 */
export const loadVendorScripts = () => {
  return new Promise((resolve) => {
    // Use dynamic imports to get script URLs
    // Vite will handle these and provide the correct URLs
    const scriptPromises = [
      import("../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js?url")
        .then(m => m.default)
        .catch(() => null),
      import("../assets/vendor/isotope-layout/isotope.pkgd.min.js?url")
        .then(m => m.default)
        .catch(() => null),
      import("../assets/vendor/glightbox/js/glightbox.min.js?url")
        .then(m => m.default)
        .catch(() => null),
      import("../assets/vendor/purecounter/purecounter_vanilla.js?url")
        .then(m => m.default)
        .catch(() => null),
    ];

    Promise.all(scriptPromises)
      .then(([imagesloadedUrl, isotopeUrl, glightboxUrl, purecounterUrl]) => {
        const scripts = [
          { url: imagesloadedUrl, id: "imagesloaded-script" },
          { url: isotopeUrl, id: "isotope-script" },
          { url: glightboxUrl, id: "glightbox-script" },
          { url: purecounterUrl, id: "purecounter-script" },
        ].filter(script => script.url); // Filter out failed imports

        const loadScript = (scriptData) => {
          return new Promise((resolveScript) => {
            if (document.getElementById(scriptData.id)) {
              resolveScript();
              return;
            }
            const script = document.createElement("script");
            script.id = scriptData.id;
            script.src = scriptData.url;
            script.async = true;
            script.onload = resolveScript;
            script.onerror = resolveScript; // Resolve even on error to not block
            document.body.appendChild(script);
          });
        };

        return Promise.allSettled(scripts.map(loadScript));
      })
      .then(() => {
        // Make scripts available globally if they loaded
        if (typeof window !== "undefined") {
          window.imagesLoaded = window.imagesLoaded || (() => {});
          window.Isotope = window.Isotope || (() => {});
          window.GLightbox = window.GLightbox || (() => {});
        }
        resolve();
      })
      .catch(() => {
        // If everything fails, still resolve to not block the page
        resolve();
      });
  });
};

