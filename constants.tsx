
import { CareerSector } from './types';

export const MOTIVATIONAL_QUOTES = [
  { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

export const CAREER_SECTORS: CareerSector[] = [
  {
    id: '1',
    title: 'Software Development',
    category: 'Technology',
    description: 'Builds applications and systems using programming languages to solve real-world problems.',
    icon: 'fa-code',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Obtain foundational degree', 'Learn programming languages', 'Build real-world projects', 'Complete certifications', 'Apply for entry-level roles'],
    requirements: ['Bachelor’s Degree', 'Programming Skills', 'Analytical Thinking', 'Communication']
  },
  {
    id: '2',
    title: 'Web Development',
    category: 'Technology',
    description: 'Creates and maintains responsive websites and web applications.',
    icon: 'fa-globe',
    salary: '₹3,00,000 – ₹10,00,000',
    roadmap: ['Learn HTML, CSS, JavaScript', 'Master frameworks', 'Build portfolio', 'Gain internship experience', 'Apply for jobs'],
    requirements: ['Coding Basics', 'Creativity', 'Problem Solving', 'Web Tools']
  },
  {
    id: '3',
    title: 'UI / UX Design',
    category: 'Creative',
    description: 'Designs user-friendly digital interfaces and experiences.',
    icon: 'fa-wand-magic-sparkles',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Learn design principles', 'Use Figma / Adobe XD', 'Create case studies', 'Build portfolio', 'Apply for designer roles'],
    requirements: ['Creativity', 'Design Thinking', 'Prototyping', 'Communication']
  },
  {
    id: '4',
    title: 'Data Science & Analytics',
    category: 'Technology',
    description: 'Analyzes data to extract insights for decision-making.',
    icon: 'fa-chart-pie',
    salary: '₹6,00,000 – ₹15,00,000',
    roadmap: ['Learn statistics', 'Master Python', 'Work on datasets', 'Build projects', 'Apply for analyst roles'],
    requirements: ['Analytical Skills', 'Programming', 'Statistics', 'Problem Solving']
  },
  {
    id: '5',
    title: 'AI & Machine Learning',
    category: 'Technology',
    description: 'Develops intelligent systems that learn from data.',
    icon: 'fa-microchip',
    salary: '₹7,00,000 – ₹18,00,000',
    roadmap: ['Learn ML fundamentals', 'Study algorithms', 'Build AI models', 'Earn certifications', 'Apply for ML roles'],
    requirements: ['Mathematics', 'Python', 'Logical Thinking', 'Research Skills']
  },
  {
    id: '6',
    title: 'Cyber Security',
    category: 'Technology',
    description: 'Protects systems and networks from cyber threats.',
    icon: 'fa-user-shield',
    salary: '₹5,00,000 – ₹14,00,000',
    roadmap: ['Learn networking', 'Study security concepts', 'Practice ethical hacking', 'Get certified', 'Apply for roles'],
    requirements: ['Networking Knowledge', 'Analytical Thinking', 'Ethics', 'Attention to Detail']
  },
  {
    id: '7',
    title: 'Mobile App Development',
    category: 'Technology',
    description: 'Builds mobile apps for Android and iOS platforms.',
    icon: 'fa-mobile-screen-button',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Learn Android / iOS', 'Use frameworks', 'Build apps', 'Publish projects', 'Apply for roles'],
    requirements: ['Programming', 'UI Skills', 'Problem Solving', 'Platform Knowledge']
  },
  {
    id: '8',
    title: 'Cloud Computing',
    category: 'Technology',
    description: 'Manages cloud infrastructure and services.',
    icon: 'fa-cloud-arrow-up',
    salary: '₹6,00,000 – ₹16,00,000',
    roadmap: ['Learn cloud basics', 'Use AWS/Azure', 'Build cloud projects', 'Get certified', 'Apply for roles'],
    requirements: ['Networking', 'System Knowledge', 'Cloud Platforms', 'Analytical Skills']
  },
  {
    id: '9',
    title: 'Networking & System Admin',
    category: 'Technology',
    description: 'Maintains computer systems and networks.',
    icon: 'fa-server',
    salary: '₹3,00,000 – ₹8,00,000',
    roadmap: ['Learn networking', 'Practice system admin', 'Earn certifications', 'Gain experience', 'Apply for roles'],
    requirements: ['Technical Skills', 'Troubleshooting', 'Attention to Detail', 'Discipline']
  },
  {
    id: '10',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Promotes brands through online platforms.',
    icon: 'fa-bullhorn',
    salary: '₹3,00,000 – ₹9,00,000',
    roadmap: ['Learn SEO & Ads', 'Manage campaigns', 'Analyze results', 'Build portfolio', 'Apply for roles'],
    requirements: ['Creativity', 'Marketing Skills', 'Communication', 'Analytics']
  },
  {
    id: '11',
    title: 'Social Media Manager',
    category: 'Marketing',
    description: 'Manages brand presence on social media platforms.',
    icon: 'fa-hashtag',
    salary: '₹3,00,000 – ₹8,00,000',
    roadmap: ['Learn platform strategies', 'Create content', 'Track engagement', 'Grow pages', 'Apply for roles'],
    requirements: ['Content Skills', 'Creativity', 'Trend Awareness', 'Communication']
  },
  {
    id: '12',
    title: 'Content Writing',
    category: 'Marketing',
    description: 'Creates written content for digital platforms.',
    icon: 'fa-pen-fancy',
    salary: '₹2,50,000 – ₹7,00,000',
    roadmap: ['Improve writing', 'Learn SEO', 'Build samples', 'Freelance / intern', 'Apply for roles'],
    requirements: ['Language Skills', 'Creativity', 'Research', 'Time Management']
  },
  {
    id: '13',
    title: 'Graphic Design',
    category: 'Creative',
    description: 'Creates visual content for branding and marketing.',
    icon: 'fa-palette',
    salary: '₹3,00,000 – ₹9,00,000',
    roadmap: ['Learn design basics', 'Master tools', 'Build portfolio', 'Work on projects', 'Apply for roles'],
    requirements: ['Creativity', 'Design Tools', 'Visual Sense', 'Communication']
  },
  {
    id: '14',
    title: 'Animation & Multimedia',
    category: 'Creative',
    description: 'Produces animated and multimedia content.',
    icon: 'fa-film',
    salary: '₹3,50,000 – ₹10,00,000',
    roadmap: ['Learn animation software', 'Create demo reel', 'Work on projects', 'Build portfolio', 'Apply for roles'],
    requirements: ['Creativity', 'Animation Skills', 'Patience', 'Software Knowledge']
  },
  {
    id: '15',
    title: 'Game Development',
    category: 'Technology',
    description: 'Designs and develops video games.',
    icon: 'fa-gamepad',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Learn game engines', 'Study game design', 'Build games', 'Publish projects', 'Apply for roles'],
    requirements: ['Programming', 'Creativity', 'Logical Thinking', 'Passion for Games']
  },
  {
    id: '16',
    title: 'E-Commerce',
    category: 'Management',
    description: 'Manages online sales platforms and operations.',
    icon: 'fa-cart-shopping',
    salary: '₹4,00,000 – ₹10,00,000',
    roadmap: ['Learn e-commerce tools', 'Manage stores', 'Optimize sales', 'Analyze performance', 'Apply for roles'],
    requirements: ['Business Skills', 'Marketing', 'Analytics', 'Communication']
  },
  {
    id: '17',
    title: 'Banking & Finance',
    category: 'Finance',
    description: 'Manages financial services and transactions.',
    icon: 'fa-building-columns',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Study finance basics', 'Learn banking systems', 'Gain certifications', 'Intern', 'Apply for roles'],
    requirements: ['Numerical Skills', 'Financial Knowledge', 'Integrity', 'Analysis']
  },
  {
    id: '18',
    title: 'Accounting & Auditing',
    category: 'Finance',
    description: 'Handles financial records and audits.',
    icon: 'fa-calculator',
    salary: '₹3,00,000 – ₹9,00,000',
    roadmap: ['Learn accounting', 'Practice tools', 'Earn certification', 'Gain experience', 'Apply for roles'],
    requirements: ['Accuracy', 'Accounting Skills', 'Ethics', 'Analysis']
  },
  {
    id: '19',
    title: 'Business Administration',
    category: 'Management',
    description: 'Oversees business operations and strategy.',
    icon: 'fa-briefcase',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Study management', 'Learn leadership', 'Intern', 'Gain experience', 'Apply for roles'],
    requirements: ['Leadership', 'Communication', 'Decision Making', 'Organization']
  },
  {
    id: '20',
    title: 'Human Resource Management',
    category: 'Management',
    description: 'Manages recruitment and employee relations.',
    icon: 'fa-users-gear',
    salary: '₹3,50,000 – ₹9,00,000',
    roadmap: ['Learn HR principles', 'Study labor laws', 'Handle recruitment', 'Gain experience', 'Apply for roles'],
    requirements: ['Communication', 'People Skills', 'Ethics', 'Organization']
  },
  {
    id: '21',
    title: 'Marketing & Sales',
    category: 'Marketing',
    description: 'Promotes and sells products or services.',
    icon: 'fa-handshake',
    salary: '₹3,00,000 – ₹10,00,000',
    roadmap: ['Learn marketing basics', 'Practice sales', 'Gain field exposure', 'Build results', 'Apply for roles'],
    requirements: ['Communication', 'Persuasion', 'Confidence', 'Market Knowledge']
  },
  {
    id: '22',
    title: 'Entrepreneurship',
    category: 'Management',
    description: 'Builds and runs new business ventures.',
    icon: 'fa-rocket',
    salary: 'Variable',
    roadmap: ['Identify idea', 'Build MVP', 'Launch startup', 'Scale business', 'Sustain growth'],
    requirements: ['Risk Taking', 'Leadership', 'Creativity', 'Decision Making']
  },
  {
    id: '23',
    title: 'Education & Teaching',
    category: 'Services',
    description: 'Educates and mentors students.',
    icon: 'fa-chalkboard-user',
    salary: '₹2,50,000 – ₹8,00,000',
    roadmap: ['Earn degree', 'Learn teaching methods', 'Gain experience', 'Get certified', 'Apply for roles'],
    requirements: ['Subject Knowledge', 'Patience', 'Communication', 'Teaching Skills']
  },
  {
    id: '24',
    title: 'Research & Development',
    category: 'Academic',
    description: 'Innovates and develops new technologies.',
    icon: 'fa-flask-vial',
    salary: '₹5,00,000 – ₹14,00,000',
    roadmap: ['Study advanced topics', 'Conduct research', 'Publish work', 'Gain lab experience', 'Apply for roles'],
    requirements: ['Research Skills', 'Innovation', 'Analysis', 'Technical Knowledge']
  },
  {
    id: '25',
    title: 'Healthcare Services',
    category: 'Healthcare',
    description: 'Provides medical and healthcare services.',
    icon: 'fa-user-doctor',
    salary: '₹4,00,000 – ₹15,00,000',
    roadmap: ['Study medical field', 'Clinical training', 'Licensing', 'Practice', 'Specialize'],
    requirements: ['Medical Knowledge', 'Compassion', 'Ethics', 'Patience']
  },
  {
    id: '26',
    title: 'Biotechnology',
    category: 'Healthcare',
    description: 'Applies biological science in technology.',
    icon: 'fa-dna',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Study biotech', 'Lab practice', 'Research projects', 'Certification', 'Apply for roles'],
    requirements: ['Biology', 'Research', 'Accuracy', 'Analysis']
  },
  {
    id: '27',
    title: 'Pharmaceutical Industry',
    category: 'Healthcare',
    description: 'Develops and distributes medicines.',
    icon: 'fa-pills',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Study pharmacy', 'Learn drug development', 'Industry training', 'Licensing', 'Apply for roles'],
    requirements: ['Scientific Knowledge', 'Ethics', 'Accuracy', 'Communication']
  },
  {
    id: '28',
    title: 'Mechanical Engineering',
    category: 'Engineering',
    description: 'Designs and maintains mechanical systems.',
    icon: 'fa-gears',
    salary: '₹3,50,000 – ₹10,00,000',
    roadmap: ['Learn core subjects', 'CAD tools', 'Practical training', 'Internship', 'Apply for roles'],
    requirements: ['Technical Skills', 'Mathematics', 'Problem Solving', 'Creativity']
  },
  {
    id: '29',
    title: 'Electrical Engineering',
    category: 'Engineering',
    description: 'Works on electrical and electronic systems.',
    icon: 'fa-bolt',
    salary: '₹4,00,000 – ₹11,00,000',
    roadmap: ['Study core subjects', 'Lab practice', 'Design tools', 'Internship', 'Apply for roles'],
    requirements: ['Circuit Knowledge', 'Technical Skills', 'Analysis', 'Safety']
  },
  {
    id: '30',
    title: 'Civil Engineering',
    category: 'Engineering',
    description: 'Designs and constructs infrastructure projects.',
    icon: 'fa-trowel-bricks',
    salary: '₹3,50,000 – ₹10,00,000',
    roadmap: ['Study civil engineering', 'Design software', 'Site experience', 'Certification', 'Apply for roles'],
    requirements: ['Structural Knowledge', 'Planning', 'Teamwork', 'Problem Solving']
  },
  {
    id: '31',
    title: 'Automobile Engineering',
    category: 'Engineering',
    description: 'Designs and improves vehicle systems.',
    icon: 'fa-car-side',
    salary: '₹4,00,000 – ₹11,00,000',
    roadmap: ['Study automobile systems', 'Workshop training', 'Projects', 'Internship', 'Apply for roles'],
    requirements: ['Mechanical Skills', 'Innovation', 'Technical Knowledge', 'Analysis']
  },
  {
    id: '32',
    title: 'Logistics & Supply Chain',
    category: 'Management',
    description: 'Manages movement of goods and services.',
    icon: 'fa-truck-ramp-box',
    salary: '₹4,00,000 – ₹10,00,000',
    roadmap: ['Learn logistics basics', 'Inventory management', 'Industry exposure', 'Optimization', 'Apply for roles'],
    requirements: ['Planning', 'Organization', 'Analysis', 'Communication']
  },
  {
    id: '33',
    title: 'Hospitality & Tourism',
    category: 'Services',
    description: 'Manages hotels, travel, and guest services.',
    icon: 'fa-hotel',
    salary: '₹3,00,000 – ₹8,00,000',
    roadmap: ['Study hospitality', 'Service training', 'Internship', 'Customer handling', 'Apply for roles'],
    requirements: ['Communication', 'Customer Service', 'Professionalism', 'Adaptability']
  },
  {
    id: '34',
    title: 'Government Services',
    category: 'Services',
    description: 'Works in government and public sector roles.',
    icon: 'fa-landmark',
    salary: '₹3,50,000 – ₹12,00,000',
    roadmap: ['Prepare for exams', 'Clear selection', 'Training', 'Service', 'Promotion'],
    requirements: ['Discipline', 'Integrity', 'Knowledge', 'Commitment']
  },
  {
    id: '35',
    title: 'Environmental Science',
    category: 'Academic',
    description: 'Works on environmental protection and sustainability.',
    icon: 'fa-leaf',
    salary: '₹4,00,000 – ₹10,00,000',
    roadmap: ['Study environmental science', 'Field research', 'Sustainability projects', 'Certification', 'Apply for roles'],
    requirements: ['Environmental Knowledge', 'Research', 'Analysis', 'Passion']
  },
  {
    id: '36',
    title: 'AI Trainer',
    category: 'Technology',
    description: 'Trains and improves AI models with data.',
    icon: 'fa-brain',
    salary: '₹5,00,000 – ₹14,00,000',
    roadmap: ['Learn AI basics', 'Data labeling', 'Model evaluation', 'Certification', 'Apply for roles'],
    requirements: ['AI Knowledge', 'Data Skills', 'Analysis', 'Accuracy']
  },
  {
    id: '37',
    title: 'Blockchain Developer',
    category: 'Technology',
    description: 'Builds decentralized blockchain applications.',
    icon: 'fa-link',
    salary: '₹6,00,000 – ₹16,00,000',
    roadmap: ['Learn blockchain basics', 'Smart contracts', 'Build DApps', 'Certification', 'Apply for roles'],
    requirements: ['Programming', 'Cryptography', 'Logic', 'Problem Solving']
  },
  {
    id: '38',
    title: 'DevOps Engineer',
    category: 'Technology',
    description: 'Automates software deployment and infrastructure.',
    icon: 'fa-infinity',
    salary: '₹6,00,000 – ₹15,00,000',
    roadmap: ['Learn Linux', 'CI/CD tools', 'Cloud platforms', 'Automation', 'Apply for roles'],
    requirements: ['System Skills', 'Automation', 'Cloud Knowledge', 'Analysis']
  },
  {
    id: '39',
    title: 'QA / Software Testing',
    category: 'Technology',
    description: 'Tests software to ensure quality and reliability.',
    icon: 'fa-bug-slash',
    salary: '₹3,00,000 – ₹7,00,000',
    roadmap: ['Learn testing basics', 'Manual testing', 'Automation tools', 'Projects', 'Apply for roles'],
    requirements: ['Attention to Detail', 'Analytical Thinking', 'Testing Tools', 'Documentation']
  },
  {
    id: '40',
    title: 'Product Manager',
    category: 'Management',
    description: 'Manages product development lifecycle.',
    icon: 'fa-box-open',
    salary: '₹8,00,000 – ₹20,00,000',
    roadmap: ['Learn product strategy', 'Market research', 'Stakeholder handling', 'Experience', 'Apply for roles'],
    requirements: ['Leadership', 'Communication', 'Business Sense', 'Decision Making']
  },
  {
    id: '41',
    title: 'Business Analyst',
    category: 'Management',
    description: 'Analyzes business processes and requirements.',
    icon: 'fa-magnifying-glass-chart',
    salary: '₹5,00,000 – ₹12,00,000',
    roadmap: ['Learn analysis tools', 'Requirement gathering', 'Documentation', 'Projects', 'Apply for roles'],
    requirements: ['Analytical Skills', 'Communication', 'Business Knowledge', 'Problem Solving']
  },
  {
    id: '42',
    title: 'Operations Manager',
    category: 'Management',
    description: 'Oversees daily business operations.',
    icon: 'fa-gears',
    salary: '₹6,00,000 – ₹14,00,000',
    roadmap: ['Study operations', 'Process management', 'Team handling', 'Experience', 'Apply for roles'],
    requirements: ['Leadership', 'Organization', 'Analysis', 'Decision Making']
  },
  {
    id: '43',
    title: 'Supply Chain Analyst',
    category: 'Management',
    description: 'Optimizes supply chain performance.',
    icon: 'fa-diagram-project',
    salary: '₹5,00,000 – ₹11,00,000',
    roadmap: ['Learn SCM concepts', 'Data analysis', 'Forecasting', 'Experience', 'Apply for roles'],
    requirements: ['Analytics', 'Planning', 'Business Knowledge', 'Communication']
  },
  {
    id: '44',
    title: 'Legal Advisor',
    category: 'Services',
    description: 'Provides legal guidance to organizations.',
    icon: 'fa-scale-balanced',
    salary: '₹5,00,000 – ₹15,00,000',
    roadmap: ['Study law', 'Internship', 'Practice cases', 'Licensing', 'Apply for roles'],
    requirements: ['Legal Knowledge', 'Ethics', 'Communication', 'Research']
  },
  {
    id: '45',
    title: 'Public Relations Manager',
    category: 'Marketing',
    description: 'Manages company public image and media.',
    icon: 'fa-users-viewfinder',
    salary: '₹4,00,000 – ₹10,00,000',
    roadmap: ['Learn PR strategies', 'Media handling', 'Campaign management', 'Experience', 'Apply for roles'],
    requirements: ['Communication', 'Creativity', 'Networking', 'Crisis Handling']
  },
  {
    id: '46',
    title: 'Video Editor',
    category: 'Creative',
    description: 'Edits video content for media and marketing.',
    icon: 'fa-scissors',
    salary: '₹3,00,000 – ₹9,00,000',
    roadmap: ['Learn editing software', 'Practice editing', 'Build portfolio', 'Freelance / intern', 'Apply for roles'],
    requirements: ['Creativity', 'Editing Tools', 'Visual Sense', 'Time Management']
  },
  {
    id: '47',
    title: 'Film & Media Production',
    category: 'Creative',
    description: 'Produces films and digital media content.',
    icon: 'fa-clapperboard',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Study media production', 'Hands-on projects', 'Industry exposure', 'Portfolio', 'Apply for roles'],
    requirements: ['Creativity', 'Technical Skills', 'Teamwork', 'Communication']
  },
  {
    id: '48',
    title: 'Fashion Designer',
    category: 'Creative',
    description: 'Designs clothing and fashion accessories.',
    icon: 'fa-shirt',
    salary: '₹3,00,000 – ₹10,00,000',
    roadmap: ['Learn fashion basics', 'Design collections', 'Portfolio', 'Internships', 'Apply for roles'],
    requirements: ['Creativity', 'Design Sense', 'Trend Awareness', 'Patience']
  },
  {
    id: '49',
    title: 'Interior Designer',
    category: 'Creative',
    description: 'Designs functional and aesthetic interior spaces.',
    icon: 'fa-couch',
    salary: '₹4,00,000 – ₹12,00,000',
    roadmap: ['Learn interior design', 'CAD tools', 'Client projects', 'Portfolio', 'Apply for roles'],
    requirements: ['Creativity', 'Space Planning', 'Communication', 'Technical Skills']
  },
  {
    id: '50',
    title: 'Sports Management',
    category: 'Management',
    description: 'Manages sports events, teams, and organizations.',
    icon: 'fa-medal',
    salary: '₹4,00,000 – ₹10,00,000',
    roadmap: ['Study sports management', 'Event coordination', 'Industry exposure', 'Networking', 'Apply for roles'],
    requirements: ['Leadership', 'Organization', 'Communication', 'Passion for Sports']
  }
];

export const QUIZ_QUESTIONS = [
  { id: 1, text: "I enjoy solving complex mathematical or logical puzzles.", category: 'technical' },
  { id: 2, text: "I often find myself noticing colors, layouts, and aesthetic details.", category: 'creative' },
  { id: 3, text: "I feel comfortable leading a group and making strategic decisions.", category: 'business' },
  { id: 4, text: "Helping others achieve their goals gives me deep satisfaction.", category: 'service' },
  { id: 5, text: "I am fascinated by how machines or software work internally.", category: 'technical' },
  { id: 6, text: "I like to express my ideas through writing, drawing, or design.", category: 'creative' },
  { id: 7, text: "I find it easy to network and pitch ideas to strangers.", category: 'business' },
  { id: 8, text: "I prefer working in environments where I can have a social impact.", category: 'service' },
  { id: 9, text: "I would rather spend an afternoon coding than organizing a gala.", category: 'technical' },
  { id: 10, text: "I like thinking 'outside the box' to find non-traditional solutions.", category: 'creative' },
  { id: 11, text: "I enjoy analyzing market trends and financial reports.", category: 'business' },
  { id: 12, text: "Teaching others a new skill is something I do naturally.", category: 'service' },
  { id: 13, text: "I like organizing data into structured systems and spreadsheets.", category: 'technical' },
  { id: 14, text: "I find storytelling to be an essential part of communication.", category: 'creative' },
  { id: 15, text: "I am motivated by competition and achieving business targets.", category: 'business' }
];
