
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AppView, UserData, CareerSector, QuizScore } from './types';
import { CAREER_SECTORS, MOTIVATIONAL_QUOTES, QUIZ_QUESTIONS } from './constants';

// --- Shared Components ---

const Navbar: React.FC<{ 
  currentView: AppView; 
  setView: (v: AppView) => void; 
  userName?: string;
  darkMode: boolean;
  toggleTheme: () => void;
}> = ({ currentView, setView, userName, darkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView(AppView.DASHBOARD)}>
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
          <i className="fa-solid fa-compass"></i>
        </div>
        <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-indigo-950'}`}>CareerMentorship <span className="text-indigo-500">Pro</span></span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8">
        {userName && (
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <button 
              onClick={() => setView(AppView.DASHBOARD)} 
              className={`transition-colors ${currentView === AppView.DASHBOARD ? 'text-indigo-500 font-bold' : darkMode ? 'text-white/60 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-950'}`}
            >Dashboard</button>
            <button 
              onClick={() => setView(AppView.EXPLORER)} 
              className={`transition-colors ${currentView === AppView.EXPLORER ? 'text-indigo-500 font-bold' : darkMode ? 'text-white/60 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-950'}`}
            >Explorer</button>
            <button 
              onClick={() => setView(AppView.QUIZ)} 
              className={`transition-colors ${currentView === AppView.QUIZ ? 'text-indigo-500 font-bold' : darkMode ? 'text-white/60 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-950'}`}
            >Compass Quiz</button>
          </div>
        )}

        <button 
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600'}`}
          title="Toggle Dark/Light Mode"
        >
          <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        {userName && (
          <button 
            onClick={() => setView(AppView.PROFILE)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${darkMode ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20'}`}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white">
              {userName.substring(0, 2).toUpperCase()}
            </div>
            <span className={`text-xs font-semibold hidden sm:inline ${darkMode ? 'text-white' : 'text-indigo-950'}`}>{userName}</span>
          </button>
        )}
      </div>
    </nav>
  );
};

// --- View: Authentication ---

const AuthView: React.FC<{ onLogin: (u: UserData) => void; darkMode: boolean }> = ({ onLogin, darkMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '', age: '', degree: '', dob: '', gradYear: '', email: '', password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: formData.name || 'Alex Johnson',
      age: parseInt(formData.age) || 22,
      degree: formData.degree || 'Computer Science',
      dob: formData.dob || '2002-01-01',
      gradYear: formData.gradYear || '2024',
      profilePic: `https://picsum.photos/seed/${formData.name || 'Alex'}/200`
    });
  };

  const inputClass = `w-full border rounded-lg px-4 py-2 focus:ring-2 ring-indigo-500 outline-none transition-all ${
    darkMode ? 'bg-white/10 border-white/10 text-white' : 'bg-indigo-50/50 border-indigo-200 text-indigo-950'
  }`;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?blur=10')` }}>
      <div className="absolute inset-0 bg-indigo-950/70"></div>
      <div className="w-full max-w-lg glass p-10 relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Welcome to Your Future</h1>
          <p className={darkMode ? 'text-white/60' : 'text-indigo-900/60'}>Navigate your career path with precision.</p>
        </div>
        
        <div className={`flex p-1 rounded-xl mb-8 ${darkMode ? 'bg-white/5' : 'bg-indigo-500/10'}`}>
          <button 
            onClick={() => setIsLogin(true)} 
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${isLogin ? 'bg-indigo-500 text-white shadow-lg' : darkMode ? 'text-white/60 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-900'}`}
          >Login</button>
          <button 
            onClick={() => setIsLogin(false)} 
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isLogin ? 'bg-indigo-500 text-white shadow-lg' : darkMode ? 'text-white/60 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-900'}`}
          >Sign Up</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Full Name</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClass} placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Current Degree</label>
                  <input required value={formData.degree} onChange={e => setFormData({...formData, degree: e.target.value})} className={inputClass} placeholder="B.Tech" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Age</label>
                  <input required value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} type="number" className={inputClass} placeholder="21" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Pass out year</label>
                  <input required value={formData.gradYear} onChange={e => setFormData({...formData, gradYear: e.target.value})} type="number" className={inputClass} placeholder="2025" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">DOB</label>
                  <input required value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} type="date" className={inputClass} />
                </div>
              </div>
            </>
          )}
          <div className="space-y-1">
            <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Email Address</label>
            <input required type="email" className={inputClass} placeholder="name@domain.com" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-indigo-500/70 uppercase tracking-wider">Password</label>
            <input required type="password" className={inputClass} placeholder="••••••••" />
          </div>
          
          <button type="submit" className="w-full py-3 mt-6 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- View: Dashboard ---

