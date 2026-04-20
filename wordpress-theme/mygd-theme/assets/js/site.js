window.addEventListener("scroll", () =>
        document
          .getElementById("nav")
          .classList.toggle("scrolled", scrollY > 40),
      );

      document.querySelectorAll(".prog-tab").forEach((t) =>
        t.addEventListener("click", () => {
          document
            .querySelectorAll(".prog-tab")
            .forEach((x) => x.classList.remove("active"));
          t.classList.add("active");
        }),
      );

      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.addEventListener("click", (e) => {
          e.preventDefault();
          document
            .querySelector(a.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
        }),
      );
