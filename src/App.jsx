import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, BookOpen, Music, Palette, Gamepad2, Users, Calendar, Clock,
  ShieldCheck, ChevronLeft, ChevronRight, Menu, X, CheckCircle, Phone,
  Mail, MapPin, Sparkles, Star, ArrowRight, Play, Send, Award, Smile,
  Volume2, VolumeX, Eye, EyeOff, HelpCircle, ChevronDown, ChevronUp, RefreshCw, CheckCircle2
} from 'lucide-react';

import revivalImg from './images/serving 3.jpg';
import regaliaImg from './images/revival.jpg';
import intercessionImg from './images/prayer.jpg';

const HERO_SLIDES = [
  {
    id: 1,
    image: revivalImg,
    title: "Where Faith Grows in Little Hearts",
    subtitle: "Nurturing the next generation in God's love, wisdom, and joy every Sunday in Harare.",
    badge: "Welcome to Heartfelt Kids"
  },
  {
    id: 2,
    image: regaliaImg,
    title: "Vibrant Praise & Inspired Worship",
    subtitle: "Dynamic kid-friendly worship sessions where children discover their praise and purpose.",
    badge: "Sunday Worship Experience"
  },
  {
    id: 3,
    image: intercessionImg,
    title: "Safe, Creative & Joy-Filled Spaces",
    subtitle: "Interactive Bible teaching, crafts, and games tailored for every age group.",
    badge: "Discipleship for Kids"
  }
];

const SCHEDULE_DATA = [
  {
    id: 'toddlers',
    age: 'Ages 3-5',
    title: 'Toddlers Kingdom',
    time: '9:00 AM - 11:00 AM',
    room: 'Room 101 - Bright Sparks Wing',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800',
    description: 'Sensory storytelling, cheerful action songs, nap/play breaks, and foundational Bible lessons.',
    highlights: ['Action Songs & Rhymes', 'Interactive Puppet Stories', 'Safe Soft-Play Area']
  },
  {
    id: 'juniors',
    age: 'Ages 6-9',
    title: 'Juniors Discovery',
    time: '9:00 AM - 11:00 AM',
    room: 'Room 104 - Joy Hall',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800',
    description: 'Engaging illustrated scripture study, group craft work, memory verses, and team building games.',
    highlights: ['Illustrated Bible Lessons', 'Creative Craft Workshops', 'Scripture Memory Challenges']
  },
  {
    id: 'preteens',
    age: 'Ages 10-12',
    title: 'Pre-Teen Champions',
    time: '9:00 AM - 11:00 AM',
    room: 'Auditorium B - Youth Center',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    description: 'Practical faith discussions, leadership building, live modern worship, and peer mentorship.',
    highlights: ['Peer Discussion Groups', 'Youth Worship Band', 'Community Service Projects']
  }
];

const PROGRAM_DATA = [
  {
    id: 1,
    title: '📖 Bible Stories & Dramas',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Age-appropriate Bible lessons that bring God’s Word to life through drama and visual storytelling.',
    fullDesc: 'Our curriculum takes children through key biblical narratives using theatrical re-enactments, animated visual aids, and interactive Q&A that help scripture stick for a lifetime.'
  },
  {
    id: 2,
    title: '🎵 Worship & Praise',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'High-energy, kid-centric worship songs with actions that fill little hearts with boundless joy.',
    fullDesc: 'Led by dedicated youth ministers, our worship service includes live music, percussion play for toddlers, and dance routines that empower children to express their love for God.'
  },
  {
    id: 3,
    title: '🎨 Hands-on Crafts',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Creative art projects and craft stations designed to reinforce weekly biblical truths.',
    fullDesc: 'Every Sunday features a customized art activity. Children create take-home mementos like scripture banners, prayer jars, and theme crafts that keep families connected to the lesson at home.'
  },
  {
    id: 4,
    title: '⚽ Team Games & Fun',
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Supervised, safe games and physical activities that teach teamwork, patience, and kindness.',
    fullDesc: 'From outdoor relays on our lawn to indoor teamwork puzzles, game time builds friendships, healthy energy release, and practical Christian sportsmanship values.'
  }
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What time should I arrive for Sunday school check-in?",
    answer: "Our check-in stations open at 8:30 AM before the 9:00 AM service. We recommend arriving 10-15 minutes early so our team can help you check in your child smoothly."
  },
  {
    id: 2,
    question: "How does the child safety & security check-in work?",
    answer: "Upon arrival, parents receive a unique matching security claim tag that corresponds to their child's printed name badge. For safety, children are only released to adults holding the matching security tag."
  },
  {
    id: 3,
    question: "What should I pack for my toddler or preschooler?",
    answer: "Please bring a labeled bag with a change of clothes, a named water bottle or sippy cup, and any required diapers. Please ensure all personal items are clearly labeled with your child's name."
  },
  {
    id: 4,
    question: "Are snacks served during the ministry sessions?",
    answer: "Yes, light, child-friendly snacks and water are served during play breaks. You can specify any food allergies or dietary restrictions in our online registration form or at the check-in desk."
  },
  {
    id: 5,
    question: "How can I volunteer or join the teaching team?",
    answer: "We warmly welcome dedicated volunteers! Click on our 'Volunteer' button on this website to fill out a short sign-up form. All volunteers undergo background checks and safety training."
  }
];