const DashboardView: React.FC<{ userData: UserData; setView: (v: AppView); darkMode: boolean }> = ({ userData, setView, darkMode }) => {
  const quote = useMemo(() => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)], []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <header className="mb-12">
        <h2 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Hello, {userData.name} 👋</h2>
        <p className={darkMode ? 'text-white/60' : 'text-indigo-900/60'}>Ready to explore your next big move today?</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Quote Card */}
          <div className="glass p-10 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="fa-solid fa-quote-right text-8xl"></i>
            </div>
            <p className={`text-2xl font-light italic mb-6 leading-relaxed relative z-10 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>"{quote.text}"</p>
            <p className="text-indigo-500 font-bold tracking-widest uppercase text-sm">— {quote.author}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer" onClick={() => setView(AppView.QUIZ)}>
              <div>
                <i className="fa-solid fa-vial-circle-check text-3xl text-indigo-500 mb-4"></i>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Career Compass</h3>
                <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-indigo-900/50'}`}>Take our 15-question psychometric test to find your niche.</p>
              </div>
              <div className="text-indigo-500 font-bold text-sm uppercase tracking-tighter flex items-center gap-2">
                Start Quiz <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer" onClick={() => setView(AppView.EXPLORER)}>
              <div>
                <i className="fa-solid fa-briefcase text-3xl text-violet-500 mb-4"></i>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Career Explorer</h3>
                <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-indigo-900/50'}`}>Browse over 50+ high-growth sectors with detailed roadmaps.</p>
              </div>
              <div className="text-violet-500 font-bold text-sm uppercase tracking-tighter flex items-center gap-2">
                Browse Careers <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass p-8">
            <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>
              <i className="fa-solid fa-user-graduate text-indigo-500"></i> Mentor Notes
            </h3>
            <div className={`rounded-xl p-4 border ${darkMode ? 'bg-white/5 border-white/5' : 'bg-indigo-500/5 border-indigo-500/10'}`}>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/80' : 'text-indigo-950/80'}`}>
                Since you're pursuing <span className="text-indigo-500 font-bold">{userData.degree}</span>, focusing on specialized certifications this year will give you a major competitive advantage. The graduation year <span className="text-violet-500 font-bold">{userData.gradYear}</span> is a high-growth period for your field!
              </p>
            </div>
            <button onClick={() => setView(AppView.PROFILE)} className={`w-full mt-6 py-3 rounded-xl border transition-colors text-sm font-semibold ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-indigo-500/5 border-indigo-500/10 hover:bg-indigo-500/10 text-indigo-600'}`}>
              View Detailed Profile
            </button>
          </div>
          
          <div className={`glass p-8 bg-gradient-to-tr from-indigo-500/10 to-transparent border-indigo-500/20`}>
             <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Weekly Progress</h3>
             <p className={`text-sm mb-4 ${darkMode ? 'text-white/60' : 'text-indigo-900/60'}`}>You are 65% closer to your next career milestone.</p>
             <div className="w-full h-2 bg-indigo-500/10 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-indigo-500 shadow-lg shadow-indigo-500/50"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- View: Career Explorer ---

