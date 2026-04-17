import React from 'react';
import { School, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembersTop = [
    {
      id: 1,
      name: "Kadi Mounia",
      role: "Chef du groupe",
      task: "Responsable de :\nBack-End + Design",
    },
    {
      id: 2,
      name: "Ferroukhi Mouhamed Sahnoun",
      role: "",
      task: "Responsable de :\nFront-End",
    }
  ];

  const teamMembersBottom = [
    {
      id: 3,
      name: "Azril Adem",
      role: "",
      task: "Responsable de :\nFront-End",
    },
    {
      id: 4,
      name: "Azil Malak",
      role: "",
      task: "Responsable de :\nBack-End",
    },
    {
      id: 5,
      name: "Bendana Nourhane Malak",
      role: "",
      task: "Responsable de :\nBack-End+ Design",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F9] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="relative h-[550px] w-full flex flex-col z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/background.png')` }}
        >
          {/* Subtle Dark/Blue Gradient Overlay - Let real colors show through */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b42]/50 via-transparent to-transparent"></div>
          {/* Bottom Fade - shorter fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F7F9] to-transparent"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-10 w-full flex items-center justify-between px-10 py-6 text-white font-medium">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
            <School className="w-8 h-8 opacity-90" />
            <span className="text-2xl font-bold tracking-wide">UniSpace</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <Link to="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              Home <ChevronDown size={14} />
            </Link>
            <Link to="/about" className="flex items-center gap-1 border-b-2 border-white pb-1 font-bold">
              About <ChevronDown size={14} />
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors">
              Service <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors">
              Contact <ChevronDown size={14} />
            </div>
          </div>

          {/* Auth Button */}
          <Link to="/login">
            <button className="bg-white/90 text-[#334E68] px-8 py-2.5 rounded-full font-bold text-xs uppercase shadow-md hover:bg-white hover:text-[#1a365d] transition-all">
              SIGN-UP
            </button>
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 -mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-wider drop-shadow-md max-w-4xl">
            UNI SPACE: <br /> CONNECTING <br /> CAMPUS COMMUNITY <br /> TO IDEAS SPACES.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-sm max-w-2xl">
            Empowering students and faculty to optimize their campus experience
          </p>
        </div>
      </div>

      {/* Main Content Areas */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 py-12 space-y-16">
        
        {/* About The Platform */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-8 bg-white rounded-[2rem] p-10 md:p-14 shadow-sm border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 font-serif">About The Platform</h2>
            <p className="text-slate-800 leading-relaxed text-[14px] font-medium">
              Our platform was designed to simplify the way students use the university library.<br/>
              Instead of spending time searching for an available seat, students can quickly check availability, 
              explore the library map, and reserve a space in just a few clicks.<br/><br/>
              By combining real-time updates, an interactive map, and a simple reservation system, 
              the platform helps students save time, reduce stress, and focus on what truly matters: their studies.
            </p>
          </div>
          <div className="md:col-span-4 bg-[#5D7B9D] rounded-[2rem] flex flex-col items-center justify-center text-white p-10 shadow-sm border border-[#5D7B9D]">
            <h3 className="text-6xl md:text-7xl font-serif mb-2 font-normal pb-2">80%</h3>
            <p className="text-white/90 font-medium text-sm tracking-wide">User satisfaction</p>
          </div>
        </div>

        {/* About The Library */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-transparent">
          <div className="md:col-span-4">
            <img 
              src="/library.png" 
              alt="University Library" 
              className="w-full h-[220px] object-cover rounded-2xl shadow-md border-4 border-[#F4F7F9]"
              onError={(e) => { e.currentTarget.src = '/background.png' }}
            />
          </div>
          <div className="md:col-span-8 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-serif">About The Library</h2>
            <p className="text-slate-800 leading-relaxed text-[13px] font-medium max-w-2xl">
              The university Library is 24/7 a vital space for students seeking a productive and comfortable study environment. 
              However, finding an available spot can often be time-consuming and frustrating.<br/>
              Our platform was created to solve this problem by allowing students to easily find, reserve, and manage study spaces in real time, 
              making the library experience more efficient and enjoyable.
            </p>
          </div>
        </div>

        {/* About The Team */}
        <div className="mt-20 pb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 font-serif text-center">About The Team</h2>
          
          <div className="flex flex-col gap-6 items-center">
            {/* Top Row - 2 members */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl">
              {teamMembersTop.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-[#6B8EB3] text-white p-6 rounded-[1.5rem] shadow-sm hover:-translate-y-1 transition-transform w-[280px] min-h-[160px] flex flex-col"
                >
                  <h3 className="font-normal text-[15px] leading-snug mb-1">{member.name}</h3>
                  {member.role ? (
                    <p className="text-white/90 text-[13px] mb-4">{member.role}</p>
                  ) : (
                    <div className="h-4 mb-4"></div>
                  )}
                  <div className="text-white/90 text-[13px] whitespace-pre-wrap leading-tight mt-auto">{member.task}</div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 members */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center w-full max-w-4xl">
              {teamMembersBottom.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-[#6B8EB3] text-white p-6 rounded-[1.5rem] shadow-sm hover:-translate-y-1 transition-transform w-[280px] min-h-[160px] flex flex-col"
                >
                  <h3 className="font-normal text-[15px] leading-snug mb-1">{member.name}</h3>
                  {member.role ? (
                    <p className="text-white/90 text-[13px] mb-4">{member.role}</p>
                  ) : (
                    <div className="h-4 mb-4"></div>
                  )}
                  <div className="text-white/90 text-[13px] whitespace-pre-wrap leading-tight mt-auto">{member.task}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}