const EVENTS_DATA = [
  {
    id: 1,
    title: "Easter Family Praise & Fun Carnival",
    date: "Saturday, April 11, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Heartfelt Grounds, Harare",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
    description: "An exciting outdoor event featuring live kid praise music, interactive Bible scavenger hunts, face painting, and bouncy castles celebrating Jesus!",
    tag: "Family Event"
  },
  {
    id: 2,
    title: "Vacation Bible School (VBS) 2026: Kingdom Explorers",
    date: "May 18 - 22, 2026",
    time: "8:30 AM - 12:30 PM Daily",
    location: "Kids Auditorium Wing",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
    description: "A 5-day adventure filled with action-packed scripture memory games, scientific Bible experiments, arts, crafts, and high-energy drama worship.",
    tag: "VBS Week"
  },
  {
    id: 3,
    title: "Parent & Child Prayer Breakfast",
    date: "Saturday, June 13, 2026",
    time: "9:00 AM - 11:30 AM",
    location: "Main Fellowship Hall",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    description: "A special morning for parents and kids to enjoy delicious breakfast treats, learn simple family prayer habits, and worship together.",
    tag: "Parent Workshop"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeTab, setActiveTab] = useState('toddlers');
  const [toastMessage, setToastMessage] = useState('');

  const VERSE_FULL = "Trust in the LORD with all your heart and lean not on your own understanding.";
  const VERSE_REF = "Proverbs 3:5";
  const verseWords = VERSE_FULL.split(" ");

  const [hiddenIndices, setHiddenIndices] = useState([]);
  const [hideLevel, setHideLevel] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Zephyr');

  const [openFaq, setOpenFaq] = useState(1);

  const [rsvpEvent, setRsvpEvent] = useState(null);
  const [rsvpForm, setRsvpForm] = useState({ parentName: '', phone: '', kidsCount: 1 });

  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Teacher'
  });

  const [regForm, setRegForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '3-5',
    notes: ''
  });
  const [regSuccess, setRegSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleHideLevelChange = (level) => {
    setHideLevel(level);
    if (level === 0) {
      setHiddenIndices([]);
    } else if (level === 1) {
      const indicesToHide = [1, 4, 7, 10];
      setHiddenIndices(indicesToHide);
    } else if (level === 2) {
      const indicesToHide = [0, 1, 3, 4, 6, 7, 9, 10, 12];
      setHiddenIndices(indicesToHide);
    } else if (level === 3) {
      setHiddenIndices(verseWords.map((_, i) => i));
    }
  };

  const toggleWordHide = (idx) => {
    if (hiddenIndices.includes(idx)) {
      setHiddenIndices(hiddenIndices.filter(i => i !== idx));
    } else {
      setHiddenIndices([...hiddenIndices, idx]);
    }
  };

  const pcmToWav = (pcm16, sampleRate) => {
    const buffer = new ArrayBuffer(44 + pcm16.length * 2);
    const view = new DataView(buffer);

    const writeString = (v, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        v.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + pcm16.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, pcm16.length * 2, true);

    let offset = 44;
    for (let i = 0; i < pcm16.length; i++, offset += 2) {
      view.setInt16(offset, pcm16[i], true);
    }

    return new Blob([buffer], { type: 'audio/wav' });
  };

  const speakVerse = async () => {
    if (isSpeaking) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    const verseText = `${VERSE_FULL} - ${VERSE_REF}`;

    try {
      const payload = {
        contents: [{
          parts: [{ text: `Recite clearly and cheerfully for children: "${verseText}"` }]
        }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice }
            }
          }
        },
        model: "gemini-2.5-flash-preview-tts"
      };

      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      const part = result?.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType;

      if (audioData && mimeType && mimeType.startsWith("audio/")) {
        const rateMatch = mimeType.match(/rate=(\d+)/);
        const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;

        const binaryString = atob(audioData);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        const pcm16 = new Int16Array(bytes.buffer);
        const wavBlob = pcmToWav(pcm16, sampleRate);
        const audioUrl = URL.createObjectURL(wavBlob);

        const audio = new Audio(audioUrl);
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => fallbackWebSpeech(verseText);
        await audio.play();
      } else {
        fallbackWebSpeech(verseText);
      }
    } catch (err) {
      fallbackWebSpeech(verseText);
    }
  };

  const fallbackWebSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsSpeaking(false);
      showToast("Audio playback isn't supported on this browser.");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regForm.parentName || !regForm.phone || !regForm.childName) {
      showToast('Please fill out all required fields.');
      return;
    }
    setRegSuccess(true);
    showToast('Registration submitted successfully! We look forward to seeing you.');
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteerForm.name || !volunteerForm.phone) {
      showToast('Please enter your contact information.');
      return;
    }
    setIsVolunteerModalOpen(false);
    showToast(`Thank you ${volunteerForm.name}! Our team will contact you shortly.`);
    setVolunteerForm({ name: '', email: '', phone: '', role: 'Teacher' });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpForm.parentName || !rsvpForm.phone) {
      showToast("Please enter your name and phone number.");
      return;
    }
    showToast(`RSVP Confirmed for ${rsvpEvent.title}! See you there.`);
    setRsvpEvent(null);
    setRsvpForm({ parentName: '', phone: '', kidsCount: 1 });
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">

      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-red-500/30 animate-bounce">
          <Sparkles className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1">
                  HEARTFELT <span className="text-red-600">KIDS</span>
                </span>
                <span className="block text-xs sm:text-xs font-semibold text-slate-600 tracking-wider uppercase">
                  Harare, Zimbabwe
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-7 font-medium text-slate-700 text-sm">
              <button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('verse')} className="hover:text-red-600 transition-colors">Verse of the Week</button>
              <button onClick={() => scrollToSection('schedule')} className="hover:text-red-600 transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('events')} className="hover:text-red-600 transition-colors">Events</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-red-600 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('volunteer')} className="hover:text-red-600 transition-colors">Volunteer</button>
              <button
                onClick={() => scrollToSection('register')}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 active:scale-95 transition-all"
              >
                Register Child
              </button>
            </nav>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('verse')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Verse of the Week
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Sunday Schedule
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Upcoming Events
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className="block w-full text-left px-3 py-2 text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Volunteer
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="w-full mt-2 bg-red-600 text-white font-semibold py-3 rounded-xl text-center shadow-md shadow-red-600/20"
            >
              Register Child
            </button>
          </div>
        )}
      </header>

      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay" />
          </div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-lg shadow-red-600/30 backdrop-blur-md animate-pulse">
              <Sparkles className="w-4 h-4" />
              {HERO_SLIDES[currentSlide].badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              {HERO_SLIDES[currentSlide].title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed drop-shadow-sm">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollToSection('register')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Register Your Child
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('verse')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-semibold text-lg hover:border-white transition-all text-center"
              >
                Verse of the Week
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="p-3 rounded-full bg-slate-900/60 border border-white/20 text-white hover:bg-red-600 transition-colors backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 px-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className={`block h-3 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-red-600' : 'w-3 bg-white/40 hover:bg-white'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-3 rounded-full bg-slate-900/60 border border-white/20 text-white hover:bg-red-600 transition-colors backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg border-2 border-white group">
                    <img
                      src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
                      alt="Teacher with kids"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg border-2 border-white group">
                    <img
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
                      alt="Children learning Bible"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="overflow-hidden rounded-2xl shadow-lg border-2 border-white group">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
                      alt="Praise and worship kids"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg border-2 border-white group">
                    <img
                      src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600"
                      alt="Craft time joy"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:right-6 sm:bottom-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Safety First</p>
                  <p className="text-sm font-extrabold text-slate-900">Vetted & Loving Staff</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                <Heart className="w-4 h-4 fill-red-600" />
                About Our Ministry
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Building Strong Biblical Foundations with Love, Joy & Excellence
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At <strong className="text-slate-900">Heartfelt Children's Ministry</strong> in Harare, Zimbabwe, we believe children are not just the future of the church—they are a vital part of the church today.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Our mission is to partner with parents to nurture every child in God's Word through age-customized teaching, inspiring worship, creative crafts, and safe fellowship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Biblical Soundness</h4>
                    <p className="text-xs text-slate-500">Christ-centered, age-appropriate scripture studies.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Child Protection</h4>
                    <p className="text-xs text-slate-500">Strict check-in & check-out safety procedures.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Joyful Environment</h4>
                    <p className="text-xs text-slate-500">Games, crafts, and music kids look forward to.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dedicated Teachers</h4>
                    <p className="text-xs text-slate-500">Trained, passionate leaders who care deeply.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section id="verse" className="py-12 sm:py-20 bg-gradient-to-b from-amber-50/70 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-xs bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200 mb-3 shadow-xs">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              Weekly Scripture Memory
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Verse of the Week
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Listen to the verse together or practice memorizing scripture using our interactive <strong className="text-slate-900">Hide Words</strong> challenge!
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-amber-200/80 p-4 sm:p-10 shadow-xl relative overflow-hidden">

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-100/50 rounded-full blur-2xl pointer-events-none sm:-top-12 sm:-right-12 sm:w-40 sm:h-40" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-100/50 rounded-full blur-2xl pointer-events-none sm:-bottom-12 sm:-left-12 sm:w-40 sm:h-40" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={speakVerse}
                  className={`px-5 py-3 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-md ${
                    isSpeaking
                      ? 'bg-red-600 text-white animate-pulse shadow-red-600/30'
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-5 h-5 animate-spin" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5" />
                      Listen Verse (Gemini TTS)
                    </>
                  )}
                </button>

                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                   className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 text-slate-700 outline-none focus:ring-2 focus:ring-amber-400 min-h-[44px]"
                >
                  <option value="Zephyr">Voice: Zephyr (Bright)</option>
                  <option value="Kore">Voice: Kore (Firm)</option>
                  <option value="Puck">Voice: Puck (Upbeat)</option>
                  <option value="Fenrir">Voice: Fenrir (Excitable)</option>
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <span className="text-xs sm:text-xs font-bold text-slate-500 px-1.5 sm:px-2 flex items-center gap-1">
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Practice:
                </span>
                {[
                  { level: 0, label: 'All', labelSm: 'All Shown' },
                  { level: 1, label: 'Easy', labelSm: 'Easy (30%)' },
                  { level: 2, label: 'Hard', labelSm: 'Hard (60%)' },
                  { level: 3, label: 'Hide', labelSm: 'Hide All' }
                ].map((btn) => (
                  <button
                    key={btn.level}
                    onClick={() => handleHideLevelChange(btn.level)}
                    className={`px-2 sm:px-3 py-2 rounded-lg sm:rounded-xl text-xs sm:text-xs font-extrabold transition-all min-h-[44px] min-w-[44px] flex items-center ${
                      hideLevel === btn.level
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="sm:hidden">{btn.label}</span>
                    <span className="hidden sm:inline">{btn.labelSm}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8 text-center space-y-6">

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-relaxed text-slate-800">
                <span className="text-red-500 select-none">\u201c</span>
                {verseWords.map((word, idx) => {
                  const isHidden = hiddenIndices.includes(idx);
                  return (
                    <span
                      key={idx}
                      onClick={() => toggleWordHide(idx)}
                      title="Click to show/hide word"
                      className={`cursor-pointer px-2 py-1 rounded-xl transition-all duration-300 select-none ${
                        isHidden
                          ? 'bg-amber-100 text-amber-800 border-2 border-dashed border-amber-300 min-w-[70px] inline-block font-mono text-center opacity-80 hover:opacity-100'
                          : 'hover:bg-amber-50 hover:text-amber-700'
                      }`}
                    >
                      {isHidden ? "???" : word}
                    </span>
                  );
                })}
                <span className="text-red-500 select-none">\u201d</span>
              </div>

              <div className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-lg sm:text-xl px-6 py-2 rounded-full shadow-md tracking-wide">
                — {VERSE_REF}
              </div>

            </div>

            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/60 flex items-center justify-between gap-4 text-xs sm:text-sm text-amber-900 font-medium">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Tip: Click on any hidden <code className="bg-amber-200/80 px-1.5 py-0.5 rounded font-mono font-bold">???</code> word above to reveal it or hide it again!</span>
              </div>
              <button
                onClick={() => handleHideLevelChange(0)}
                className="text-amber-800 font-extrabold underline hover:text-amber-950 shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg min-h-[44px]"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

          </div>

        </div>
      </section>

      <section id="schedule" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 mb-3">
              <Calendar className="w-4 h-4" />
              Weekly Gatherings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Sunday Schedule & Classes
            </h2>
            <p className="text-slate-600 mt-2">
              Every Sunday from <strong className="text-slate-900">9:00 AM to 11:00 AM</strong>. Classes are tailored specifically for your child's age group.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {SCHEDULE_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] flex items-center justify-center sm:px-5 sm:py-2.5 sm:text-sm ${
                    activeTab === item.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.age}
                </button>
              ))}
            </div>
          </div>

          {SCHEDULE_DATA.filter(item => item.id === activeTab).map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl h-64 sm:h-80 shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {item.age}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-red-600 mb-2">
                      <span className="flex items-center gap-1 bg-red-100/80 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5" /> {item.time}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-200/80 text-slate-700 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5" /> {item.room}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Class Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-800 px-3 py-1.5 rounded-lg shadow-2xs">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => scrollToSection('register')}
                      className="bg-slate-900 hover:bg-red-600 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-md flex items-center gap-2"
                    >
                      Enroll in {item.title}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <section id="events" className="py-12 sm:py-20 bg-slate-50 relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs bg-red-100 px-3.5 py-1.5 rounded-full border border-red-200 mb-3">
              <Calendar className="w-4 h-4" />
              Community & Fellowship
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Upcoming Family Events
            </h2>
            <p className="text-slate-600 mt-2">
              Mark your calendars! Join us for special children and family events throughout the year in Harare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS_DATA.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {evt.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-red-600">
                      <span className="flex items-center gap-1 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                        <Calendar className="w-3.5 h-3.5" /> {evt.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {evt.title}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-500 font-medium">
                      <p className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {evt.time}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {evt.location}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed pt-1">
                      {evt.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setRsvpEvent(evt)}
                    className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                  >
                    RSVP / Reserve Spot
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {rsvpEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-fadeIn text-slate-900">
            <button
              onClick={() => setRsvpEvent(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              RSVP Confirmation
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-1">
              {rsvpEvent.title}
            </h3>
            <p className="text-xs text-slate-500 mb-6 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {rsvpEvent.date} • {rsvpEvent.time}
            </p>

            <form onSubmit={handleRsvpSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Parent Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Mutasa"
                  value={rsvpForm.parentName}
                  onChange={(e) => setRsvpForm({...rsvpForm, parentName: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+263 77 123 4567"
                  value={rsvpForm.phone}
                  onChange={(e) => setRsvpForm({...rsvpForm, phone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Number of Children Attending</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={rsvpForm.kidsCount}
                  onChange={(e) => setRsvpForm({...rsvpForm, kidsCount: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-sm"
              >
                Confirm RSVP
              </button>
            </form>
          </div>
        </div>
      )}

      <section id="programs" className="py-12 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-xs bg-red-950/60 px-3.5 py-1.5 rounded-full border border-red-800/40 mb-3">
              <Sparkles className="w-4 h-4" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Core Programs & Activities
            </h2>
            <p className="text-slate-400 mt-2">
              Every Sunday session combines learning, creative expression, and active play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAM_DATA.map((prog) => {
              const IconComp = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-red-600 p-2.5 rounded-xl shadow-md">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {prog.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {prog.shortDesc}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider group-hover:underline px-2 py-1 rounded-lg min-h-[44px] min-w-[44px]"
                    >
                      Read Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-fadeIn text-slate-900">
            <div className="relative h-56">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-black text-slate-900">
                {selectedProgram.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {selectedProgram.fullDesc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="faq" className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 mb-3">
              <HelpCircle className="w-4 h-4" />
              Parent Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2">
              Have questions before visiting on Sunday? Find key answers regarding check-in, safety, and preparations below.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-sm font-black shrink-0">
                        Q{faq.id}
                      </span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="volunteer" className="py-12 sm:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-white" />
                  Join Our Ministry Family
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Make a Lasting Impact in a Child's Life
                </h2>

                <p className="text-red-100 text-base sm:text-lg leading-relaxed max-w-xl">
                  We are looking for passionate teachers, joyful helpers, worship leaders, and security volunteers to serve our children in Harare. Full training & background screening provided.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setIsVolunteerModalOpen(true)}
                    className="bg-white text-red-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Become a Volunteer
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                    alt="Volunteers teaching children"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVolunteerModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-fadeIn text-slate-900">
            <button
              onClick={() => setIsVolunteerModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-black text-slate-900 mb-1">
              Volunteer Sign-Up
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Fill in your details to join our Heartfelt Kids team.
            </p>

            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Grace Moyo"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+263 77 000 0000"
                  value={volunteerForm.phone}
                  onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Preferred Role</label>
                <select
                  value={volunteerForm.role}
                  onChange={(e) => setVolunteerForm({...volunteerForm, role: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                >
                  <option value="Teacher">Bible Teacher</option>
                  <option value="Assistant">Classroom Assistant</option>
                  <option value="Worship">Praise & Worship Leader</option>
                  <option value="Safety">Safety & Check-in Desk</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <section id="register" className="py-12 sm:py-20 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                <Heart className="w-4 h-4 fill-red-600" />
                Pre-Register Online
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Parent Registration Form
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Save time on Sunday morning! Register your children online in advance so our check-in team can print your child's safety badge right away.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <p className="text-sm font-semibold text-slate-800">Fast & Secure Sunday Morning Check-In</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <p className="text-sm font-semibold text-slate-800">Special Medical/Allergy Tagging Options</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <p className="text-sm font-semibold text-slate-800">Instant Updates for Ministry Activities</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
                <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <p className="font-extrabold text-slate-900 text-sm">Heartfelt Children's Ministry</p>
                  <p className="text-xs text-slate-500">Main Campus, Harare, Zimbabwe</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative">

                {regSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Child Registered Successfully!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm">
                      We have received the registration for <strong>{regForm.childName}</strong>. Please see our team at the Welcome Desk this Sunday!
                    </p>
                    <button
                      onClick={() => {
                        setRegSuccess(false);
                        setRegForm({ parentName: '', email: '', phone: '', childName: '', childAge: '3-5', notes: '' });
                      }}
                      className="mt-4 bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-red-600 transition-colors"
                    >
                      Register Another Child
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Parent/Guardian Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tendai Mbare"
                          value={regForm.parentName}
                          onChange={(e) => setRegForm({...regForm, parentName: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+263 77 123 4567"
                          value={regForm.phone}
                          onChange={(e) => setRegForm({...regForm, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={regForm.email}
                        onChange={(e) => setRegForm({...regForm, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Child's Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anesu Mbare"
                          value={regForm.childName}
                          onChange={(e) => setRegForm({...regForm, childName: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Child's Age Group</label>
                        <select
                          value={regForm.childAge}
                          onChange={(e) => setRegForm({...regForm, childAge: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm"
                        >
                          <option value="3-5">Toddlers (Ages 3-5)</option>
                          <option value="6-9">Juniors (Ages 6-9)</option>
                          <option value="10-12">Pre-Teens (Ages 10-12)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">Special Notes / Allergies</label>
                      <textarea
                        rows="3"
                        placeholder="Any allergies, special needs or requests..."
                        value={regForm.notes}
                        onChange={(e) => setRegForm({...regForm, notes: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none text-slate-900 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-xl shadow-red-600/30 hover:scale-[1.01] active:scale-95 transition-all text-base flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Sign Up & Pre-Register Child
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      <footer className="bg-slate-950 text-white pt-10 pb-8 sm:pt-16 sm:pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 sm:pb-12 border-b border-slate-800">

            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-black text-lg tracking-tight">HEARTFELT KIDS</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Where faith grows in little hearts through biblical sound doctrine, warm community, and creative joy.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-red-400 px-2 py-1 rounded min-h-[44px] flex items-center">About Us</button></li>
                <li><button onClick={() => scrollToSection('verse')} className="hover:text-red-400 px-2 py-1 rounded min-h-[44px] flex items-center">Verse of the Week</button></li>
                <li><button onClick={() => scrollToSection('schedule')} className="hover:text-red-400 px-2 py-1 rounded min-h-[44px] flex items-center">Sunday Classes</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-red-400 px-2 py-1 rounded min-h-[44px] flex items-center">Upcoming Events</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-red-400 px-2 py-1 rounded min-h-[44px] flex items-center">Frequently Asked Questions</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Schedule</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="font-semibold text-white">Every Sunday Morning</li>
                <li>9:00 AM - 11:00 AM</li>
                <li className="pt-2 text-xs text-slate-500">Check-in opens at 8:30 AM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  Harare, Zimbabwe
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  +263 77 000 0000
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  kids@heartfeltministry.org
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Heartfelt Children's Ministry | Harare, Zimbabwe. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Heartfelt Kids
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
