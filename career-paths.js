// Career Paths Data
const careerPaths = [
    {
        id: 'mtech-india',
        title: 'M.Tech India',
        icon: '🎓',
        description: 'Pursue Masters in Technology from top Indian institutes like IITs, NITs, and other premier universities.',
        salary: 'medium',
        difficulty: 'medium',
        time: 'long',
        investment: 'medium',
        salaryRange: '₹8-20 LPA',
        overview: 'M.Tech in India offers specialized knowledge in your field of engineering. Top institutes provide excellent research opportunities and industry connections.',
        eligibility: ['B.Tech/B.E. with minimum 60%', 'Valid GATE score', 'Some institutes accept without GATE'],
        exams: ['GATE (Graduate Aptitude Test in Engineering)', 'Institute-specific entrance exams'],
        roadmap: [
            { phase: 'Preparation', duration: '6-12 months', description: 'Prepare for GATE exam, focus on core subjects' },
            { phase: 'Application', duration: '2-3 months', description: 'Apply to institutes, submit documents' },
            { phase: 'Admission', duration: '1-2 months', description: 'Appear for interviews/counseling' },
            { phase: 'Program', duration: '2 years', description: 'Complete coursework and thesis' }
        ],
        skills: ['Core engineering knowledge', 'Research aptitude', 'Problem-solving', 'Technical writing'],
        pros: ['Affordable education', 'Strong industry connections', 'Research opportunities', 'Good ROI'],
        cons: ['Competitive entrance', 'Limited seats', 'May require relocation', '2-year commitment'],
        tips: ['Start GATE preparation early', 'Focus on core subjects', 'Build strong fundamentals', 'Practice previous papers'],
        examples: ['IIT Delhi - Computer Science', 'IIT Bombay - Electrical Engineering', 'NIT Trichy - Mechanical Engineering']
    },
    {
        id: 'ms-abroad',
        title: 'MS Abroad',
        icon: '🌍',
        description: 'Master\'s degree from top international universities in USA, Canada, Europe, Australia, and more.',
        salary: 'very-high',
        difficulty: 'hard',
        time: 'very-long',
        investment: 'high',
        salaryRange: '₹30-100+ LPA',
        overview: 'MS abroad opens doors to global opportunities, cutting-edge research, and high-paying international careers.',
        eligibility: ['B.Tech with good GPA (7.5+)', 'GRE score (310+)', 'TOEFL/IELTS', 'Strong SOP and LORs'],
        exams: ['GRE (Graduate Record Examination)', 'TOEFL/IELTS (English proficiency)', 'Subject-specific tests'],
        roadmap: [
            { phase: 'Preparation', duration: '12-18 months', description: 'GRE prep, English tests, profile building' },
            { phase: 'Application', duration: '3-4 months', description: 'University selection, SOP writing, LORs' },
            { phase: 'Visa Process', duration: '2-3 months', description: 'Visa application and interview' },
            { phase: 'Program', duration: '1.5-2 years', description: 'Complete MS degree' }
        ],
        skills: ['English proficiency', 'Research experience', 'Strong academics', 'Communication skills'],
        pros: ['Global exposure', 'High salary potential', 'Research opportunities', 'Permanent residency options'],
        cons: ['High cost', 'Competitive admission', 'Visa challenges', 'Cultural adjustment'],
        tips: ['Start early (1-2 years before)', 'Build strong profile', 'Get research experience', 'Network with alumni'],
        examples: ['Stanford University - CS', 'MIT - Engineering', 'Carnegie Mellon - Robotics']
    },
    {
        id: 'private-job',
        title: 'Private Job',
        icon: '💼',
        description: 'Land your dream job in top tech companies like Google, Microsoft, Amazon, and startups.',
        salary: 'high',
        difficulty: 'medium',
        time: 'short',
        investment: 'low',
        salaryRange: '₹8-50+ LPA',
        overview: 'Private sector offers diverse opportunities in software development, data science, product management, and more.',
        eligibility: ['B.Tech degree', 'Strong coding skills', 'Problem-solving ability', 'Good communication'],
        exams: ['Company-specific coding tests', 'Technical interviews', 'Aptitude tests'],
        roadmap: [
            { phase: 'Skill Building', duration: '3-6 months', description: 'Learn programming, DSA, system design' },
            { phase: 'Resume & Portfolio', duration: '1 month', description: 'Build resume, GitHub profile, projects' },
            { phase: 'Applications', duration: '2-3 months', description: 'Apply to companies, referrals' },
            { phase: 'Interviews', duration: '1-2 months', description: 'Technical and HR rounds' }
        ],
        skills: ['Programming languages', 'Data Structures & Algorithms', 'System Design', 'Problem-solving'],
        pros: ['Good salary', 'Fast growth', 'Learning opportunities', 'Stock options'],
        cons: ['High competition', 'Work pressure', 'Job security concerns', 'Long hours'],
        tips: ['Practice coding daily', 'Build projects', 'Participate in contests', 'Network actively'],
        examples: ['Software Engineer at Google', 'Data Scientist at Amazon', 'Product Manager at Microsoft']
    },
    {
        id: 'government-job',
        title: 'Government Job',
        icon: '🏛️',
        description: 'Secure positions in PSUs, ISRO, DRDO, Railways, and other government sectors.',
        salary: 'medium',
        difficulty: 'hard',
        time: 'medium',
        investment: 'low',
        salaryRange: '₹6-15 LPA',
        overview: 'Government jobs offer job security, good benefits, and work-life balance. Popular among engineering graduates.',
        eligibility: ['B.Tech degree', 'Age limit (varies)', 'No backlogs', 'Citizenship requirements'],
        exams: ['GATE', 'ESE (Engineering Services)', 'PSU recruitment exams', 'ISRO/DRDO exams'],
        roadmap: [
            { phase: 'Exam Selection', duration: '1 month', description: 'Choose target exams (GATE, ESE, etc.)' },
            { phase: 'Preparation', duration: '6-12 months', description: 'Study core subjects, practice papers' },
            { phase: 'Application', duration: '1-2 months', description: 'Apply for positions' },
            { phase: 'Selection', duration: '2-4 months', description: 'Written test, interview, document verification' }
        ],
        skills: ['Core engineering knowledge', 'General awareness', 'Quantitative aptitude', 'Technical knowledge'],
        pros: ['Job security', 'Good benefits', 'Work-life balance', 'Pension'],
        cons: ['Lower salary', 'Slow growth', 'Limited innovation', 'Bureaucracy'],
        tips: ['Start early preparation', 'Focus on fundamentals', 'Stay updated with current affairs', 'Practice previous papers'],
        examples: ['Engineer at ISRO', 'PSU Engineer (ONGC, BHEL)', 'Railway Engineer', 'DRDO Scientist']
    },
    {
        id: 'startup',
        title: 'Startup Founder',
        icon: '🚀',
        description: 'Build your own tech startup from scratch. Turn your ideas into reality.',
        salary: 'variable',
        difficulty: 'hard',
        time: 'very-long',
        investment: 'high',
        salaryRange: 'Variable (₹0-100+ LPA)',
        overview: 'Starting your own company offers freedom, potential for high returns, and the opportunity to solve real problems.',
        eligibility: ['Entrepreneurial mindset', 'Technical skills', 'Business acumen', 'Risk tolerance'],
        exams: ['None (but pitch competitions help)'],
        roadmap: [
            { phase: 'Idea Validation', duration: '1-3 months', description: 'Validate problem-solution fit' },
            { phase: 'MVP Development', duration: '3-6 months', description: 'Build minimum viable product' },
            { phase: 'Launch & Traction', duration: '6-12 months', description: 'Launch, get users, iterate' },
            { phase: 'Scale', duration: 'Ongoing', description: 'Raise funding, expand team, grow' }
        ],
        skills: ['Technical skills', 'Business development', 'Marketing', 'Fundraising', 'Leadership'],
        pros: ['High potential returns', 'Freedom', 'Impact', 'Learning curve'],
        cons: ['High risk', 'Uncertain income', 'Long hours', 'High stress'],
        tips: ['Start with side project', 'Validate before building', 'Build network', 'Learn from failures'],
        examples: ['Tech startup in fintech', 'SaaS product', 'E-commerce platform', 'Mobile app']
    },
    {
        id: 'mba',
        title: 'MBA',
        icon: '📊',
        description: 'Master of Business Administration from top B-schools for leadership and management roles.',
        salary: 'high',
        difficulty: 'hard',
        time: 'long',
        investment: 'high',
        salaryRange: '₹15-50+ LPA',
        overview: 'MBA opens doors to management, consulting, product management, and leadership roles in tech and other industries.',
        eligibility: ['B.Tech degree', 'CAT/XAT/GMAT score', 'Work experience (preferred)', 'Good academics'],
        exams: ['CAT (Common Admission Test)', 'XAT', 'GMAT (for abroad)', 'Institute-specific tests'],
        roadmap: [
            { phase: 'Exam Preparation', duration: '6-12 months', description: 'Prepare for CAT/GMAT' },
            { phase: 'Application', duration: '2-3 months', description: 'Apply to B-schools, essays, interviews' },
            { phase: 'Program', duration: '2 years', description: 'Complete MBA coursework' },
            { phase: 'Placement', duration: 'Final year', description: 'Campus placements' }
        ],
        skills: ['Business acumen', 'Leadership', 'Communication', 'Analytical thinking', 'Networking'],
        pros: ['High salary', 'Leadership roles', 'Diverse opportunities', 'Strong network'],
        cons: ['High cost', 'Competitive admission', '2-year commitment', 'May need to relocate'],
        tips: ['Get work experience first', 'Focus on CAT prep', 'Build leadership profile', 'Network actively'],
        examples: ['Product Manager at Google', 'Consultant at McKinsey', 'Business Analyst at Amazon', 'Entrepreneur']
    },
    {
        id: 'certifications',
        title: 'Certifications Path',
        icon: '📜',
        description: 'Boost your profile with industry-recognized certifications in cloud, data science, cybersecurity, and more.',
        salary: 'medium',
        difficulty: 'easy',
        time: 'short',
        investment: 'low',
        salaryRange: '₹6-20 LPA',
        overview: 'Certifications demonstrate expertise in specific technologies and can significantly boost your career prospects.',
        eligibility: ['B.Tech degree', 'Basic knowledge in domain', 'Willingness to learn'],
        exams: ['AWS Certified Solutions Architect', 'Google Cloud Professional', 'Azure certifications', 'Data Science certifications'],
        roadmap: [
            { phase: 'Choose Domain', duration: '1 week', description: 'Select certification based on interest' },
            { phase: 'Study', duration: '1-3 months', description: 'Study materials, practice tests' },
            { phase: 'Certification', duration: '1 day', description: 'Take and pass certification exam' },
            { phase: 'Apply', duration: 'Ongoing', description: 'Update resume, apply for roles' }
        ],
        skills: ['Domain-specific knowledge', 'Hands-on experience', 'Problem-solving', 'Continuous learning'],
        pros: ['Quick to obtain', 'Industry recognition', 'Career boost', 'Affordable'],
        cons: ['Need to maintain', 'May become outdated', 'Not a degree substitute', 'Competition'],
        tips: ['Choose relevant certifications', 'Practice hands-on', 'Join communities', 'Keep updated'],
        examples: ['AWS Solutions Architect', 'Google Cloud Professional', 'Microsoft Azure Expert', 'Data Science Certifications']
    },
    {
        id: 'freelancing',
        title: 'Freelancing Career',
        icon: '💻',
        description: 'Work independently as a freelancer, offering services in web development, app development, consulting, and more.',
        salary: 'variable',
        difficulty: 'medium',
        time: 'short',
        investment: 'low',
        salaryRange: 'Variable (₹5-50+ LPA)',
        overview: 'Freelancing offers flexibility, work-from-anywhere opportunities, and the ability to choose your projects.',
        eligibility: ['Technical skills', 'Portfolio', 'Communication skills', 'Self-discipline'],
        exams: ['None'],
        roadmap: [
            { phase: 'Skill Building', duration: '3-6 months', description: 'Master your skills, build portfolio' },
            { phase: 'Platform Setup', duration: '1 month', description: 'Create profiles on Upwork, Fiverr, etc.' },
            { phase: 'First Clients', duration: '2-3 months', description: 'Get initial projects, build reviews' },
            { phase: 'Scale', duration: 'Ongoing', description: 'Increase rates, get better clients' }
        ],
        skills: ['Technical expertise', 'Communication', 'Time management', 'Client management', 'Marketing'],
        pros: ['Flexibility', 'Work from anywhere', 'Unlimited earning', 'Choose projects'],
        cons: ['Uncertain income', 'No benefits', 'Self-marketing needed', 'Isolation'],
        tips: ['Build strong portfolio', 'Start with lower rates', 'Get reviews', 'Network actively'],
        examples: ['Web Developer', 'Mobile App Developer', 'UI/UX Designer', 'Technical Consultant']
    },
    {
        id: 'research',
        title: 'Research Career',
        icon: '🔬',
        description: 'Pursue a career in research and development, working on cutting-edge technologies and innovations.',
        salary: 'medium',
        difficulty: 'hard',
        time: 'very-long',
        investment: 'medium',
        salaryRange: '₹8-25 LPA',
        overview: 'Research careers involve deep technical work, innovation, and contributing to scientific knowledge.',
        eligibility: ['M.Tech/PhD preferred', 'Research experience', 'Publications', 'Strong academics'],
        exams: ['GATE', 'UGC NET', 'CSIR NET', 'Institute-specific tests'],
        roadmap: [
            { phase: 'M.Tech/PhD', duration: '2-5 years', description: 'Complete advanced degree' },
            { phase: 'Research Experience', duration: 'Ongoing', description: 'Publish papers, attend conferences' },
            { phase: 'Apply', duration: '3-6 months', description: 'Apply to research positions' },
            { phase: 'Career', duration: 'Ongoing', description: 'Work in R&D, academia, or industry research' }
        ],
        skills: ['Research methodology', 'Technical writing', 'Analytical thinking', 'Innovation', 'Patience'],
        pros: ['Intellectual satisfaction', 'Innovation', 'Contribution to knowledge', 'Respect'],
        cons: ['Long education', 'Lower initial salary', 'Competitive', 'Publish or perish'],
        tips: ['Start research early', 'Publish papers', 'Attend conferences', 'Build network'],
        examples: ['Research Scientist at DRDO', 'PhD Researcher', 'R&D Engineer', 'Academic Researcher']
    },
    {
        id: 'business-owner',
        title: 'Business Owner',
        icon: '🏢',
        description: 'Start and run your own business in tech services, consulting, or product-based ventures.',
        salary: 'variable',
        difficulty: 'hard',
        time: 'very-long',
        investment: 'high',
        salaryRange: 'Variable',
        overview: 'Running your own business offers complete control, potential for high returns, and the ability to build something meaningful.',
        eligibility: ['Business acumen', 'Capital', 'Risk tolerance', 'Leadership skills'],
        exams: ['None'],
        roadmap: [
            { phase: 'Business Plan', duration: '1-2 months', description: 'Create detailed business plan' },
            { phase: 'Legal Setup', duration: '1 month', description: 'Register company, get licenses' },
            { phase: 'Launch', duration: '3-6 months', description: 'Start operations, get first customers' },
            { phase: 'Growth', duration: 'Ongoing', description: 'Scale business, expand team' }
        ],
        skills: ['Business management', 'Sales & Marketing', 'Finance', 'Operations', 'Leadership'],
        pros: ['Complete control', 'High potential', 'Legacy building', 'Wealth creation'],
        cons: ['High risk', 'Capital intensive', 'Long hours', 'Stress'],
        tips: ['Start small', 'Validate market', 'Build team', 'Manage cash flow'],
        examples: ['IT Services Company', 'Software Product Company', 'Tech Consulting Firm', 'E-commerce Business']
    }
];

