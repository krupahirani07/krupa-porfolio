/* =========================================
   SCRIPT V2
   KRUPA HIRANI PORTFOLIO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE MENU
    ===================================== */

    const hamburger =
        document.querySelector(".hamburger");

    const navLinks =
        document.querySelector(".nav-links");

    if (hamburger) {

        hamburger.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "mobile-open"
                );

                hamburger.classList.toggle(
                    "active"
                );

            }
        );

    }

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

    /* =====================================
       NAVBAR SHADOW
    ===================================== */

    const navbar =
        document.getElementById("navbar");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 50) {

                navbar.style.boxShadow =
                    "0 10px 40px rgba(0,0,0,.08)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );

    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = [

        ...document.querySelectorAll(
            ".section-header"
        ),

        ...document.querySelectorAll(
            ".about-card"
        ),

        ...document.querySelectorAll(
            ".timeline-item"
        ),

        ...document.querySelectorAll(
            ".project-card"
        ),

        ...document.querySelectorAll(
            ".leadership-card"
        ),

        ...document.querySelectorAll(
            ".impact-summary"
        ),

        ...document.querySelectorAll(
            ".tech-toolbar"
        ),

        ...document.querySelectorAll(
            ".contact-banner"
        )

    ];

    revealElements.forEach(
        (element, index) => {

            element.classList.add(
                "reveal"
            );

            element.style.transitionDelay =
                `${index * 60}ms`;

        }
    );

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

    /* =====================================
       COUNTER ANIMATION
    ===================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );

    const counterObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );

    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });

    function animateCounter(counter) {

        const target =
            parseInt(
                counter.dataset.target
            );

        let current = 0;

        const increment =
            target / 80;

        const duration = 2000;

        const timer =
            setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent =
                    Math.floor(current) + "+";

            }, duration / 80);

    }

    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;

                if (

                    window.scrollY >=
                        sectionTop &&

                    window.scrollY <
                        sectionTop +
                        sectionHeight

                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            });

            navItems.forEach(link => {

                link.classList.remove(
                    "active-link"
                );

                if (

                    link.getAttribute("href")
                    ===
                    `#${current}`

                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            });

        }
    );

    /* =====================================
       PROJECT CARD TILT EFFECT
    ===================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateX =
                    ((y -
                        rect.height / 2)
                        / 25);

                const rotateY =
                    ((rect.width / 2 -
                        x)
                        / 25);

                card.style.transform =
                    `perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";

            }
        );

    });

    /* =====================================
       HERO PARALLAX BLOBS
    ===================================== */

    const blur1 =
        document.querySelector(
            ".hero-blur-1"
        );

    const blur2 =
        document.querySelector(
            ".hero-blur-2"
        );

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            if (blur1) {

                blur1.style.transform =
                    `translateY(${scroll * 0.15}px)`;

            }

            if (blur2) {

                blur2.style.transform =
                    `translateY(${scroll * -0.12}px)`;

            }

        }
    );

    /* =====================================
       HERO FADE IN
    ===================================== */

    const heroContent =
        document.querySelector(
            ".hero-content"
        );

    const heroProfile =
        document.querySelector(
            ".hero-profile"
        );

    if (heroContent) {

        heroContent.style.opacity =
            "0";

        heroContent.style.transform =
            "translateY(40px)";

        setTimeout(() => {

            heroContent.style.transition =
                "all 1s ease";

            heroContent.style.opacity =
                "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 300);

    }

    if (heroProfile) {

        heroProfile.style.opacity =
            "0";

        heroProfile.style.transform =
            "translateY(40px)";

        setTimeout(() => {

            heroProfile.style.transition =
                "all 1s ease";

            heroProfile.style.opacity =
                "1";

            heroProfile.style.transform =
                "translateY(0)";

        }, 600);

    }

});

