document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Initialize animations after loading
        initializeAnimations();
    }, 2500);

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
        
        const projectData = {
            quantum: {
                title: 'QUANTUMPDF CHATAPP - TECHNICAL SPECIFICATIONS',
                content: `
                    <div style="font-family: var(--font-mono); margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md);">PROJECT OVERVIEW</h3>
                        <p>Advanced deep learning model utilizing CUHK Face Sketch Database for high-quality image enhancement through sophisticated CNN architecture implemented in TensorFlow.</p>
                    </div>
                    
                    <div style="margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">TECHNICAL ARCHITECTURE</h3>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: var(--spacing-sm);">▶ CNN-based enhancement pipeline with 85% quality improvement</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ GAN integration for 90% accuracy optimization</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ Autoencoder implementation for feature preservation</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ Residual blocks and batch normalization for stability</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ Transfer learning for 30% speed improvement</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">PERFORMANCE METRICS</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md);">
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">ACCURACY</div>
                                <div style="color: var(--blueprint-accent); font-weight: bold;">90%</div>
                            </div>
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">ENHANCEMENT</div>
                                <div style="color: var(--blueprint-accent); font-weight: bold;">85%</div>
                            </div>
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">SPEED BOOST</div>
                                <div style="color: var(--blueprint-accent); font-weight: bold;">30%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">APPLICATIONS</h3>
                        <p>This model advances AI-driven artistic rendering with applications in creative AI, digital illustration, and professional image processing workflows.</p>
                    </div>
                `
            },
            endoscopy: {
                title: 'ENDOSCOPIC IMAGE ENHANCEMENT - TECHNICAL SPECIFICATIONS',
                content: `
                    <div style="font-family: var(--font-mono); margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md);">PROJECT OVERVIEW</h3>
                        <p>Engineered deep learning pipeline for enhancing low-resolution endoscopic imagery using advanced super-resolution, denoising, and segmentation techniques for medical-grade applications.</p>
                    </div>
                    
                    <div style="margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">TECHNICAL IMPLEMENTATION</h3>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: var(--spacing-sm);">▶ U-Net architecture for precise medical image segmentation</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ CNN-based super-resolution models for clarity enhancement</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ Advanced denoising algorithms for medical-grade quality</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ PSNR and SSIM evaluation metrics implementation</li>
                            <li style="margin-bottom: var(--spacing-sm);">▶ Real-time processing pipeline for surgical assistance</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: var(--spacing-lg);">
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">QUALITY IMPROVEMENTS</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md);">
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">PSNR</div>
                                <div style="color: var(--blueprint-success); font-weight: bold;">IMPROVED</div>
                            </div>
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">SSIM</div>
                                <div style="color: var(--blueprint-success); font-weight: bold;">ENHANCED</div>
                            </div>
                            <div style="border: 1px solid var(--blueprint-line); padding: var(--spacing-sm);">
                                <div style="color: var(--blueprint-text-secondary); font-size: 0.8rem;">CLARITY</div>
                                <div style="color: var(--blueprint-success); font-weight: bold;">SIGNIFICANT</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 style="color: var(--blueprint-accent); margin-bottom: var(--spacing-md); font-family: var(--font-mono);">MEDICAL APPLICATIONS</h3>
                        <p>Improved image clarity and boundary detection significantly support downstream diagnostic AI systems and real-time surgical assistance tools, enhancing medical decision-making capabilities.</p>
                    </div>
                `
            }
        };
        
        const data = projectData[projectId];
        if (data) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
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