// Filter functionality
let filteredPaths = [...careerPaths];

function renderPaths() {
    const grid = document.getElementById('careerPathsGrid');
    grid.innerHTML = '';
    
    filteredPaths.forEach(path => {
        const card = document.createElement('div');
        card.className = 'career-path-card';
        card.onclick = () => openPathModal(path.id);
        
        card.innerHTML = `
            <div class="path-header">
                <div class="path-icon">${path.icon}</div>
                <h3 class="path-title">${path.title}</h3>
            </div>
            <p class="path-description">${path.description}</p>
            <div class="path-meta">
                <span class="path-badge">💰 ${path.salaryRange}</span>
                <span class="path-badge">⏱️ ${getTimeLabel(path.time)}</span>
                <span class="path-badge">📊 ${getDifficultyLabel(path.difficulty)}</span>
            </div>
            <button class="path-link-btn">Explore Path →</button>
        `;
        
        grid.appendChild(card);
    });
}

function getTimeLabel(time) {
    const labels = {
        'short': '0-6 Months',
        'medium': '6-12 Months',
        'long': '1-2 Years',
        'very-long': '2+ Years'
    };
    return labels[time] || time;
}

function getDifficultyLabel(difficulty) {
    const labels = {
        'easy': 'Easy',
        'medium': 'Medium',
        'hard': 'Hard'
    };
    return labels[difficulty] || difficulty;
}