const projects = {

    erts: {

        title: "ERTS",

        subtitle: "Enterprise ERP & Logistics Automation Platform",

        icon: "fa-solid fa-truck-fast",

        iconColor: "#2563EB",

        role: "Lead Software Engineer",

        duration: "May 2024 – Apr 2026",

        domain: "Third-Party Logistics (3PL)",

        deployment: "AWS Cloud",

        overview:
            "ERTS is a comprehensive ERP platform developed for third-party logistics companies to digitize and automate end-to-end logistics operations. The platform unified warehouse management, transportation, billing, complaint handling, collections, and operational reporting into a single scalable enterprise solution.",

        technologies: [

            "Java",
            "Spring Framework",
            "Angular",
            "MySQL",
            "AWS",
            "REST APIs",
            "Microservices",
            "Git"

        ],

        modules: [

            "Transportation Management System (TMS)",
            "Warehouse Management System (WMS)",
            "Control Tower Dashboard",
            "Complaint Management",
            "Invoice Management",
            "Collections Management"

        ],

        responsibilities: [

            "Designed scalable enterprise solution architecture",

            "Led end-to-end application development",

            "Developed backend services using Java & Spring Framework",

            "Built responsive Angular modules",

            "Designed and integrated REST APIs",

            "Collaborated with business stakeholders to convert requirements into technical solutions",

            "Managed production deployments and post-production support",

            "Performed code reviews and mentored engineering team members"

        ],

        achievements: [

            "Delivered multiple enterprise modules within a unified ERP platform",

            "Improved operational visibility using Control Tower dashboards",

            "Automated logistics workflows across transportation and warehouse operations",

            "Built scalable cloud-ready architecture deployed on AWS",

            "Reduced manual operational effort through process automation"

        ],

        impact: [

            "Enterprise-scale logistics automation",

            "Improved warehouse efficiency",

            "Real-time shipment visibility",

            "Centralized billing and invoicing",

            "Scalable architecture supporting business growth"

        ]

    },
    wms: {

        title: "Warehouse Management System",
    
        subtitle: "Enterprise Warehouse Operations Platform",
    
        icon: "fa-solid fa-warehouse",
    
        iconColor: "#22C55E",
    
        role: "Lead Software Engineer",
    
        duration: "2024 – 2026",
    
        domain: "Warehouse & Inventory Management",
    
        deployment: "AWS Cloud",
    
        overview:
            "A comprehensive Warehouse Management System (WMS) developed to optimize warehouse operations including inbound processing, putaway, inventory control, picking, packing, dispatch, stock audits, and cycle counting. The platform improves inventory accuracy, operational efficiency, and warehouse visibility.",
    
        technologies: [
            "Java",
            "Spring Boot",
            "Angular",
            "Hibernate",
            "MySQL",
            "REST APIs",
            "iText",
            "Apache PDFBox"
        ],
    
        modules: [
            "Inbound Management",
            "Putaway",
            "Bin Allocation",
            "Picking",
            "Packing",
            "Dispatch",
            "Cycle Count",
            "Stock Audit",
            "Inventory Tracking",
            "PDF Generation"
        ],
    
        responsibilities: [
            "Designed warehouse workflows",
            "Developed REST APIs",
            "Implemented inventory allocation logic",
            "Integrated PDF generation",
            "Optimized database queries",
            "Managed production support"
        ],
    
        achievements: [
            "Automated warehouse operations",
            "Improved inventory accuracy",
            "Reduced manual warehouse processes",
            "Enhanced warehouse productivity",
            "Built scalable warehouse workflows"
        ],
    
        impact: [
            "Improved inventory visibility",
            "Faster warehouse operations",
            "Reduced stock discrepancies",
            "Optimized order fulfillment"
        ]
    
    },
    ekart: {

        title: "Ekart Logistics Platform",
    
        subtitle: "First Mile to Last Mile Delivery Platform",
    
        icon: "fa-solid fa-route",
    
        iconColor: "#F97316",
    
        role: "Lead Software Engineer",
    
        duration: "2023 – 2025",
    
        domain: "Transportation & Logistics",
    
        deployment: "AWS Cloud",
    
        overview:
            "Enterprise logistics platform supporting shipment booking, trip planning, route optimization, vehicle allocation, shipment tracking, proof of delivery, and customer billing across complete first-mile to last-mile delivery operations.",
    
        technologies: [
            "Java",
            "Spring Boot",
            "Angular",
            "Google Maps API",
            "REST APIs",
            "AWS",
            "MySQL"
        ],
    
        modules: [
            "Shipment Booking",
            "Trip Planning",
            "Route Optimization",
            "Vehicle Allocation",
            "Shipment Tracking",
            "Billing",
            "Proof of Delivery"
        ],
    
        responsibilities: [
            "Designed backend architecture",
            "Developed logistics APIs",
            "Integrated Google Maps",
            "Implemented route optimization",
            "Managed deployments",
            "Production support"
        ],
    
        achievements: [
            "Improved delivery planning",
            "Automated logistics operations",
            "Reduced transportation delays",
            "Enhanced route optimization"
        ],
    
        impact: [
            "Improved delivery efficiency",
            "Real-time shipment tracking",
            "Reduced logistics costs",
            "Better customer experience"
        ]
    
    },
    imprzd: {

        title: "IMPRZD",
    
        subtitle: "Digital Marketing & Customer Engagement Platform",
    
        icon: "fa-solid fa-bullhorn",
    
        iconColor: "#8B5CF6",
    
        role: "Lead Software Engineer",
    
        duration: "2022 – 2024",
    
        domain: "Marketing Technology",
    
        deployment: "AWS Cloud",
    
        overview:
            "Cloud-based customer engagement platform enabling businesses to create feedback forms, automate WhatsApp, SMS, and Email campaigns, monitor customer engagement, and analyze campaign performance through interactive dashboards.",
    
        technologies: [
            "Java",
            "Spring Framework",
            "Angular",
            "AWS",
            "MySQL",
            "REST APIs"
        ],
    
        modules: [
            "Feedback Forms",
            "WhatsApp Integration",
            "SMS Campaigns",
            "Email Campaigns",
            "Analytics Dashboard",
            "Customer Engagement"
        ],
    
        responsibilities: [
            "Designed application architecture",
            "Developed backend services",
            "Built Angular frontend",
            "Integrated communication APIs",
            "Managed deployments",
            "Customized client solutions"
        ],
    
        achievements: [
            "Automated customer communication",
            "Improved customer engagement",
            "Delivered cloud-based platform",
            "Enhanced marketing analytics"
        ],
    
        impact: [
            "Improved campaign performance",
            "Reduced manual communication",
            "Better customer insights",
            "Scalable SaaS platform"
        ]
    
    },
    rtms: {

        title: "RTMS",
    
        subtitle: "Reporting & Tracking Management System",
    
        icon: "fa-solid fa-chart-line",
    
        iconColor: "#EF4444",
    
        role: "Full Stack Developer",
    
        duration: "2018 – 2021",
    
        domain: "Business Reporting",
    
        deployment: "On-Premise",
    
        overview:
            "Enterprise reporting platform developed to automate report generation, provide centralized dashboards, improve export accuracy, and reduce manual reporting effort across business operations.",
    
        technologies: [
            "Java",
            "HTML",
            "CSS",
            "jQuery",
            "MySQL",
            "REST APIs"
        ],
    
        modules: [
            "Dynamic Reports",
            "Dashboard",
            "Export Engine",
            "User Management",
            "Analytics"
        ],
    
        responsibilities: [
            "Gathered business requirements",
            "Developed reporting APIs",
            "Optimized SQL queries",
            "Designed frontend pages",
            "Integrated backend services"
        ],
    
        achievements: [
            "100% Export Accuracy",
            "67% Faster Reporting",
            "Improved report performance",
            "Centralized reporting"
        ],
    
        impact: [
            "Reduced reporting effort",
            "Improved operational visibility",
            "Accurate reporting",
            "Faster decision making"
        ]
    
    },
    vitaform: {

        title: "Vitaform",
    
        subtitle: "Enterprise E-Commerce Platform",
    
        icon: "fa-solid fa-cart-shopping",
    
        iconColor: "#EC4899",
    
        role: "Lead Software Engineer",
    
        duration: "2021 – 2023",
    
        domain: "E-Commerce",
    
        deployment: "Linux Server",
    
        overview:
            "Enterprise e-commerce platform developed for online mattress sales with secure payment gateway integration, customer management, product catalog, shopping cart, promotions, and complete order lifecycle management.",
    
        technologies: [
            "Java",
            "AngularJS",
            "MySQL",
            "Linux",
            "REST APIs"
        ],
    
        modules: [
            "Product Catalog",
            "Shopping Cart",
            "Checkout",
            "Payment Gateway",
            "Customer Management",
            "Order Processing"
        ],
    
        responsibilities: [
            "Full-stack development",
            "Payment gateway integration",
            "Performance optimization",
            "Bug fixing",
            "Production deployment"
        ],
    
        achievements: [
            "Secure online payments",
            "Improved shopping experience",
            "Optimized website performance",
            "Scalable e-commerce platform"
        ],
    
        impact: [
            "Increased online sales",
            "Improved customer experience",
            "Reliable payment processing",
            "Scalable online platform"
        ]
    
    }
};

