// Project Data - All projects with complete information
const allProjects = [
    {
        id: "image-to-sketch",
        title: "Image to Sketch using Deep Neural Network and ML",
        description: "Developed a deep learning model using the CUHK Face Sketch Database, achieving an 85% quality enhancement through a CNN in TensorFlow. Integrated GANs and Autoencoders for 90% accuracy, maintaining details via Residual Blocks and Batch Normalization. Used transfer learning and adaptive optimization to improve processing speed by 30%.",
        technologies: ["Python", "TensorFlow", "Deep Learning", "CNN", "GANs", "Autoencoders", "OpenCV"],
        github: "https://github.com/Kedhareswer/MLGeneFunction",
        demo: "https://image-to-sketch-wine.vercel.app/",
        category: "Deep Learning",
        project_date: "April 2025",
        featured: false,
        architecture: ["Input Image", "CNN Feature Extractor", "GAN Generator", "Autoencoder", "Sketch Output"],
        objectives: ["Convert images into sketches", "Optimize processing speed", "Maintain image quality"],
        outcomes: ["90% accuracy in sketch rendering", "30% optimization in processing speed", "Real-time processing capability"],
        metrics: { accuracy: "90%", enhancement: "85%", speed: "30%" }
    },
    {
        id: "endoscopy-enhancement",
        title: "Endoscopy Image Enhancement",
        description: "Advanced medical imaging enhancement system using deep learning for improved endoscopic visualization and diagnosis accuracy. Developed specialized algorithms for medical image processing and enhancement.",
        technologies: ["Deep Learning", "Computer Vision", "Python", "Medical Imaging", "Image Processing"],
        github: "https://github.com/Kedhareswer/endoscopy-enhancement",
        demo: "https://endoscopy-image-enhancement.onrender.com",
        category: "Deep Learning",
        project_date: "May 2025",
        featured: true,
        architecture: ["Medical Image Input", "Preprocessing Pipeline", "Enhancement Model", "Quality Assessment", "Enhanced Output"],
        objectives: ["Enhance endoscopic image quality", "Improve diagnostic accuracy", "Reduce noise and artifacts"],
        outcomes: ["Improved image clarity by 40%", "Enhanced diagnostic capabilities", "Reduced processing time"],
        metrics: { psnr: "IMPROVED", ssim: "ENHANCED", clarity: "SIGNIFICANT" }
    },
    {
        id: "digit-classifier",
        title: "Digit Classifier using Deep Learning",
        description: "A modern web-based digit recognition application that uses Deep Learning to classify handwritten digits. Built with Next.js, FastAPI, and TensorFlow for real-time digit recognition with 99% accuracy.",
        technologies: ["Deep Learning", "Next.js", "FastAPI", "TensorFlow", "Python", "React"],
        github: "https://github.com/Kedhareswer/Digit_Classifier_DeepLearning",
        demo: null,
        category: "Deep Learning",
        project_date: "May 2025",
        featured: false,
        architecture: ["Next.js Frontend", "FastAPI Backend", "TensorFlow Model", "Classification Result"],
        objectives: ["Classify handwritten digits", "Create web interface", "Implement real-time prediction"],
        outcomes: ["99% accuracy on test dataset", "Real-time digit recognition", "User-friendly web interface"],
        metrics: { accuracy: "99%", speed: "REAL-TIME", interface: "MODERN" }
    },
    {
        id: "bolt-research-hub",
        title: "Bolt Research Hub",
        description: "Bolt Research Hub is a comprehensive platform for academic research, offering literature exploration, intelligent summarization, project management, and real-time team collaboration. It integrates advanced AI (Google Gemini, OpenAI, Groq), NLP pipelines, and Python-based backend for multi-source academic search, content analysis, and research assistance.",
        technologies: ["Machine Learning", "React", "Node.js", "WebSocket", "AI Integration"],
        github: "https://github.com/Kedhareswer/ai-project-planner",
        demo: "https://ai-project-planner.vercel.app/",
        category: "Web Development",
        project_date: "July 2025",
        featured: true,
        architecture: ["React Frontend", "Node.js Backend", "AI Services", "WebSocket", "Database"],
        objectives: ["Create collaborative workspace", "Integrate AI capabilities", "Enable real-time collaboration"],
        outcomes: ["Seamless team collaboration", "AI-powered research assistance", "Real-time document editing"],
        metrics: { collaboration: "REAL-TIME", ai: "INTEGRATED", performance: "OPTIMIZED" }
    },
    {
        id: "artify-ai",
        title: "Artify AI - Image to Oil Paint",
        description: "AI-powered art transformation system that converts photographs into stunning oil painting style artworks using neural style transfer techniques. Supports multiple artistic styles with optimized processing.",
        technologies: ["Deep Learning", "Python", "Neural Style Transfer", "Computer Vision", "AI Art"],
        github: "https://github.com/Kedhareswer/Image-to-Oil_Paint",
        demo: null,
        category: "Deep Learning",
        project_date: "February 2025",
        featured: false,
        architecture: ["Content Image", "Style Image", "NST Model", "Style Transfer", "Artistic Output"],
        objectives: ["Transform photos to oil paintings", "Preserve artistic quality", "Optimize processing speed"],
        outcomes: ["High-quality artistic transformations", "Fast processing pipeline", "Multiple artistic styles"],
        metrics: { quality: "HIGH", styles: "MULTIPLE", speed: "OPTIMIZED" }
    },
    {
        id: "ml-notebook",
        title: "ML-Notebook",
        description: "Developed an interactive machine learning education platform that integrates structured learning paths, engaging demonstrations, and real-time parameter adjustments to enhance user engagement. Introduced dynamic model comparison and visualization features, allowing learners to evaluate different machine learning techniques side by side while modifying parameters.",
        technologies: ["Python", "Machine Learning", "Next.js", "React", "Tailwind CSS"],
        github: "https://github.com/Kedhareswer/ML_Notebook",
        demo: "https://ml-notebook.vercel.app/",
        category: "Machine Learning",
        project_date: "May 2025",
        featured: false,
        architecture: ["User Interface", "ML Algorithms", "Parameter Engine", "Visualization", "Comparison Tool"],
        objectives: ["Create ML education platform", "Enable interactive learning", "Provide model comparison tools"],
        outcomes: ["Interactive learning experience", "Dynamic model comparison", "Real-time parameter adjustment"],
        metrics: { engagement: "HIGH", interactivity: "REAL-TIME", comparison: "DYNAMIC" }
    },
    {
        id: "web-dev-projects",
        title: "Web Development - 100 Mini Projects",
        description: "A comprehensive collection of 100 web development projects showcasing modern frontend technologies, responsive design patterns, and interactive user interfaces. Demonstrates proficiency in multiple web technologies.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Responsive Design"],
        github: "https://github.com/Kedhareswer/web-dev-projects",
        demo: "https://v0-vintage-web-development-app.vercel.app/",
        category: "Web Development",
        project_date: "March 2023",
        featured: false,
        architecture: ["Project Gallery", "Frontend Frameworks", "Interactive Components", "Responsive Design"],
        objectives: ["Create diverse web projects", "Showcase frontend skills", "Implement responsive designs"],
        outcomes: ["100 completed projects", "Modern UI/UX patterns", "Cross-browser compatibility"],
        metrics: { projects: "100", compatibility: "CROSS-BROWSER", design: "RESPONSIVE" }
    },
    {
        id: "quantumpdf-chatapp",
        title: "QuantumPDF ChatApp VectorDB",
        description: "AI-powered chat platform for intelligent conversations with PDF documents, using Retrieval-Augmented Generation (RAG), adaptive chunking, and vector search to provide accurate, context-aware answers. Supports 20+ AI providers, client-side PDF processing, and real-time quality metrics.",
        technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PDF.js", "Tesseract.js", "Pinecone", "ChromaDB", "Weaviate", "OpenAI", "Anthropic", "Google AI", "Groq", "Ollama"],
        github: "https://github.com/Kedhareswer/QuantumPDF_ChatApp_VectorDB",
        demo: "https://quantumn-pdf-chatapp.netlify.app/",
        category: "Deep Learning",
        project_date: "June 2025",
        featured: true,
        architecture: ["PDF Input", "Document Chunking", "Vector Database", "RAG Engine", "LLM APIs", "Chat Interface"],
        objectives: ["Enable intelligent, context-aware Q&A on PDF documents", "Support fast, private client-side PDF processing", "Integrate multiple AI/LLM providers", "Optimize document chunking for relevance and speed"],
        outcomes: ["Accurate retrieval and summarization of PDF content via chat", "Fast PDF upload and analysis with privacy guarantees", "Flexible AI provider integration", "Improved search quality and response relevance"],
        metrics: { accuracy: "HIGH", providers: "20+", processing: "CLIENT-SIDE" }
    },
    {
        id: "data-notebook",
        title: "Data Notebook",
        description: "A modern, interactive data analysis and visualization platform built with cutting-edge web technologies. Transform your data into actionable insights through an intuitive notebook interface.",
        technologies: ["Next.js 13+", "React 18+", "TypeScript", "Radix UI", "Tailwind CSS", "Lucide Icons", "React Context API", "PapaParse", "XLSX", "Recharts", "Vite", "ESLint", "Prettier"],
        github: "https://github.com/Kedhareswer/Data_Science_Platform",
        demo: "https://data-science-platform.vercel.app/",
        category: "Web Development",
        project_date: "April 2025",
        featured: true,
        architecture: ["Data Import", "Notebook Interface", "Analysis Engine", "Visualization", "Export System"],
        objectives: ["Enable users to create, organize, and share interactive analysis notebooks", "Provide rich text editing and code execution within notebooks", "Support data import from CSV, Excel, JSON, and SQL sources", "Offer built-in data cleaning, transformation, and feature engineering tools", "Deliver stunning visualizations and interactive dashboards", "Ensure responsive design and theme support"],
        outcomes: ["Intuitive notebook interface for data analysis", "Interactive data visualization features", "Code editor with syntax highlighting and autocompletion", "Support for multiple data import/export formats", "Modern, responsive UI with dark/light mode", "High performance and best practices (Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 95+, SEO 100)"],
        metrics: { performance: "95+", accessibility: "100", practices: "95+" }
    },
    {
        id: "promptforger",
        title: "PromptForger",
        description: "Transform your AI prompts with advanced optimization techniques for better responses across any platform. PromptForger is an AI prompt engineering platform that offers real-time analysis, optimization, and performance tracking for prompts targeting various AI models.",
        technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "ESLint", "Prettier", "Lucide", "Node.js", "npm"],
        github: "https://github.com/Kedhareswer/platform-prompt-alchemy-lab",
        demo: "https://prompt-enhancer-hazel.vercel.app/",
        category: "Web Development",
        project_date: "July 2025",
        featured: true,
        architecture: ["Prompt Input", "Analysis Engine", "Optimization AI", "Performance Metrics", "Enhanced Output"],
        objectives: ["Enable multi-platform AI prompt support", "Provide real-time prompt analysis and complexity scoring", "Facilitate system and normal prompt modes", "Safe API key storage and management", "Deliver instant optimization suggestions", "Track and display performance metrics (token count, quality, improvement)"],
        outcomes: ["Improved response quality by up to 45%", "Reduced token usage by up to 23%", "Enhanced task completion and user satisfaction metrics", "Provided actionable, structured prompt templates for business and technical use cases", "Enabled domain specialization and persona-based prompt generation"],
        metrics: { quality: "45%", tokens: "23%", satisfaction: "HIGH" }
    },
    {
        id: "chefspeak",
        title: "ChefSpeak",
        description: "ChefSpeak is an AI-powered voice cooking assistant designed to revolutionize your cooking experience with advanced AI voice interaction, smart shopping list integration, recipe narration, and multi-language support. It offers hands-free cooking, ingredient detection, meal planning, and professional voice synthesis for a seamless kitchen companion.",
        technologies: ["TypeScript", "React", "Tailwind CSS", "Supabase", "ElevenLabs", "PWA", "Web Speech API", "react-i18next", "Spoonacular"],
        github: "https://github.com/Kedhareswer/Chef-Speaks",
        demo: "https://chef-speaks.netlify.app/",
        category: "Web Development",
        project_date: "June 2025",
        featured: true,
        architecture: ["Voice Input", "Speech Recognition", "Recipe API", "AI Processing", "Voice Synthesis", "Audio Output"],
        objectives: ["Enable hands-free AI-powered cooking using natural language voice commands", "Integrate shopping list creation and management via voice", "Provide full recipe narration with high-quality AI voices", "Support multi-language experience across UI and voice recognition", "Facilitate meal planning and dietary preference handling", "Offer mobile-first, offline-capable PWA experience"],
        outcomes: ["Revolutionary voice interaction for cooking and shopping tasks", "Voice-controlled smart shopping lists with ingredient detection", "Professional recipe narration supporting 5 languages", "Accurate context retention for multi-turn conversations", "Enhanced accessibility and mobile UX for all users", "Performance optimizations for real-time voice response (<500ms)"],
        metrics: { languages: "5", response: "<500ms", accessibility: "ENHANCED" }
    },
    {
        id: "portfolio-nexus",
        title: "Portfolio Nexus",
        description: "A modern, auto-updating portfolio showcase website with sophisticated UI/UX features, dark theme, and real-time synchronization with repository data. Features include smart search, rating-based filtering, grid/list view toggle, and keyboard shortcuts.",
        technologies: ["HTML", "CSS", "JavaScript", "JSON", "Git"],
        github: "https://github.com/yourusername/portfolio-nexus",
        demo: "https://kedhareswer.github.io/My_Portfolio_Designs/",
        category: "Web Development",
        project_date: "July 2025",
        featured: false,
        architecture: ["Git Repository", "Data Sync Engine", "Web Interface", "Search System", "Portfolio Display"],
        objectives: ["Create an interactive portfolio showcase", "Implement real-time data synchronization", "Design a modern UI with dark theme", "Add advanced filtering and search capabilities"],
        outcomes: ["Developed a responsive portfolio website", "Implemented automatic updates every 30 seconds", "Created a dark theme with glassmorphism effects", "Added smart search with auto-suggestions", "Integrated rating-based filtering system"],
        metrics: { updates: "30s", theme: "DARK", search: "SMART" }
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Initialize animations after loading
        initializeAnimations();
        
        // Render projects dynamically
        renderProjects();
    }, 2500);

    // Function to render all projects dynamically
    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = ''; // Clear existing content
        
        allProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Function to create a project card element
    function createProjectCard(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-schematic';
        projectDiv.setAttribute('data-skills', project.technologies.join(',').toLowerCase());
        
        // Generate project-specific architecture diagram
        let architectureDiagram = '';
        if (project.architecture && project.architecture.length > 0) {
            architectureDiagram = project.architecture.map((node, index) => {
                const isLast = index === project.architecture.length - 1;
                return `
                    <div class="diagram-node">${node.toUpperCase()}</div>
                    ${!isLast ? '<div class="diagram-connection"></div>' : ''}
                `;
            }).join('');
        } else {
            // Fallback to generic diagram if no architecture is defined
            const inputNode = project.title.split(' ')[0].toUpperCase();
            const processNode = project.category.toUpperCase();
            const outputNode = project.title.split(' ').pop().toUpperCase();
            architectureDiagram = `
                <div class="diagram-node input">${inputNode}</div>
                <div class="diagram-connection"></div>
                <div class="diagram-node process">${processNode}</div>
                <div class="diagram-connection"></div>
                <div class="diagram-node output">${outputNode}</div>
            `;
        }
        
        // Determine project status
        let status = 'COMPLETED';
        if (project.featured) status = 'FEATURED';
        if (project.project_date.includes('2025') && (project.project_date.includes('July') || project.project_date.includes('June'))) {
            status = 'ACTIVE';
        }
        
        // Create technology tags
        const techTags = project.technologies.slice(0, 4).map(tech => 
            `<div class="tech-tag">${tech.toUpperCase()}</div>`
        ).join('');
        
        // Create metrics
        let metricsHTML = '';
        if (project.metrics) {
            metricsHTML = Object.entries(project.metrics).slice(0, 3).map(([key, value]) => 
                `<div class="metric">
                    <span class="metric-label">${key.toUpperCase()}:</span>
                    <span class="metric-value">${value}</span>
                </div>`
            ).join('');
        }
        
        // Create project links
        let linksHTML = '';
        if (project.github) {
            linksHTML += `<a href="${project.github}" target="_blank" class="project-link">
                <span class="link-label">REPOSITORY</span>
            </a>`;
        }
        if (project.demo) {
            linksHTML += `<a href="${project.demo}" target="_blank" class="project-link">
                <span class="link-label">LIVE DEMO</span>
            </a>`;
        }
        
        projectDiv.innerHTML = `
            <div class="project-thumbnail">
                <div class="schematic-diagram">
                    ${architectureDiagram}
                </div>
            </div>
            <div class="project-header">
                <h3 class="project-title">${project.title.toUpperCase()}</h3>
                <div class="project-status">${status}</div>
            </div>
            <div class="project-timeline">
                <span class="timeline-label">DATE:</span>
                <span class="timeline-value">${project.project_date}</span>
            </div>
            
            <div class="project-description">
                <p>${project.description}</p>
            </div>
            
            <div class="project-specs">
                ${techTags}
            </div>
            
            <div class="project-metrics">
                ${metricsHTML}
            </div>
            
            <div class="project-links">
                ${linksHTML}
            </div>
            
            <button class="view-details-btn" onclick="openProjectModal('${project.id}')">VIEW SPECIFICATIONS</button>
        `;
        
        return projectDiv;
    }

    // Dynamic role cycling
    const roles = [
        'AI/ML ENGINEER & DATA ANALYST',
        'DEEP LEARNING ARCHITECT',
        'COMPUTER VISION SPECIALIST',
        'DATA SCIENTIST',
        'AI SYSTEMS DEVELOPER'
    ];
    
    let currentRoleIndex = 0;
    const roleElement = document.getElementById('dynamicRole');
    
    function typeWriter(element, text, speed = 80) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Wait 3 seconds before cycling to next role
                setTimeout(() => {
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    typeWriter(element, roles[currentRoleIndex], speed);
                }, 3000);
            }
        }
        
        type();
    }
    
    // Start role cycling after loading
    setTimeout(() => {
        typeWriter(roleElement, roles[currentRoleIndex]);
    }, 3000);

    // Uptime counter
    const uptimeElement = document.getElementById('uptime');
    const startTime = Date.now();
    
    function updateUptime() {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        
        uptimeElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    setInterval(updateUptime, 1000);

    // Scroll progress indicator
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav-blueprint').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightActiveSection() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nav-blueprint');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        }
    });

    // Skills matrix interactions
    function initializeSkillsMatrix() {
        const skillItems = document.querySelectorAll('.skill-item');
        const projectCards = document.querySelectorAll('.project-schematic');
        
        skillItems.forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                const skillName = this.dataset.skill;
                
                // Highlight related projects
                projectCards.forEach(project => {
                    const projectSkills = project.dataset.skills ? project.dataset.skills.split(',') : [];
                    if (projectSkills.includes(skillName)) {
                        project.style.borderColor = 'var(--blueprint-accent)';
                        project.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
                    }
                });
                
                // Draw connection lines (simplified)
                drawConnectionLines(this, projectCards, skillName);
            });
            
            skill.addEventListener('mouseleave', function() {
                // Reset project highlighting
                projectCards.forEach(project => {
                    project.style.borderColor = '';
                    project.style.boxShadow = '';
                });
                
                // Remove connection lines
                removeConnectionLines();
            });
        });
    }
    
    function drawConnectionLines(skillElement, projectCards, skillName) {
        const connectionsContainer = document.querySelector('.matrix-connections');
        if (!connectionsContainer) return;
        
        const skillRect = skillElement.getBoundingClientRect();
        const containerRect = connectionsContainer.getBoundingClientRect();
        
        projectCards.forEach(project => {
            const projectSkills = project.dataset.skills ? project.dataset.skills.split(',') : [];
            if (projectSkills.includes(skillName)) {
                const projectRect = project.getBoundingClientRect();
                
                const line = document.createElement('div');
                line.className = 'connection-line';
                
                const startX = skillRect.right - containerRect.left;
                const startY = skillRect.top + skillRect.height / 2 - containerRect.top;
                const endX = projectRect.left - containerRect.left;
                const endY = projectRect.top + projectRect.height / 2 - containerRect.top;
                
                const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                
                line.style.left = startX + 'px';
                line.style.top = startY + 'px';
                line.style.width = length + 'px';
                line.style.transform = `rotate(${angle}deg)`;
                
                connectionsContainer.appendChild(line);
            }
        });
    }
    
    function removeConnectionLines() {
        const connectionsContainer = document.querySelector('.matrix-connections');
        if (connectionsContainer) {
            connectionsContainer.innerHTML = '';
        }
    }

    // Skill proficiency bar animations
    function animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(skill => {
            const proficiency = skill.dataset.proficiency;
            const fillBar = skill.querySelector('.proficiency-fill');
            
            if (fillBar && proficiency) {
                setTimeout(() => {
                    fillBar.style.width = proficiency + '%';
                }, Math.random() * 1000 + 500);
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animate timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('animate');
                }
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'specifications') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Initialize animations
    function initializeAnimations() {
        // Observe elements for animation
        document.querySelectorAll('.project-schematic, .timeline-item, .cert-item, .spec-category').forEach(el => {
            observer.observe(el);
        });
        
        // Observe sections for skill bar animation
        const specsSection = document.getElementById('specifications');
        if (specsSection) {
            observer.observe(specsSection);
        }
        
        // Initialize skills matrix
        initializeSkillsMatrix();
        
        // Animate profile corners
        setTimeout(() => {
            const corners = document.querySelectorAll('.corner');
            corners.forEach((corner, index) => {
                setTimeout(() => {
                    corner.classList.add('animate');
                }, index * 100);
            });
        }, 1000);
    }

    // Enhanced contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show transmission animation
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.classList.add('transmitting');
                
                // Get form data
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Create mailto link
                const mailtoSubject = encodeURIComponent(`${subject} - Portfolio Contact from ${name}`);
                const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const mailtoLink = `mailto:kedhareswer.12110626@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
                
                setTimeout(() => {
                    // Open email client
                    window.location.href = mailtoLink;
                    
                    // Reset form and button
                    contactForm.reset();
                    submitBtn.classList.remove('transmitting');
                    
                    // Reset validation states
                    inputs.forEach(input => {
                        input.classList.remove('valid', 'invalid');
                        const validation = input.parentNode.querySelector('.form-validation');
                        validation.textContent = '';
                        validation.className = 'form-validation';
                    });
                    
                    // Show success message
                    showSystemAlert('MESSAGE TRANSMISSION SUCCESSFUL', 'success');
                }, 1000);
            } else {
                showSystemAlert('VALIDATION ERROR: Please correct the highlighted fields', 'error');
            }
        });
    }
    
    function validateField(field) {
        const validation = field.parentNode.querySelector('.form-validation');
        const value = field.value.trim();
        
        let isValid = true;
        let message = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Invalid email format';
            } else {
                message = 'Valid email address';
            }
        } else if (value) {
            message = 'Field validated';
        }
        
        // Update field appearance
        field.classList.remove('valid', 'invalid');
        if (value) {
            field.classList.add(isValid ? 'valid' : 'invalid');
        }
        
        // Update validation message
        validation.textContent = message;
        validation.className = `form-validation ${isValid && value ? 'success' : (message && !isValid ? 'error' : '')}`;
        
        return isValid || !field.hasAttribute('required');
    }
    
    function showSystemAlert(message, type) {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `system-alert ${type}`;
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--blueprint-paper);
            border: 1px solid var(--blueprint-${type === 'success' ? 'success' : 'warning'});
            color: var(--blueprint-${type === 'success' ? 'success' : 'warning'});
            padding: var(--spacing-md);
            font-family: var(--font-mono);
            font-size: 0.8rem;
            z-index: 3000;
            max-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        // Animate in
        setTimeout(() => {
            alert.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            alert.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(alert);
            }, 300);
        }, 5000);
    }

    // Project modal functionality
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        // Find the project data
        const project = allProjects.find(p => p.id === projectId);
        if (!project) return;
        
        // Generate modal content
        modalTitle.textContent = `${project.title.toUpperCase()} - TECHNICAL SPECIFICATIONS`;
        
        const techTagsHTML = project.technologies.map(tech => 
            `<div class="tech-tag" style="display: inline-block; margin: 2px;">${tech.toUpperCase()}</div>`
        ).join('');
        
        const objectivesHTML = project.objectives.map(obj => 
            `<li style="margin-bottom: var(--spacing-sm);">▶ ${obj}</li>`
        ).join('');
        
        const outcomesHTML = project.outcomes.map(outcome => 
            `<li style="margin-bottom: var(--spacing-sm);">✓ ${outcome}</li>`
        ).join('');
        
        const metricsHTML = project.metrics ? Object.entries(project.metrics).map(([key, value]) => 
            `<div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">${key.toUpperCase()}</div>
                <div style="color: var(--blueprint-accent); font-weight: bold;">${value}</div>
            </div>`
        ).join('') : '';
        
        modalBody.innerHTML = `
            <div style="font-family: var(--font-mono); margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md);">PROJECT OVERVIEW</h3>
                <p>${project.description}</p>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">TECHNOLOGIES</h3>
                <div style="margin-bottom: var(--spacing-md);">
                    ${techTagsHTML}
                </div>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">PROJECT OBJECTIVES</h3>
                <ul style="list-style: none; padding-left: 0;">
                    ${objectivesHTML}
                </ul>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">OUTCOMES & ACHIEVEMENTS</h3>
                <ul style="list-style: none; padding-left: 0;">
                    ${outcomesHTML}
                </ul>
            </div>
            
            ${metricsHTML ? `
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">PERFORMANCE METRICS</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md);">
                    ${metricsHTML}
                </div>
            </div>
            ` : ''}
            
            <div>
                <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">PROJECT LINKS</h3>
                <div style="display: flex; gap: var(--spacing-md);">
                    ${project.github ? `<a href="${project.github}" target="_blank" style="color: var(--blueprint-accent); text-decoration: none; border: 1px solid var(--blueprint-accent); padding: var(--spacing-xs) var(--spacing-sm); font-family: var(--font-mono); font-size: 0.8rem;">REPOSITORY</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" style="color: var(--blueprint-accent); text-decoration: none; border: 1px solid var(--blueprint-accent); padding: var(--spacing-xs) var(--spacing-sm); font-family: var(--font-mono); font-size: 0.8rem;">LIVE DEMO</a>` : ''}
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    // Close modal on outside click
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    // Enhanced hover effects for project cards and skill tags
    document.querySelectorAll('.project-schematic').forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add subtle parallax effect to blueprint grid
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const grid = document.querySelector('.blueprint-grid');
        if (grid) {
            grid.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Blueprint line drawing animation
    function animateBlueprintLines() {
        const lines = document.querySelectorAll('.blueprint-line');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.animation = 'drawLine 1s ease-out forwards';
            }, index * 200);
        });
    }

    // Trigger line animations when sections come into view
    const lineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const line = entry.target.querySelector('.blueprint-line');
                if (line) {
                    line.style.animation = 'drawLine 1s ease-out forwards';
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-header').forEach(header => {
        lineObserver.observe(header);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
});