function applyFilters() {
    const salary = document.getElementById('salaryFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;
    const time = document.getElementById('timeFilter').value;
    const investment = document.getElementById('investmentFilter').value;
    
    filteredPaths = careerPaths.filter(path => {
        return (!salary || path.salary === salary) &&
               (!difficulty || path.difficulty === difficulty) &&
               (!time || path.time === time) &&
               (!investment || path.investment === investment);
    });
    
    renderPaths();
}

function resetFilters() {
    document.getElementById('salaryFilter').value = '';
    document.getElementById('difficultyFilter').value = '';
    document.getElementById('timeFilter').value = '';
    document.getElementById('investmentFilter').value = '';
    filteredPaths = [...careerPaths];
    renderPaths();
}

// Event listeners for filters
document.getElementById('salaryFilter')?.addEventListener('change', applyFilters);
document.getElementById('difficultyFilter')?.addEventListener('change', applyFilters);
document.getElementById('timeFilter')?.addEventListener('change', applyFilters);
document.getElementById('investmentFilter')?.addEventListener('change', applyFilters);

// Path Modal
function openPathModal(pathId) {
    const path = careerPaths.find(p => p.id === pathId);
    if (!path) return;
    
    const modal = document.getElementById('pathModal');
    const modalBody = document.getElementById('pathModalBody');
    
    modalBody.innerHTML = `
        <div class="path-detail-header">
            <h2>${path.icon} ${path.title}</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem;">${path.overview}</p>
            <div class="salary-range">Average Salary: ${path.salaryRange}</div>
        </div>
        
        <div class="path-detail-section">
            <h3>📋 Eligibility</h3>
            <ul>
                ${path.eligibility.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="path-detail-section">
            <h3>📝 Exams Required</h3>
            <ul>
                ${path.exams.map(exam => `<li>${exam}</li>`).join('')}
            </ul>
        </div>
        
        <div class="path-detail-section">
            <h3>🗺️ Roadmap</h3>
            <div class="roadmap-timeline">
                ${path.roadmap.map(phase => `
                    <div class="roadmap-item">
                        <h4>${phase.phase}</h4>
                        <p><strong>Duration:</strong> ${phase.duration}</p>
                        <p>${phase.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="path-detail-section">
            <h3>💡 Skills Needed</h3>
            <ul>
                ${path.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        
        <div class="path-detail-section">
            <h3>✅ Pros & Cons</h3>
            <div class="pros-cons-grid">
                <div class="pros-box">
                    <h4>Pros</h4>
                    <ul>
                        ${path.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons-box">
                    <h4>Cons</h4>
                    <ul>
                        ${path.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="path-detail-section">
            <h3>💡 Success Tips</h3>
            <ul>
                ${path.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
        
        <div class="path-detail-section">
            <h3>🌟 Real Examples</h3>
            <ul>
                ${path.examples.map(example => `<li>${example}</li>`).join('')}
            </ul>
        </div>
        
        <button class="btn btn-primary" onclick="openBookingModal(); closePathModal();" style="width: 100%; margin-top: 2rem;">
            <span>Get Personalized Guidance</span>
            <div class="btn-glow"></div>
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePathModal() {
    const modal = document.getElementById('pathModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('pathModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'pathModal') {
        closePathModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPaths();
    
    // Check for hash in URL to open specific path
    const hash = window.location.hash.substring(1);
    if (hash) {
        const path = careerPaths.find(p => p.id === hash);
        if (path) {
            setTimeout(() => openPathModal(hash), 500);
        }
    }
});