function openProject(projectKey){

    const project = projects[projectKey];

    document.getElementById("modalBody").innerHTML = `

        <div class="modal-header">

            <div class="modal-icon"
                 style="background:${project.iconColor}15">

                <i class="${project.icon}"
                   style="color:${project.iconColor}">
                </i>

            </div>

            <div class="modal-info">

                <h2>${project.title}</h2>

                <p class="modal-subtitle">

                    ${project.subtitle}

                </p>

                <div class="project-role">

                    <span>
                        👨‍💻 ${project.role}
                    </span>

                    <span>
                        📅 ${project.duration}
                    </span>

                    <span>
                        🏢 ${project.domain}
                    </span>

                    <span>
                        ☁️ ${project.deployment}
                    </span>

                </div>

            </div>

        </div>

        <div class="modal-card">

            <h3>

                <i class="fa-solid fa-circle-info"></i>

                Project Overview

            </h3>

            <p>

                ${project.overview}

            </p>

        </div>

        <div class="modal-card">

            <h3>

                <i class="fa-solid fa-code"></i>

                Technology Stack

            </h3>

            <div class="modal-tags">

                ${project.technologies.map(t => `<span>${t}</span>`).join("")}

            </div>

        </div>

        <div class="modal-grid">

            <div class="modal-card">

                <h3>

                    <i class="fa-solid fa-cubes"></i>

                    Key Modules

                </h3>

                <ul class="modal-list">

                    ${project.modules.map(m => `<li>${m}</li>`).join("")}

                </ul>

            </div>

            <div class="modal-card">

                <h3>

                    <i class="fa-solid fa-user-gear"></i>

                    Responsibilities

                </h3>

                <ul class="modal-list">

                    ${project.responsibilities.map(r => `<li>${r}</li>`).join("")}

                </ul>

            </div>

        </div>

        <div class="modal-card">

            <h3>

                <i class="fa-solid fa-trophy"></i>

                Key Achievements

            </h3>

            <ul class="modal-list">

                ${project.achievements.map(a => `<li>${a}</li>`).join("")}

            </ul>

        </div>

        <div class="modal-card">

            <h3>

                <i class="fa-solid fa-chart-line"></i>

                Business Impact

            </h3>

            <ul class="modal-list">

                ${project.impact.map(i => `<li>${i}</li>`).join("")}

            </ul>

        </div>

    `;

    document
        .getElementById("projectModal")
        .classList
        .add("show");

}

document
.querySelectorAll(".close-modal")
.forEach(button=>{

    button.onclick=()=>{

        button
        .closest(".project-modal")
        .classList
        .remove("show");

    };

});
/* =========================================
   END OF FILE
========================================= */
