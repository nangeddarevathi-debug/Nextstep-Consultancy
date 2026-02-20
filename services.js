// Service Data
const serviceData = {
    'career-counseling': {
        title: 'Career Counseling',
        description: 'Get personalized career guidance from experienced counselors who understand the engineering landscape. We help you identify your strengths, interests, and align them with the right career path.',
        for: ['B.Tech graduates', 'Final year students', 'Career switchers', 'Undecided students'],
        benefits: [
            'Clarity on career direction',
            'Personalized roadmap',
            'Industry insights',
            'Long-term career planning'
        ],
        process: [
            'Initial assessment questionnaire',
            'One-on-one counseling session',
            'Career path recommendation',
            'Action plan creation',
            'Follow-up support'
        ],
        pricing: [
            { plan: 'Basic', price: '₹2,999', duration: 'One Session' },
            { plan: 'Premium', price: '₹7,999', duration: '3 Sessions' },
            { plan: 'Elite', price: '₹14,999', duration: '6 Months Support' }
        ]
    },
    'profile-evaluation': {
        title: 'Profile Evaluation',
        description: 'Comprehensive assessment of your academic profile, work experience, projects, and extracurricular activities. Get detailed feedback on your strengths and areas for improvement.',
        for: ['MS applicants', 'MBA applicants', 'Job seekers', 'Scholarship applicants'],
        benefits: [
            'Detailed profile analysis',
            'Strengths identification',
            'Weakness assessment',
            'Improvement recommendations'
        ],
        process: [
            'Profile submission',
            'Expert evaluation',
            'Detailed report generation',
            'One-on-one feedback session',
            'Improvement roadmap'
        ],
        pricing: [
            { plan: 'Basic', price: '₹1,999', duration: 'Evaluation Only' },
            { plan: 'Premium', price: '₹4,999', duration: 'Evaluation + Report' },
            { plan: 'Elite', price: '₹8,999', duration: 'Complete Package' }
        ]
    },
    'university-selection': {
        title: 'University Selection',
        description: 'Find the perfect university match based on your profile, budget, location preferences, and career goals. Access our database of 1000+ universities worldwide.',
        for: ['MS applicants', 'PhD applicants', 'Exchange students', 'Study abroad aspirants'],
        benefits: [
            'Personalized university list',
            'Admission probability analysis',
            'Scholarship opportunities',
            'Application strategy'
        ],
        process: [
            'Profile evaluation',
            'Preference discussion',
            'University shortlisting',
            'Admission probability check',
            'Final recommendations'
        ],
        pricing: [
            { plan: 'Basic', price: '₹3,999', duration: '5 Universities' },
            { plan: 'Premium', price: '₹7,999', duration: '10 Universities' },
            { plan: 'Elite', price: '₹14,999', duration: 'Unlimited + Support' }
        ]
    },
    'resume-review': {
        title: 'Resume Review',
        description: 'Professional resume optimization by industry experts. Make your resume ATS-friendly and stand out to recruiters.',
        for: ['Job seekers', 'Internship applicants', 'Graduate school applicants', 'Career changers'],
        benefits: [
            'ATS optimization',
            'Industry-specific formatting',
            'Content enhancement',
            'Multiple revisions'
        ],
        process: [
            'Resume submission',
            'Expert review',
            'Detailed feedback',
            'Revision assistance',
            'Final optimization'
        ],
        pricing: [
            { plan: 'Basic', price: '₹999', duration: 'Review Only' },
            { plan: 'Premium', price: '₹2,499', duration: 'Review + 1 Revision' },
            { plan: 'Elite', price: '₹4,999', duration: 'Complete Makeover' }
        ]
    },
    'mock-interviews': {
        title: 'Mock Interviews',
        description: 'Practice interviews with industry professionals. Get real-time feedback and improve your interview skills.',
        for: ['Job seekers', 'Internship applicants', 'Graduate school applicants', 'Career switchers'],
        benefits: [
            'Real interview simulation',
            'Industry expert feedback',
            'Performance improvement',
            'Confidence building'
        ],
        process: [
            'Interview type selection',
            'Mock interview session',
            'Detailed feedback',
            'Improvement tips',
            'Follow-up practice'
        ],
        pricing: [
            { plan: 'Basic', price: '₹1,499', duration: '1 Session' },
            { plan: 'Premium', price: '₹3,999', duration: '3 Sessions' },
            { plan: 'Elite', price: '₹7,999', duration: '6 Sessions' }
        ]
    },
    'startup-mentorship': {
        title: 'Startup Mentorship',
        description: 'Guidance for aspiring entrepreneurs. From idea validation to funding, get mentorship from successful startup founders.',
        for: ['Aspiring entrepreneurs', 'Startup founders', 'Innovation enthusiasts', 'Business students'],
        benefits: [
            'Idea validation',
            'Business plan guidance',
            'Funding strategies',
            'Network access'
        ],
        process: [
            'Initial consultation',
            'Idea evaluation',
            'Business plan development',
            'Mentorship sessions',
            'Ongoing support'
        ],
        pricing: [
            { plan: 'Basic', price: '₹4,999', duration: '1 Month' },
            { plan: 'Premium', price: '₹12,999', duration: '3 Months' },
            { plan: 'Elite', price: '₹24,999', duration: '6 Months' }
        ]
    },
    'visa-guidance': {
        title: 'Visa Guidance',
        description: 'Complete support for visa applications. Expert guidance on documentation, interviews, and requirements.',
        for: ['Study visa applicants', 'Work visa applicants', 'Travel visa applicants', 'Immigration seekers'],
        benefits: [
            'Documentation support',
            'Interview preparation',
            'Application review',
            'Success rate improvement'
        ],
        process: [
            'Visa type identification',
            'Document checklist',
            'Application preparation',
            'Interview coaching',
            'Follow-up support'
        ],
        pricing: [
            { plan: 'Basic', price: '₹2,999', duration: 'Guidance Only' },
            { plan: 'Premium', price: '₹6,999', duration: 'Complete Support' },
            { plan: 'Elite', price: '₹12,999', duration: 'Premium Package' }
        ]
    },
    'scholarship-assistance': {
        title: 'Scholarship Assistance',
        description: 'Find and apply for scholarships worldwide. Get assistance with applications and increase your chances of success.',
        for: ['MS applicants', 'PhD applicants', 'Undergraduate students', 'Research scholars'],
        benefits: [
            'Scholarship database access',
            'Application assistance',
            'Essay review',
            'Success rate improvement'
        ],
        process: [
            'Profile evaluation',
            'Scholarship matching',
            'Application preparation',
            'Document review',
            'Submission support'
        ],
        pricing: [
            { plan: 'Basic', price: '₹1,999', duration: 'Database Access' },
            { plan: 'Premium', price: '₹4,999', duration: '5 Applications' },
            { plan: 'Elite', price: '₹9,999', duration: 'Unlimited Support' }
        ]
    }
};

