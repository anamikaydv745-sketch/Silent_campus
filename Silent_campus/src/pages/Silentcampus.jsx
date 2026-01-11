import React from 'react';
import { 
  Shield, ArrowRight, Search, Menu, Lock, Zap, 
  BarChart3, Users, Clock, Twitter, Github, Mail 
} from 'lucide-react';

import { useNavigate } from "react-router-dom";






// --- Data for the Features Grid ---
const featureData = [
  {
    title: "Complete Anonymity",
    desc: "Your identity is protected with end-to-end encryption. No one can trace complaints back to you.",
    icon: <Lock className="w-6 h-6 text-red-500" />
  },
  {
    title: "Smart Escalation",
    desc: "AI-powered system automatically escalates unresolved issues to higher authorities.",
    icon: <Zap className="w-6 h-6 text-red-500" />
  },
  {
    title: "Real-time Analytics",
    desc: "Track complaint patterns and resolution rates with comprehensive dashboards.",
    icon: <BarChart3 className="w-6 h-6 text-red-500" />
  },
  {
    title: "Multi-tier Authority",
    desc: "Issues are routed to the right department and authority level automatically.",
    icon: <Users className="w-6 h-6 text-red-500" />
  },
  {
    title: "Credibility Scoring",
    desc: "Built-in validation helps prioritize genuine concerns while filtering noise.",
    icon: <Shield className="w-6 h-6 text-red-500" />
  },
  {
    title: "24h Response SLA",
    desc: "Every complaint gets acknowledged within 24 hours with clear action timelines.",
    icon: <Clock className="w-6 h-6 text-red-500" />
  }
];

const SilentCampus = () => {
    const navigate = useNavigate();
  return (
    
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500/30">
      
      {/* 1. FIXED NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2">
          <Shield className="text-red-600 w-8 h-8" strokeWidth={2.5} />
          <span className="text-2xl font-bold tracking-tight">
            Silent <span className="text-red-600">Campus</span>
          </span>
        </div>
        <Menu className="w-8 h-8 cursor-pointer text-gray-400 hover:text-white transition-colors" />
      </nav>

      <div className="pt-20">
        
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-900/30 bg-red-950/20 mb-10">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-[10px] md:text-xs font-bold text-red-500 uppercase tracking-[0.2em]">Secure & Anonymous Platform</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8">
            Raise Your Voice. <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-orange-500 bg-clip-text text-transparent">
              Without Revealing <br /> Your Identity.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-12 font-medium">
            Anonymous complaints. Smart escalation. Real accountability. <br />
            <span className="text-white">Empowering students</span> to speak up safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
            onClick={()=> navigate("/Raisecomplaints")}

             className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-red-600/20 flex items-center gap-2">
              Raise a Complaint <ArrowRight className="w-5 h-5" />
            </button>
            <button 
            onClick={()=> navigate("/Trackcomplaints")}
            className="px-10 py-4 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2">
              <Search className="w-5 h-5" /> Track Complaint
            </button>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h2 className="text-6xl font-black text-orange-600 mb-2">2,500+</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Issues Resolved</p>
            </div>
            <div>
              <h2 className="text-6xl font-black text-white mb-2">98%</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Resolution Rate</p>
            </div>
            <div>
              <h2 className="text-6xl font-black text-orange-600 mb-2">24h</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Avg. Response</p>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose <span className="text-orange-600">Silent Campus</span>?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive platform designed to give students a voice while maintaining accountability 
              and driving real change on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureData.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-[#111] border border-white/5 hover:border-red-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-red-950/20 border border-red-900/30 flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CALL TO ACTION BOX */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="relative p-[1px] rounded-[40px] bg-gradient-to-br from-red-600/40 via-orange-600/20 to-transparent">
            <div className="bg-[#0a0a0a] rounded-[39px] p-12 md:p-24 flex flex-col items-center text-center">
              <Shield className="w-20 h-20 text-red-600 mb-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
              <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                Ready to Make Your Voice Heard?
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mb-12">
                Join thousands of students who have already used Silent Campus to create 
                positive change in their institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-bold text-lg hover:opacity-90 transition-all">
                  Submit a Complaint
                </button>
                <button className="px-10 py-4 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMPREHENSIVE FOOTER */}
        <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="text-red-600 w-7 h-7" />
                <span className="text-xl font-bold">Silent <span className="text-red-600">Campus</span></span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 font-medium leading-relaxed">
                Empowering students to speak up safely. Our platform ensures complete anonymity 
                while providing accountability and resolution for campus issues.
              </p>
              <div className="flex gap-6">
                <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li className="hover:text-white cursor-pointer transition-colors">Submit Complaint</li>
                <li className="hover:text-white cursor-pointer transition-colors">Track Complaint</li>
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Security</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-600 text-sm font-medium">
            <p>© 2024 Silent Campus. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-red-500">❤️</span> for safer campuses everywhere
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SilentCampus;