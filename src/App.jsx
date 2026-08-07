import { useEffect, useMemo, useState } from 'react';

const heroRoomData = {
  youngBelievers: {
    title: 'Young Believers (Grades 3-5)',
    ratio: 'Ratio 1:6',
    ratioBg: 'bg-emerald-100 text-emerald-800',
    desc: 'Building strong biblical foundations through interactive worship, creative storytelling, and age-appropriate discussions that help kids discover God\'s amazing love.',
  },
  trailblazers: {
    title: 'Trailblazers (Grades 6-9)',
    ratio: 'Ratio 1:8',
    ratioBg: 'bg-purple-100 text-purple-800',
    desc: 'Guiding pre-teens through real-life questions with engaging lessons, authentic small group connections, and meaningful service opportunities that build unshakeable faith.',
  },
  impact: {
    title: 'Impact Crew (Grades 10-13)',
    ratio: 'Ratio 1:10',
    ratioBg: 'bg-blue-100 text-blue-800',
    desc: 'Equipping teens with relevant biblical truth, authentic community, and leadership roles that prepare them to stand firm in their faith.',
  },
  legacy: {
    title: 'Legacy Team (Grades 14-17)',
    ratio: 'Ratio 1:12',
    ratioBg: 'bg-indigo-100 text-indigo-800',
    desc: 'Preparing young adults to own their faith through deep discussions, mentorship relationships, and real-world application of God\'s Word.',
  },
};

const galleryCards = [
  {
    id: 1,
    category: 'sports',
    tag: 'Sports & Rec',
    title: 'Team Sports & Relay Games',
    description: 'High-energy outdoor games build friendships and teach encouragement on field days!',
    location: 'Outdoor Sports Turf',
    badge: 'Camp Highlight',
    likes: 42,
    age: 'Grades 1-5',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/FF6B6B/FFFFFF?text=Sports+%26+Relay+Fun',
  },
  {
    id: 2,
    category: 'crafts',
    tag: 'Creative Crafts',
    title: 'Bible Verse Painting & Sculpture',
    description: 'Kids express their faith visually with fun painting, clay models, and memory verse take-home crafts.',
    location: 'Sprouts Room Art Table',
    badge: 'Weekly Craft',
    likes: 38,
    age: 'Ages 3-8',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/FFD166/0F172A?text=Creative+Crafts+Spot',
  },
  {
    id: 3,
    category: 'worship',
    tag: 'Praise & Worship',
    title: 'High-Energy Praise & Motions',
    description: 'Action-packed praise songs that get kids jumping, singing, and praising God with all their heart!',
    location: 'Main Kids Stage',
    badge: 'Sunday Praise',
    likes: 56,
    age: 'All Ages',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/06D6A0/FFFFFF?text=Joyful+Praise+Worship',
  },
  {
    id: 4,
    category: 'photospot',
    tag: 'Lobby Photo Spot',
    title: 'Family Selfie Wall & Props',
    description: 'Snap your Sunday morning family picture with fun oversized props and colorful backdrops!',
    location: 'Main Lobby Entrance',
    badge: 'Sunday Spot',
    likes: 64,
    age: 'Families & Guests',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/8338EC/FFFFFF?text=Family+Photo+Booth+Spot',
  },
  {
    id: 5,
    category: 'sports',
    tag: 'Sports & Rec',
    title: 'Pre-Teen Sports Tournaments',
    description: 'Friendly basketball shooting contests, obstacle courses, and gaga ball on Wednesday nights!',
    location: 'Outdoor Sports Court',
    badge: 'Mid-Week Clubs',
    likes: 31,
    age: 'Grades 4th-5th',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/118AB2/FFFFFF?text=Courts+%26+Sports+Games',
  },
  {
    id: 6,
    category: 'crafts',
    tag: 'Story Time Spot',
    title: 'Puppet & Story Theater',
    description: 'Cozy reading rugs where toddlers hear how Noah, David, and Esther trusted God.',
    location: 'Preschool Reading Nook',
    badge: 'Quiet Spot',
    likes: 49,
    age: 'Ages 0-5',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    fallback: 'https://placehold.co/800x500/FF6B6B/FFFFFF?text=Story+Time+Spot',
  },
];

const faqs = [
  {
    id: 1,
    question: 'What if my child has severe allergies or medical needs?',
    answer: 'When you check in, inform our desk team of any food or environmental allergies. Allergy flags are printed in bold, red font directly onto your child’s security sticker. Our classrooms strictly enforce nut-free environments.',
  },
  {
    id: 2,
    question: 'How do you notify parents if a child needs assistance during service?',
    answer: 'If your child is upset for more than 10 minutes or needs diapering/restroom assistance beyond team capabilities, we will send an instant SMS text message to the mobile phone number provided at check-in or display your tag code on the main sanctuary screen.',
  },
  {
    id: 3,
    question: 'What is your wellness / illness policy?',
    answer: 'To keep all children safe and healthy, kids must be symptom-free (no fever, runny nose with color, persistent cough, or vomiting) for at least 24 hours without medication before attending Heartfelt Kids programs.',
  },
  {
    id: 4,
    question: 'Can parents stay in the classroom with their children?',
    answer: 'For security and background-check compliance, adults without cleared background checks are not allowed inside the main classroom areas. First-time parents may accompany their child to the doorway and meet their room team!',
  },
];