const ExplorerView: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [search, setSearch] = useState('');
  const [selectedSector, setSelectedSector] = useState<CareerSector | null>(null);

  const filtered = CAREER_SECTORS.filter(s => 
    s.title.toLowerCase().includes(search.toLowerCase()) || 
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>Career Explorer</h2>
          <p className={darkMode ? 'text-white/60' : 'text-indigo-900/60'}>Discover 50+ high-impact industries.</p>
        </div>
        <div className="relative group min-w-[300px]">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400"></i>
          <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={`w-full glass py-3 pl-12 pr-4 outline-none focus:ring-2 ring-indigo-500/50 transition-all rounded-full ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-indigo-50 border-indigo-100 text-indigo-950'}`} 
            placeholder="Search roles or categories..." 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(sector => (
          <div 
            key={sector.id} 
            onClick={() => setSelectedSector(sector)}
            className="glass-card p-6 cursor-pointer group flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
              <i className={`fa-solid ${sector.icon} text-2xl text-indigo-500`}></i>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1">{sector.category}</p>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>{sector.title}</h3>
              <p className={`text-sm line-clamp-3 ${darkMode ? 'text-white/50' : 'text-indigo-900/50'}`}>{sector.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-indigo-500/10 flex items-center justify-between">
              <span className={`text-xs font-semibold ${darkMode ? 'text-white/40' : 'text-indigo-900/40'}`}>Details</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedSector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/60">
          <div className={`w-full max-w-4xl glass max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300 ${darkMode ? '' : 'bg-white text-indigo-950'}`}>
            <button onClick={() => setSelectedSector(null)} className={`sticky top-6 float-right mr-6 w-10 h-10 rounded-full flex items-center justify-center z-10 ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-indigo-500/10 hover:bg-indigo-500/20'}`}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center">
                  <i className={`fa-solid ${selectedSector.icon} text-4xl text-indigo-500`}></i>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500 mb-1">{selectedSector.category}</p>
                  <h2 className="text-4xl font-bold">{selectedSector.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <section>
                    <h4 className="text-lg font-bold mb-4 border-b border-indigo-500/20 pb-2">The Roadmap</h4>
                    <div className="space-y-4">
                      {selectedSector.roadmap.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full border-2 border-indigo-500 flex items-center justify-center text-[10px] font-bold">{idx + 1}</div>
                            {idx !== selectedSector.roadmap.length - 1 && <div className="w-px h-full bg-indigo-500/30 my-1"></div>}
                          </div>
                          <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-indigo-900/80'}`}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-10">
                  <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-white/5 border-white/5' : 'bg-indigo-50 border-indigo-100'}`}>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-coins text-yellow-500"></i> Salary Insights
                    </h4>
                    <p className="text-3xl font-bold text-indigo-500 mb-1">{selectedSector.salary}</p>
                    <p className="text-xs text-indigo-400/60 uppercase font-bold tracking-widest">Estimated annual range (India)</p>
                  </section>

                  <section>
                    <h4 className="text-lg font-bold mb-4 border-b border-indigo-500/20 pb-2">Core Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSector.requirements.map((req, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium border ${darkMode ? 'bg-white/10 border-white/10 text-white' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-700'}`}>{req}</span>
                      ))}
                    </div>
                  </section>

                  <button className="w-full py-4 bg-indigo-500 text-white hover:bg-indigo-600 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20">
                    Find Opportunities
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- View: Compass Quiz ---

const QuizView: React.FC<{ onComplete: (s: QuizScore) => void; darkMode: boolean }> = ({ onComplete, darkMode }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<QuizScore>({ technical: 0, creative: 0, business: 0, service: 0 });

  const handleAnswer = (val: number) => {
    const category = QUIZ_QUESTIONS[currentIdx].category as keyof QuizScore;
    const newScores = { ...scores, [category]: (scores[category] || 0) + val };
    
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setScores(newScores);
      setCurrentIdx(currentIdx + 1);
    } else {
      onComplete(newScores);
    }
  };

  const progress = ((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="pt-32 pb-20 px-6 max-3xl mx-auto">
      <div className="glass p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 bg-indigo-500 transition-all duration-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" style={{ width: `${progress}%` }}></div>
        
        <div className="flex justify-between items-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Question {currentIdx + 1} of 15</span>
          <span className={`text-xs font-bold ${darkMode ? 'text-white/30' : 'text-indigo-900/30'}`}>{Math.round(progress)}% Complete</span>
        </div>

        <h2 className={`text-2xl font-bold mb-12 leading-relaxed min-h-[6rem] flex items-center ${darkMode ? 'text-white' : 'text-indigo-950'}`}>
          {QUIZ_QUESTIONS[currentIdx].text}
        </h2>

        <div className="space-y-4">
          {[
            { label: 'Strongly Agree', val: 5 },
            { label: 'Agree', val: 4 },
            { label: 'Neutral', val: 3 },
            { label: 'Disagree', val: 2 },
            { label: 'Strongly Disagree', val: 1 },
          ].map(opt => (
            <button 
              key={opt.val}
              onClick={() => handleAnswer(opt.val)}
              className={`w-full p-4 rounded-xl border transition-all text-left group flex items-center justify-between ${
                darkMode ? 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50' : 'border-indigo-100 bg-white hover:bg-indigo-50 hover:border-indigo-500'
              }`}
            >
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-indigo-950'}`}>{opt.label}</span>
              <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- View: Profile ---

const ProfileView: React.FC<{ userData: UserData; onUpdate: (u: UserData) => void; darkMode: boolean }> = ({ userData, onUpdate, darkMode }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(userData);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({
          ...userData,
          profilePic: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdate(editForm);
    setIsEditing(false);
  };

  const inputClass = `bg-indigo-500/10 border-indigo-500/20 border rounded px-3 py-1 font-semibold focus:ring-2 ring-indigo-500 outline-none w-full text-indigo-500`;

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="glass p-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="relative group cursor-pointer" onClick={handleImageClick}>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 transition-transform group-hover:scale-105">
              <img 
                src={userData.profilePic || `https://picsum.photos/seed/${userData.name}/200`} 
                className="w-full h-full object-cover rounded-[1.4rem]" 
                alt="Profile" 
              />
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-[1.4rem]">
              <i className="fa-solid fa-cloud-arrow-up text-2xl text-white"></i>
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-[#1e1b4b] hover:scale-110 transition-all text-white">
              <i className="fa-solid fa-camera text-[10px]"></i>
            </button>
          </div>
          <div className="text-center md:text-left flex-1">
            {isEditing ? (
              <input value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} className={`${inputClass} text-2xl mb-2`} />
            ) : (
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>{userData.name}</h2>
            )}
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {isEditing ? (
                <div className="flex gap-4 w-full max-w-sm">
                  <input value={editForm.degree} onChange={e => setEditForm({...editForm, degree: e.target.value})} className={inputClass} placeholder="Degree" />
                  <input value={editForm.gradYear} onChange={e => setEditForm({...editForm, gradYear: e.target.value})} className={inputClass} placeholder="Year" />
                </div>
              ) : (
                <>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-wider">{userData.degree}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-white/10 text-white/60' : 'bg-indigo-900/10 text-indigo-900/60'}`}>Pass out: {userData.gradYear}</span>
                </>
              )}
            </div>
          </div>
          
          {!isEditing ? (
             <button onClick={() => setIsEditing(true)} className="px-6 py-2 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2">
                <i className="fa-solid fa-pen-to-square"></i> Edit Details
             </button>
          ) : (
             <div className="flex gap-2">
                <button onClick={handleSave} className="px-6 py-2 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all">Save</button>
                <button onClick={() => setIsEditing(false)} className={`px-6 py-2 rounded-xl font-bold transition-all ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>Cancel</button>
             </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className={`text-xl font-bold border-b pb-2 ${darkMode ? 'border-white/10 text-white' : 'border-indigo-500/10 text-indigo-950'}`}>Academic Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-white/40' : 'text-indigo-900/40'}>Date of Birth</span>
                {isEditing ? (
                  <input type="date" value={editForm.dob} onChange={e => setEditForm({...editForm, dob: e.target.value})} className={inputClass + " w-auto"} />
                ) : (
                  <span className={`font-semibold ${darkMode ? '' : 'text-indigo-950'}`}>{userData.dob}</span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-white/40' : 'text-indigo-900/40'}>Age</span>
                {isEditing ? (
                  <input type="number" value={editForm.age} onChange={e => setEditForm({...editForm, age: parseInt(e.target.value) || 0})} className={inputClass + " w-20"} />
                ) : (
                  <span className={`font-semibold ${darkMode ? '' : 'text-indigo-950'}`}>{userData.age}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-white/40' : 'text-indigo-900/40'}>University</span>
                <span className={`font-semibold text-right ${darkMode ? '' : 'text-indigo-950'}`}>Institute of Career Growth</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className={`text-xl font-bold border-b pb-2 ${darkMode ? 'border-white/10 text-white' : 'border-indigo-500/10 text-indigo-950'}`}>Assessment Summary</h3>
            {userData.score ? (
              <div className="space-y-4">
                {Object.entries(userData.score).map(([cat, val]) => (
                  <div key={cat} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className={darkMode ? 'text-white' : 'text-indigo-900'}>{cat}</span>
                      <span className="text-indigo-500">{val} / 25</span>
                    </div>
                    <div className="h-1.5 w-full bg-indigo-500/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(val / 25) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`p-6 rounded-2xl border text-center italic text-sm ${darkMode ? 'bg-white/5 border-white/5 text-white/30' : 'bg-indigo-50 border-indigo-100 text-indigo-400'}`}>
                Take the Compass Quiz to see your profile analysis.
              </div>
            )}
          </div>
        </div>

        <div className={`mt-12 p-8 border rounded-2xl bg-gradient-to-br ${darkMode ? 'from-indigo-500/10 to-transparent border-white/10' : 'from-indigo-50 to-white border-indigo-100'}`}>
          <h4 className={`font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-indigo-950'}`}>
            <i className="fa-solid fa-wand-magic-sparkles text-indigo-500"></i> Career AI Prediction
          </h4>
          <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-white/70' : 'text-indigo-900/70'}`}>
            {/* Fix: Ensure userData.degree is treated as a string before calling .includes() to avoid TS error on arithmetic or comparison */}
            Based on your strong <span className="text-indigo-500 font-bold">{userData.score ? 'Technical' : 'Academic'} focus</span> and your expected pass out year in <span className="text-violet-500 font-bold">{userData.gradYear}</span>, you are highly likely to excel in roles involving {String(userData.degree).includes('Tech') ? 'Software Engineering' : 'Specialized Professional Services'}.
          </p>
          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-indigo-500 text-white font-bold rounded-xl text-sm hover:bg-indigo-600 transition-all">Download Roadmap PDF</button>
            <button className={`flex-1 py-3 border font-bold rounded-xl text-sm transition-all ${darkMode ? 'bg-white/10 border-white/10 text-white' : 'bg-white border-indigo-200 text-indigo-500'}`}>Request Mentor Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.AUTH);
  const [user, setUser] = useState<UserData | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  const handleLogin = (data: UserData) => {
    setUser(data);
    setCurrentView(AppView.DASHBOARD);
  };

  const handleQuizComplete = (score: QuizScore) => {
    if (user) {
      setUser({ ...user, score });
      setCurrentView(AppView.PROFILE);
    }
  };

  const handleUpdateUser = (updatedUser: UserData) => {
    setUser(updatedUser);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-indigo-950'}`}>
      {currentView !== AppView.AUTH && (
        <Navbar 
          currentView={currentView} 
          setView={setCurrentView} 
          userName={user?.name} 
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      )}

      <main className="animate-in slide-in-from-bottom-2 duration-500">
        {currentView === AppView.AUTH && <AuthView onLogin={handleLogin} darkMode={darkMode} />}
        {currentView === AppView.DASHBOARD && user && <DashboardView userData={user} setView={setCurrentView} darkMode={darkMode} />}
        {currentView === AppView.EXPLORER && <ExplorerView darkMode={darkMode} />}
        {currentView === AppView.QUIZ && <QuizView onComplete={handleQuizComplete} darkMode={darkMode} />}
        {currentView === AppView.PROFILE && user && <ProfileView userData={user} onUpdate={handleUpdateUser} darkMode={darkMode} />}
      </main>

      <footer className={`py-12 border-t text-center ${darkMode ? 'border-white/5 bg-black/20' : 'border-indigo-100 bg-white'}`}>
        <p className={`text-sm ${darkMode ? 'text-white/30' : 'text-indigo-900/30'}`}>© 2025 CareerMentorship Pro. All rights reserved.</p>
        <div className={`mt-4 flex justify-center gap-6 ${darkMode ? 'text-white/20' : 'text-indigo-900/20'}`}>
