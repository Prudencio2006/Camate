

    /* =====================================================
       NAVBAR AU SCROLL
    ===================================================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.textContent = isOpen ? "×" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");

    });


    /* Fermer le menu après clic */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";

        });

    });


    /* =====================================================
       MODALES
    ===================================================== */

    function openModal(id) {

        const modal = document.getElementById(id);

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeModal(id) {

        const modal = document.getElementById(id);

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* Fermer en cliquant à l'extérieur */

    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                modal.classList.remove("show");

                document.body.style.overflow = "";

            }

        });

    });


    /* Fermer avec ESC */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            document.querySelectorAll(".modal").forEach(modal => {

                modal.classList.remove("show");

            });

            document.body.style.overflow = "";

        }

    });


    /* =====================================================
       VOIR PLUS / VOIR MOINS
    ===================================================== */

    function toggleMore(contentId, btnId) {

        const content = document.getElementById(contentId);
        const btn = document.getElementById(btnId);

        const isOpen = content.classList.toggle("show");
        btn.classList.toggle("open", isOpen);

        btn.querySelector(".btn-label").textContent =
            isOpen ? "Voir moins" : "Voir plus";

        btn.querySelector(".icon").textContent =
            isOpen ? "↑" : "→";

    }


    /* =====================================================
       GALERIE — LIGHTBOX
    ===================================================== */

    function openLightbox(src, alt) {

        const img = document.getElementById("lightbox-img");
        img.src = src;
        img.alt = alt;

        openModal("lightbox");

    }


    /* =====================================================
       ANIMATION AU SCROLL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       BOUTON RETOUR EN HAUT
    ===================================================== */

    const backTop =
        document.getElementById("backTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       NAVIGATION ACTIVE
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