function openServiceModal(serviceId) {
    const service = serviceData[serviceId];
    if (!service) return;

    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');

    modalBody.innerHTML = `
        <div class="service-detail">
            <h2>${service.title}</h2>
            <p>${service.description}</p>

            <div class="service-detail-section">
                <h3>Who It's For</h3>
                <ul>
                    ${service.for.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="service-detail-section">
                <h3>Benefits</h3>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="service-detail-section">
                <h3>Process</h3>
                <ol style="color: var(--text-secondary); padding-left: 1.5rem;">
                    ${service.process.map((step, index) => `<li style="margin-bottom: 0.5rem;">${step}</li>`).join('')}
                </ol>
            </div>

            <div class="service-detail-section">
                <h3>Pricing Plans</h3>
                <div class="pricing-plans">
                    ${service.pricing.map(plan => `
                        <div class="pricing-plan">
                            <h4>${plan.plan}</h4>
                            <div class="price">${plan.price}</div>
                            <div class="price-duration">${plan.duration}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <button class="btn btn-primary" onclick="openBookingModal(); closeServiceModal();" style="width: 100%; margin-top: 2rem;">
                <span>Book Session</span>
                <div class="btn-glow"></div>
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('serviceModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'serviceModal') {
        closeServiceModal();
    }
});