function App() {
  const [heroAge, setHeroAge] = useState('youngBelievers');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [activeFaq, setActiveFaq] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verseHidden, setVerseHidden] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', icon: 'fa-circle-check' });
  const [modal, setModal] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [likedCards, setLikedCards] = useState({});

  const heroInfo = useMemo(() => heroRoomData[heroAge], [heroAge]);
  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'all') return galleryCards;
    return galleryCards.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  useEffect(() => {
    if (!toast.visible) return;
    const timer = window.setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3800);
    return () => window.clearTimeout(timer);
  }, [toast.visible]);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!revealNodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay') || '0';
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const showToast = (message, icon = 'fa-circle-check') => {
    setToast({ visible: true, message, icon });
  };

  const handleLike = (id) => {
    setLikedCards((prev) => {
      const isLiked = !!prev[id];
      return { ...prev, [id]: !isLiked };
    });
    showToast('Loved this moment picture! ❤️', 'fa-heart');
  };

  const toggleVerse = () => {
    setVerseHidden((prev) => !prev);
    showToast('Fill in the blanks! Can you remember the missing words?', 'fa-brain');
  };

  const speakVerse = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Trust in the LORD with all your heart and lean not on your own understanding. Proverbs 3 verse 5');
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
      showToast('Playing audio verse...', 'fa-volume-high');
    } else {
      showToast('Audio playback not supported in this browser.', 'fa-triangle-exclamation');
    }
  };

  const openModal = (name) => setModal(name);
  const closeModal = () => setModal(null);
  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const submitForm = (event, successMessage) => {
    event.preventDefault();
    closeModal();
    showToast(successMessage, 'fa-circle-check');
  };

  const handleNewsletter = (event) => {
    event.preventDefault();
    showToast('Subscribed! You\'ll receive our weekly family update.', 'fa-envelope-circle-check');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-slate-800 font-sans antialiased selection:bg-brand-coral selection:text-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-coral to-brand-yellow flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-heart text-2xl animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-2xl text-slate-900 tracking-tight block leading-none">Heartfelt<span className="text-brand-coral">Kids</span></span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Children's Ministry</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-sm">
            <a href="#about" className="hover:text-brand-coral transition-colors">Our Heart</a>
            <a href="#classrooms" className="hover:text-brand-coral transition-colors">Age Groups</a>
            <a href="#gallery" className="hover:text-brand-coral transition-colors">Photo Spots</a>
            <a href="#safety" className="hover:text-brand-coral transition-colors">Safety First</a>
            <a href="#verse-hub" className="hover:text-brand-coral transition-colors">Verse of the Week</a>
            <a href="#events" className="hover:text-brand-coral transition-colors">Events</a>
            <a href="#faq" className="hover:text-brand-coral transition-colors">Parent FAQs</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => openModal('volunteer')} className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all">Serve With Us</button>
            <button onClick={() => openModal('preregister')} className="px-5 py-2.5 text-sm font-bold text-white bg-brand-coral hover:bg-red-500 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"><i className="fa-solid fa-calendar-check" /> Plan Your Visit</button>
          </div>

          <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-orange-100/50 focus:outline-none" aria-label="Toggle Menu">
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 px-6 py-6 shadow-xl space-y-4">
            {['about', 'classrooms', 'gallery', 'safety', 'verse-hub', 'events', 'faq'].map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="block font-medium text-slate-700 hover:text-brand-coral py-2 border-b border-slate-100">{id === 'about' ? 'Our Heart' : id === 'classrooms' ? 'Age Groups' : id === 'gallery' ? 'Photo Spots & Activities' : id === 'safety' ? 'Safety First' : id === 'verse-hub' ? 'Verse of the Week' : id === 'events' ? 'Events' : 'Parent FAQs'}</a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button onClick={() => { openModal('preregister'); setMobileMenuOpen(false); }} className="w-full py-3 font-bold text-center text-white bg-brand-coral rounded-2xl shadow"><i className="fa-solid fa-calendar-check mr-2" /> Plan Your Visit</button>
              <button onClick={() => { openModal('volunteer'); setMobileMenuOpen(false); }} className="w-full py-3 font-bold text-center text-slate-700 bg-slate-100 rounded-2xl">Serve With Us</button>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-16 lg:py-20 bubble-bg" data-reveal>
        <div className="absolute top-12 left-4 sm:left-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-coral to-amber-300 opacity-20 animate-float-slow pointer-events-none flex items-center justify-center text-brand-coral text-xl"><i className="fa-solid fa-heart" /></div>
        <div className="absolute bottom-10 right-4 sm:right-12 w-14 h-14 rounded-full bg-brand-purple/20 opacity-30 animate-float-reverse pointer-events-none flex items-center justify-center text-brand-purple text-2xl"><i className="fa-solid fa-star" /></div>
        <div className="absolute top-1/3 right-8 w-10 h-10 rounded-2xl bg-brand-green/20 opacity-25 animate-float-slow pointer-events-none hidden sm:flex items-center justify-center text-brand-green"><i className="fa-solid fa-sparkles" /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left" data-reveal data-reveal-delay="80">


              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">Where Young Hearts Discover <span className="bg-gradient-to-r from-brand-coral via-rose-500 to-brand-purple bg-clip-text text-transparent underline decoration-brand-yellow decoration-wavy decoration-2">Big Faith!</span></h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">A safe, joyful, and vibrant Sunday community where kids grow in love, make lifelong friends, and experience Jesus in ways they will never forget.</p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button onClick={() => openModal('preregister')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-coral to-rose-500 text-white font-extrabold rounded-2xl shadow-lg shadow-rose-500/25 hover:shadow-xl hover:from-red-500 hover:to-rose-600 transition-all transform active:scale-95 sm:hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[52px]">
                  <i className="fa-solid fa-child-reaching text-xl" /> Plan Your Sunday Visit
                </button>
                <a href="#classrooms" className="w-full sm:w-auto px-6 py-4 bg-white/90 backdrop-blur-sm text-slate-800 border-2 border-orange-200/80 font-bold rounded-2xl hover:border-brand-coral hover:text-brand-coral transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base min-h-[52px]">
                  <i className="fa-solid fa-shapes text-brand-yellow" /> Explore Age Rooms
                </a>
              </div>

              <div className="pt-6 border-t border-orange-200/60 grid grid-cols-2 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 text-center sm:text-left">

                <div className="p-2 sm:p-0">
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center justify-center sm:justify-start gap-1"><i className="fa-solid fa-door-open text-brand-purple text-base sm:text-lg" /> 4</div>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">Custom Rooms</p>
                </div>
                <div className="p-2 sm:p-0">
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center justify-center sm:justify-start gap-1"><i className="fa-solid fa-clock text-amber-500 text-base sm:text-lg" /> 2</div>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">Sunday Services</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-4 lg:mt-0" data-reveal data-reveal-delay="140">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-yellow via-brand-coral to-brand-purple rounded-4xl blur-xl opacity-35 animate-pulse-glow" />
              <div className="relative glass-hero-card rounded-3xl p-5 sm:p-7 shadow-2xl border border-white space-y-5">
                <div className="flex items-center justify-between border-b border-orange-100/80 pb-3.5">
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-brand-coral bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100"><i className="fa-solid fa-sparkles mr-1" /> Interactive Quick Tool</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1.5">Find Your Kid's Room</h3>
                  </div>
                  <div className="text-right"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-full inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open Sun</span></div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Select Your Child's Age:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(heroRoomData).map(([key, value]) => {
                       const iconMap = {
                         youngBelievers: 'fa-compass',
                         trailblazers: 'fa-fire',
                         impact: 'fa-bolt',
                         legacy: 'fa-mountain',
                       };
                      const cardClass = heroAge === key ? 'hero-age-btn active p-3 rounded-2xl border-2 border-brand-coral bg-rose-50 text-slate-900 font-bold text-xs flex items-center gap-2 shadow-sm transition-all text-left' : 'hero-age-btn p-3 rounded-2xl border-2 border-slate-200/80 bg-white hover:border-amber-300 text-slate-900 font-bold text-xs flex items-center gap-2 transition-all text-left';
                      return (
                        <button key={key} onClick={() => setHeroAge(key)} className={cardClass}>
                           <div className={`w-8 h-8 rounded-xl ${key === 'youngBelievers' ? 'bg-emerald-100 text-emerald-700' : key === 'trailblazers' ? 'bg-purple-100 text-purple-700' : key === 'impact' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                            <i className={`fa-solid ${iconMap[key]}`} />
                          </div>
                          <div>
                             <div className="font-bold text-slate-900">{key === 'youngBelievers' ? 'Grades 3-5' : key === 'trailblazers' ? 'Grades 6-9' : key === 'impact' ? 'Grades 10-13' : 'Grades 14-17'}</div>
                             <div className="text-[10px] text-slate-500 font-normal">{key === 'youngBelievers' ? 'Young Believers' : key === 'trailblazers' ? 'Trailblazers' : key === 'impact' ? 'Impact Crew' : 'Legacy Team'}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-orange-100 shadow-sm space-y-2 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-slate-900 text-base">{heroInfo.title}</span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${heroInfo.ratioBg}`}>{heroInfo.ratio}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{heroInfo.desc}</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs"><i className="fa-regular fa-clock text-brand-yellow text-sm" /><span><strong>Sunday Service:</strong> 9:00 AM & 11:00 AM</span></div>
                  <button onClick={() => openModal('preregister')} className="px-3 py-1.5 bg-brand-coral hover:bg-red-500 text-white font-bold text-[11px] rounded-xl transition flex-shrink-0 shadow">Register <i className="fa-solid fa-arrow-right ml-0.5" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-14 sm:py-16 bg-white relative scroll-mt-24" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest bg-orange-50 px-4 py-1.5 rounded-full">First Time Visiting?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Simple 4-Step Sunday Experience</h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">We know visiting a new church with kids can feel overwhelming. Here is exactly how we ensure a smooth, joyous morning for your family!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {[{step:'1', title:'Welcome & Check-In', text:'Head to the Heartfelt Kids Check-In Desk in the main lobby. Our greeters will answer any questions and assist you.'}, {step:'2', title:'Secure Name Tags', text:'Your child receives a custom tag with allergies/notes, while you receive a matching security pickup claim code.'}, {step:'3', title:'Classroom Drop-Off', text:'Walk your child to their room, meet their leaders, and head to worship knowing they are safe and loved.'}, {step:'4', title:'Tag Match Pick-Up', text:'After service, show your security badge at the classroom door. No child is released without a tag match.'}].map((item, index) => (
              <div key={item.step} className="bg-[#FFF9F5] p-6 rounded-3xl border border-orange-100 card-hover-bounce relative" data-reveal data-reveal-delay={index * 80}>
                <div className={`w-12 h-12 ${index === 0 ? 'bg-brand-coral text-white' : index === 1 ? 'bg-brand-yellow text-slate-900' : index === 2 ? 'bg-brand-green text-white' : 'bg-brand-purple text-white'} rounded-2xl flex items-center justify-center font-display font-bold text-2xl shadow-md mb-4`}>{item.step}</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="classrooms" className="py-14 sm:py-24 bg-gradient-to-b from-[#FFF9F5] to-white scroll-mt-24" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-purple font-bold text-xs uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full">Tailored Worship & Teaching</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Explore Our Classrooms</h2>
            <p className="text-slate-600 mt-2 text-base">Select an age group to see what your child will experience every Sunday.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { key: 'youngBelievers', label: 'Young Believers (Grades 3-5)', icon: 'fa-compass', active: 'bg-brand-coral text-white border-brand-coral shadow-md' },
              { key: 'trailblazers', label: 'Trailblazers (Grades 6-9)', icon: 'fa-fire', active: 'bg-white text-slate-700 border-slate-200 hover:border-brand-yellow' },
              { key: 'impact', label: 'Impact Crew (Grades 10-13)', icon: 'fa-bolt', active: 'bg-white text-slate-700 border-slate-200 hover:border-brand-green' },
              { key: 'legacy', label: 'Legacy Team (Grades 14-17)', icon: 'fa-mountain', active: 'bg-white text-slate-700 border-slate-200 hover:border-brand-purple' },
            ].map((tab) => (
              <button key={tab.key} onClick={() => setHeroAge(tab.key)} className={`px-6 py-3 rounded-2xl font-bold text-sm sm:text-base border-2 transition-all flex items-center gap-2 ${heroAge === tab.key ? tab.active : 'bg-white text-slate-700 border-slate-200 hover:border-brand-coral'}`}>
                <i className={`fa-solid ${tab.icon}`} /> {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl transition-all duration-300" data-reveal data-reveal-delay="120">
            {heroAge === 'youngBelievers' ? (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs"><i className="fa-solid fa-compass" /> Grades 3-5</div>
                   <h3 className="font-display text-3xl font-bold text-slate-900">Young Believers</h3>
                   <p className="text-slate-600 leading-relaxed">Building strong biblical foundations through interactive worship, creative storytelling, and age-appropriate discussions that help kids discover God's amazing love.</p>
                   <div className="grid sm:grid-cols-2 gap-4 pt-2"><div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-brand-green" /> Bible Exploration</h4><p className="text-xs text-slate-600 mt-1">Interactive lessons and object lessons that bring Scripture to life.</p></div><div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-brand-green" /> Creative Arts & Worship</h4><p className="text-xs text-slate-600 mt-1">High-energy praise songs, memory verse games, and hands-on craft activities.</p></div></div>
                   <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4"><i className="fa-solid fa-quote-left text-2xl text-brand-yellow" /><p className="text-xs sm:text-sm italic">"Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these." — Matthew 19:14</p></div>
                </div>
                <div className="lg:col-span-5 flex justify-center"><div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-emerald-200 to-sky-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-emerald-200/50"><div className="w-24 h-24 rounded-full bg-white text-brand-green flex items-center justify-center text-5xl shadow-md mb-4"><i className="fa-solid fa-compass" /></div><h4 className="font-display text-2xl font-bold text-slate-800">Bible Discovery</h4><p className="text-xs text-slate-600 mt-2">Kids learn how to navigate the Bible and apply God's word at school & home.</p></div></div>
              </div>
             ) : heroAge === 'trailblazers' ? (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-xs"><i className="fa-solid fa-fire" /> Grades 6-9</div>
                   <h3 className="font-display text-3xl font-bold text-slate-900">Trailblazers</h3>
                   <p className="text-slate-600 leading-relaxed">Guiding pre-teens through real-life questions with engaging lessons, authentic small group connections, and meaningful service opportunities that build unshakeable faith.</p>
                   <div className="grid sm:grid-cols-2 gap-4 pt-2"><div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-brand-purple" /> Real Life Q&A</h4><p className="text-xs text-slate-600 mt-1">Open, safe discussions about identity, faith, friendship & peer pressure.</p></div><div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-brand-purple" /> Leadership Opportunities</h4><p className="text-xs text-slate-600 mt-1">Pre-teens help with AV tech, welcome greeting, and prayer ministry.</p></div></div>
                   <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4"><i className="fa-solid fa-quote-left text-2xl text-brand-yellow" /><p className="text-xs sm:text-sm italic">"Don't let anyone look down on you because you are young, but set an example." — 1 Timothy 4:12</p></div>
                </div>
                <div className="lg:col-span-5 flex justify-center"><div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-purple-200 to-indigo-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-purple-200/50"><div className="w-24 h-24 rounded-full bg-white text-brand-purple flex items-center justify-center text-5xl shadow-md mb-4"><i className="fa-solid fa-fire" /></div><h4 className="font-display text-2xl font-bold text-slate-800">Next-Gen Leaders</h4><p className="text-xs text-slate-600 mt-2">Equipping pre-teens with unshakeable confidence in Christ!</p></div></div>
              </div>
             ) : heroAge === 'impact' ? (
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs"><i className="fa-solid fa-bolt" /> Grades 10-13</div>
                   <h3 className="font-display text-3xl font-bold text-slate-900">Impact Crew</h3>
                   <p className="text-slate-600 leading-relaxed">Equipping teens with relevant biblical truth, authentic community, and leadership roles that prepare them to stand firm in their faith and make a lasting impact.</p>
                   <div className="grid sm:grid-cols-2 gap-4 pt-2"><div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-blue-600" /> Small Group Discipleship</h4><p className="text-xs text-slate-600 mt-1">Authentic conversations with trained mentors who genuinely care.</p></div><div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-blue-600" /> Service Projects</h4><p className="text-xs text-slate-600 mt-1">Putting faith into action through local outreach and community service.</p></div></div>
                    <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4"><i className="fa-solid fa-quote-left text-2xl text-brand-yellow" /><p className="text-xs sm:text-sm italic">"For we are God's handiwork, created in Christ Jesus to do good works." — Ephesians 2:10</p></div>
                 </div>
                 <div className="lg:col-span-5 flex justify-center"><div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-blue-200 to-sky-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-blue-200/50"><div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-5xl shadow-md mb-4"><i className="fa-solid fa-bolt" /></div><h4 className="font-display text-2xl font-bold text-slate-800">Bold Faith</h4><p className="text-xs text-slate-600 mt-2">Standing firm in God's truth and shining bright in a world that needs His light.</p></div></div>
              </div>
             ) : (
               <div className="grid lg:grid-cols-12 gap-8 items-center">
                 <div className="lg:col-span-7 space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs"><i className="fa-solid fa-mountain" /> Grades 14-17</div>
                   <h3 className="font-display text-3xl font-bold text-slate-900">Legacy Team</h3>
                   <p className="text-slate-600 leading-relaxed">Preparing young adults to own their faith through deep discussions, mentorship relationships, and real-world application of God's Word.</p>
                   <div className="grid sm:grid-cols-2 gap-4 pt-2"><div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-indigo-600" /> Deep Discipleship</h4><p className="text-xs text-slate-600 mt-1">Mentorship with youth leaders who disciple them through high school years.</p></div><div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100"><h4 className="font-bold text-slate-900 text-sm flex items-center gap-2"><i className="fa-solid fa-check text-indigo-600" /> Real-World Faith</h4><p className="text-xs text-slate-600 mt-1">Practical biblical living for college, career, and calling.</p></div></div>
                   <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4"><i className="fa-solid fa-quote-left text-2xl text-brand-yellow" /><p className="text-xs sm:text-sm italic">"Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." — Joshua 1:9</p></div>
                 </div>
                 <div className="lg:col-span-5 flex justify-center"><div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-indigo-200 to-purple-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-indigo-200/50"><div className="w-24 h-24 rounded-full bg-white text-indigo-600 flex items-center justify-center text-5xl shadow-md mb-4"><i className="fa-solid fa-mountain" /></div><h4 className="font-display text-2xl font-bold text-slate-800">Unshakeable Faith</h4><p className="text-xs text-slate-600 mt-2">Prepared to lead and live out their faith wherever God calls them.</p></div></div>
               </div>
            )}
          </div>
        </div>
      </section>

      <section id="safety" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24" data-reveal>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue opacity-10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs uppercase tracking-wider border border-teal-500/30"><i className="fa-solid fa-shield-heart" /> Safety Uncompromised</div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">Your Child’s Safety Is Our Highest Priority</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">We know that you can only enjoy service when you know your children are 100% safe. We enforce rigorous safety policies across every single classroom.</p>
              <div className="pt-2"><button onClick={() => openModal('preregister')} className="px-6 py-3.5 bg-brand-yellow text-slate-900 font-bold rounded-2xl hover:bg-amber-300 transition shadow flex items-center gap-2 text-sm"><i className="fa-solid fa-lock" /> Experience Secure Sunday Check-In</button></div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[{icon:'fa-user-check', title:'Background Screened', text:'Every leader undergoes nationwide criminal background checks and in-person pastoral interviews before serving.'}, {icon:'fa-kit-medical', title:'CPR & First Aid Certified', text:'Key ministry directors and safety team members in every hall are trained in emergency response and CPR.'}, {icon:'fa-key', title:'Secure Tag Matching', text:'Unique computer-generated claim numbers match child to parent. No child leaves without matching tags.'}, {icon:'fa-wheat-awn-circle-exclamation', title:'Allergy Awareness', text:'Special dietary restrictions and medical notes are clearly printed in bold directly onto your child’s tag.'}].map((item, index) => (
                <div key={item.title} className="p-6 bg-slate-800/80 rounded-3xl border border-slate-700 hover:border-teal-400 transition-colors" data-reveal data-reveal-delay={index * 70}>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl mb-4"><i className={`fa-solid ${item.icon}`} /></div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-14 sm:py-24 bg-white relative scroll-mt-24" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-coral font-bold text-xs uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full"><i className="fa-solid fa-camera mr-1 text-brand-coral" /> Sunday & Activity Picture Spots</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Life & Joy at Heartfelt Kids</h2>
            <p className="text-slate-600 mt-2 text-base">Take a peek into our sports games, creative craft stations, praise sessions, and family photo spots!</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {['all', 'sports', 'worship', 'crafts', 'photospot'].map((filter) => (
              <button key={filter} onClick={() => setGalleryFilter(filter)} className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${galleryFilter === filter ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                {filter === 'all' ? '✨ All Moments' : filter === 'sports' ? '⚽ Sports & Rec Games' : filter === 'worship' ? '🎵 Praise & Worship' : filter === 'crafts' ? '🎨 Crafts & Story Time' : '📸 Family Selfie Wall'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((card, index) => (
              <div key={card.id} className="photo-card group bg-[#FFF9F5] rounded-3xl overflow-hidden border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col" data-reveal data-reveal-delay={index * 70}>
                <div className="relative overflow-hidden aspect-video bg-slate-100 cursor-pointer" onClick={() => openLightbox(card)}>
                  <img src={card.image} onError={(e) => { e.currentTarget.src = card.fallback; }} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-brand-coral/90 backdrop-blur-md text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider"><i className="fa-solid fa-volleyball mr-1" /> {card.tag}</span>
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1"><i className="fa-solid fa-expand text-lg" /> Expand Picture</div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span><i className="fa-solid fa-location-dot text-brand-coral mr-1" /> {card.location}</span>
                      <span>{card.badge}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-coral transition-colors">{card.title}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{card.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-orange-100 flex items-center justify-between">
                    <button onClick={() => handleLike(card.id)} className={`text-xs font-bold flex items-center gap-1.5 transition ${likedCards[card.id] ? 'text-brand-coral' : 'text-slate-600 hover:text-brand-coral'}`}>
                      <i className={`${likedCards[card.id] ? 'fa-solid' : 'fa-regular'} fa-heart text-brand-coral ${likedCards[card.id] ? 'animate-bounce' : ''}`} /> <span className="like-count">{card.likes + (likedCards[card.id] ? 1 : 0)}</span> Likes
                    </button>
                    <span className="text-[11px] font-semibold text-brand-coral">{card.age}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verse-hub" className="py-16 bg-[#FFF9F5] border-t border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-coral to-red-500 rounded-4xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10 text-center space-y-6">
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white"><i className="fa-solid fa-star text-brand-yellow mr-1" /> Verse of the Week</span>
              <h2 id="verse-display-text" className="font-display text-2xl sm:text-4xl font-extrabold leading-snug max-w-3xl mx-auto">{verseHidden ? '"Trust in the ______ with all your ______ and lean not on your own _______________"' : '"Trust in the LORD with all your heart and lean not on your own understanding."'}</h2>
              <p className="text-brand-yellow font-bold text-lg">— Proverbs 3:5</p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button onClick={toggleVerse} className="px-6 py-3 bg-white text-brand-coral font-bold rounded-2xl hover:bg-orange-50 transition shadow-md flex items-center gap-2 text-sm"><i className="fa-solid fa-eye-slash" /> <span>{verseHidden ? 'Show Full Verse' : 'Practice / Hide Words'}</span></button>
                <button onClick={speakVerse} className="px-6 py-3 bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl transition flex items-center gap-2 text-sm"><i className="fa-solid fa-volume-high" /> Listen Verse</button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 grid sm:grid-cols-2 gap-4 text-left bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-white text-brand-coral flex items-center justify-center font-bold flex-shrink-0"><i className="fa-solid fa-file-pdf" /></div><div><h4 className="font-bold text-white text-sm">Download Weekly Take-Home Guide</h4><p className="text-xs text-orange-100 mt-1">3 simple dinnertime discussion prompts for parents.</p></div></div>
                <div className="flex items-center justify-end"><button onClick={() => showToast('Downloading Family Devotional Guide (PDF)...', 'fa-file-arrow-down')} className="w-full sm:w-auto px-5 py-2.5 bg-brand-yellow text-slate-900 font-bold text-xs rounded-xl hover:bg-amber-300 transition shadow"><i className="fa-solid fa-download mr-1" /> Get Parent Guide (PDF)</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full">Fun Beyond Sunday</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Upcoming Family Events</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">Mark your calendars for our special community gatherings, family nights, and seasonal kids camps!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[{badge:'Summer Highlight', date:'July 15 - 18', title:'Kids Adventure VBS Week', body:'A 4-day action-packed evening camp filled with games, crafts, worship, and big Bible adventures for ages 4–11.', time:'6:00 PM – 8:30 PM', button:'RSVP Free'}, {badge:'Family Fun', date:'August 5', title:'Popcorn & Movie Night', body:'Bring blankets and lawn chairs for an outdoor family film screening under the stars with free popcorn!', time:'6:30 PM Lawn', button:'RSVP Free'}, {badge:'Parenting Workshop', date:'Sept 12', title:'Raising Resilient Faith', body:'A practical 2-hour seminar for parents on guiding children through digital culture with Christian grace.', time:'10:00 AM – Noon', button:'Register'}].map((event, index) => (
              <div key={event.title} className="bg-[#FFF9F5] rounded-3xl p-6 border border-orange-100 shadow-sm card-hover-bounce flex flex-col justify-between" data-reveal data-reveal-delay={index * 80}>
                <div>
                  <div className="flex items-center justify-between mb-4"><span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">{event.badge}</span><span className="text-xs font-semibold text-slate-500"><i className="fa-regular fa-calendar" /> {event.date}</span></div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{event.body}</p>
                </div>
                <div className="pt-4 border-t border-orange-200/50 flex items-center justify-between"><span className="text-xs font-bold text-slate-700"><i className="fa-solid fa-clock text-brand-coral mr-1" /> {event.time}</span><button onClick={() => openModal('rsvp')} className="px-4 py-2 bg-brand-coral text-white font-bold text-xs rounded-xl hover:bg-red-500 transition">{event.button}</button></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-24 bg-[#FFF9F5] border-t border-orange-100 scroll-mt-24" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-coral font-bold text-xs uppercase tracking-widest bg-rose-100 px-4 py-1.5 rounded-full">Parent Testimonials</span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900">Loved by Kids, Trusted by Parents</h2>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-orange-100 shadow-md space-y-4">
                <div className="flex text-amber-400 gap-1 text-sm"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">"As a first-time parent at church, I was nervous about leaving my 2-year-old. The Heartfelt team made us feel so secure! Now my daughter begs us to go to church every Sunday morning."</p>
                <div className="flex items-center gap-3 pt-2"><div className="w-10 h-10 rounded-full bg-brand-yellow text-slate-900 font-bold flex items-center justify-center font-display">MS</div><div><h4 className="font-bold text-slate-900 text-sm">Maria S.</h4><p className="text-xs text-slate-500">Mom of 2 (Ages 2 & 6)</p></div></div>
              </div>
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-3xl text-white space-y-3">
                <h3 className="font-display font-bold text-lg text-brand-yellow">Want to make a difference?</h3>
                <p className="text-xs text-slate-300">Join our team of passionate volunteers who shape the next generation!</p>
                <button onClick={() => openModal('volunteer')} className="px-4 py-2 bg-brand-coral hover:bg-red-500 text-white font-bold text-xs rounded-xl transition">Apply to Serve <i className="fa-solid fa-arrow-right ml-1" /></button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" data-reveal data-reveal-delay={faq.id * 70}>
                  <button onClick={() => setActiveFaq(activeFaq === faq.id ? 0 : faq.id)} className="w-full px-6 py-4 text-left font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50">
                    <span>{faq.question}</span>
                    <i className={`fa-solid fa-chevron-down text-brand-coral transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === faq.id && <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-coral to-brand-yellow flex items-center justify-center text-white"><i className="fa-solid fa-heart text-xl" /></div><span className="font-display font-bold text-2xl text-white">Heartfelt<span className="text-brand-coral">Kids</span></span></div>
              <p className="text-xs text-slate-400 leading-relaxed">Loving God, loving kids, and serving families every week. Building a faith foundation that lasts a lifetime.</p>
              <div className="flex gap-3 text-slate-400"><a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-coral hover:text-white transition"><i className="fa-brands fa-facebook-f text-xs" /></a><a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-coral hover:text-white transition"><i className="fa-brands fa-instagram text-xs" /></a><a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-coral hover:text-white transition"><i className="fa-brands fa-youtube text-xs" /></a></div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="hover:text-brand-yellow transition">First-Time Visitors</a></li>
                <li><a href="#classrooms" className="hover:text-brand-yellow transition">Classrooms & Ages</a></li>
                <li><a href="#safety" className="hover:text-brand-yellow transition">Safety Protocols</a></li>
                <li><a href="#verse-hub" className="hover:text-brand-yellow transition">Weekly Verses</a></li>
                <li><a href="#events" className="hover:text-brand-yellow transition">Kids Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base mb-4">Gathering Times</h4>
              <p className="text-xs text-slate-400 mb-2"><strong className="text-slate-200">Sundays:</strong> 9:00 AM & 11:00 AM</p>
              <p className="text-xs text-slate-400 mb-2"><strong className="text-slate-200">Wednesdays:</strong> 6:30 PM Clubs</p>
              <p className="text-xs text-slate-400 mt-4"><i className="fa-solid fa-envelope mr-1 text-brand-coral" /> kids@heartfeltchurch.org</p>
              <p className="text-xs text-slate-400"><i className="fa-solid fa-phone mr-1 text-brand-coral" /> (555) 839-5437</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base mb-4">Parent Newsletter</h4>
              <p className="text-xs text-slate-400 mb-3">Get weekly Bible discussion cards & event alerts straight to your inbox.</p>
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input type="email" required placeholder="Parent email address..." className="w-full px-3 py-2 bg-slate-800 text-white rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral border border-slate-700" />
                <button type="submit" className="w-full py-2 bg-brand-coral hover:bg-red-500 text-white font-bold text-xs rounded-xl transition">Subscribe Family Update</button>
              </form>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; 2026 Heartfelt Children's Ministry. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0"><a href="#" className="hover:underline">Privacy Policy</a><a href="#" className="hover:underline">Terms of Safety</a><a href="#" className="hover:underline">Check-In Login</a></div>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`bg-white rounded-3xl shadow-2xl relative overflow-y-auto ${modal === 'preregister' ? 'w-full max-w-xl p-6 sm:p-8 max-h-[90vh]' : modal === 'volunteer' ? 'w-full max-w-md p-6' : 'w-full max-w-sm p-6 text-center'}`}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold"><i className="fa-solid fa-xmark" /></button>
            {modal === 'preregister' ? (
              <>
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-2xl bg-orange-100 text-brand-coral flex items-center justify-center font-bold text-lg"><i className="fa-solid fa-clipboard-user" /></div><div><h3 className="font-display font-bold text-2xl text-slate-900">Pre-Register Your Kids</h3><p className="text-xs text-slate-500">Save time at Sunday check-in by filling this out now!</p></div></div>
                <form onSubmit={(e) => submitForm(e, 'Success! Your family is pre-registered. See you Sunday!')} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3"><div><label className="block text-xs font-bold text-slate-700 mb-1">Parent First Name *</label><input type="text" required placeholder="e.g. Sarah" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-coral outline-none" /></div><div><label className="block text-xs font-bold text-slate-700 mb-1">Parent Last Name *</label><input type="text" required placeholder="e.g. Miller" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-coral outline-none" /></div></div>
                  <div className="grid sm:grid-cols-2 gap-3"><div><label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone (For Security SMS) *</label><input type="tel" required placeholder="(555) 000-0000" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-coral outline-none" /></div><div><label className="block text-xs font-bold text-slate-700 mb-1">Preferred Sunday Service *</label><select required className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-coral outline-none"><option value="">Select Service Time</option><option value="9am">9:00 AM Service</option><option value="11am">11:00 AM Service</option></select></div></div>
                  <hr className="border-slate-100 my-2" />
                  <div><h4 className="font-bold text-sm text-slate-800 mb-2 flex items-center justify-between"><span>Child Details</span><span className="text-xs font-normal text-slate-500">Add info for each child</span></h4><div className="space-y-3"><div className="p-3 bg-orange-50/50 rounded-2xl border border-orange-100 space-y-3"><div className="grid sm:grid-cols-3 gap-2"><div className="sm:col-span-2"><label className="block text-xs font-semibold text-slate-600 mb-1">Child Full Name</label><input type="text" required placeholder="e.g. Leo Miller" className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none" /></div><div><label className="block text-xs font-semibold text-slate-600 mb-1">Age / Grade</label><input type="text" required placeholder="e.g. 4 yrs" className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none" /></div></div><div><label className="block text-xs font-semibold text-slate-600 mb-1">Allergies / Special Instructions</label><input type="text" placeholder="e.g. Peanut allergy, asthma, none" className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none" /></div></div></div></div>
                  <div className="pt-2"><button type="submit" className="w-full py-3 bg-brand-coral hover:bg-red-500 text-white font-bold rounded-xl shadow transition">Complete Pre-Registration</button></div>
                </form>
              </>
            ) : modal === 'volunteer' ? (
              <>
                <div className="text-center mb-6"><div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-purple flex items-center justify-center font-bold text-xl mx-auto mb-2"><i className="fa-solid fa-hands-holding-child" /></div><h3 className="font-display font-bold text-2xl text-slate-900">Serve in Heartfelt Kids</h3><p className="text-xs text-slate-500 mt-1">Invest in the next generation! Fill out this quick inquiry.</p></div>
                <form onSubmit={(e) => submitForm(e, 'Thank you! Our kids coordinator will contact you shortly.')} className="space-y-3"><div><label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label><input type="text" required placeholder="Your name" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none" /></div><div><label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label><input type="email" required placeholder="you@example.com" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none" /></div><div><label className="block text-xs font-bold text-slate-700 mb-1">Preferred Age Group to Serve</label><select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none"><option>Young Believers (Grades 3-5)</option><option>Trailblazers (Grades 6-9)</option><option>Impact Crew (Grades 10-13)</option><option>Legacy Team (Grades 14-17)</option><option>Check-In Host / Greeter</option></select></div><button type="submit" className="w-full py-3 bg-brand-purple hover:bg-purple-700 text-white font-bold rounded-xl transition text-xs uppercase tracking-wider">Submit Volunteer Inquiry</button></form>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center font-bold text-xl mx-auto mb-2"><i className="fa-solid fa-calendar-check" /></div>
                <h3 className="font-display font-bold text-xl text-slate-900">RSVP Event</h3>
                <p className="text-xs text-slate-500 my-2">Let us know how many family members are coming!</p>
                <form onSubmit={(e) => submitForm(e, 'Event RSVP saved! We can\'t wait to see you there.')} className="space-y-3 mt-4"><input type="text" required placeholder="Your Name" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none" /><input type="number" min="1" max="10" required placeholder="Number of attendees" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none" /><button type="submit" className="w-full py-2.5 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-xl transition text-xs">Confirm Attendance</button></form>
              </>
            )}
          </div>
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center font-bold"><i className="fa-solid fa-xmark" /></button>
            <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden"><img src={lightbox.image} onError={(e) => { e.currentTarget.src = lightbox.fallback; }} alt={lightbox.title} className="w-full h-full object-contain" /></div>
            <div className="p-6 space-y-2"><div className="flex items-center gap-2"><span className="px-3 py-1 bg-rose-100 text-rose-800 font-extrabold text-[10px] rounded-full uppercase tracking-wider">{lightbox.tag}</span><span className="text-xs text-slate-400 font-semibold">Heartfelt Kids Gallery</span></div><h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">{lightbox.title}</h3><p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{lightbox.description}</p></div>
          </div>
        </div>
      )}

      <div className={`fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl transform transition-all duration-300 flex items-center gap-3 border border-slate-700 text-sm ${toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="text-brand-yellow font-bold"><i className={`fa-solid ${toast.icon}`} /></div>
        <div className="font-medium">{toast.message}</div>
      </div>
    </div>
  );
}

export default App;
