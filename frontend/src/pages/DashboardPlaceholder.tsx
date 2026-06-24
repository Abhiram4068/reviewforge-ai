import React from 'react';
import { 
  LayoutDashboard, 
  FolderGit2, 
  GitPullRequest, 
  CheckSquare, 
  BarChart3, 
  Bell, 
  FileText, 
  Sliders, 
  Settings, 
  Users, 
  UserPlus, 
  Blocks, 
  Search, 
  HelpCircle, 
  ChevronDown, 
  SlidersHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#f8fafc] text-[#334155] font-sans overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-60 bg-white border-r border-[#e2e8f0] flex flex-col justify-between flex-shrink-0">
        <div className="overflow-y-auto flex-1">
          {/* Logo */}
          <div className="p-5 flex items-center gap-2.5 border-b border-[#f1f5f9]">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <span className="font-bold text-base text-[#0f172a]">ReviewForge AI</span>
          </div>

          {/* Navigation Groups */}
          <div className="p-4 space-y-6">
            {/* Main Section */}
            <div>
              <span className="px-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-2">Main</span>
              <nav className="space-y-0.5">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-[#e0e7ff]/50 text-[#4f46e5]">
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all">
                  <FolderGit2 size={18} />
                  <span>Repositories</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all">
                  <GitPullRequest size={18} />
                  <span>Pull Requests</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all">
                  <CheckSquare size={18} />
                  <span>Reviews</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all">
                  <BarChart3 size={18} />
                  <span>Insights</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all justify-between">
                  <div className="flex items-center gap-3">
                    <Bell size={18} />
                    <span>Alerts</span>
                  </div>
                </a>
              </nav>
            </div>

            {/* AI & Analysis Section */}
            <div>
              <span className="px-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-2">AI & Analysis</span>
              <nav className="space-y-0.5">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <FileText size={18} />
                  <span>Guidelines</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <Sliders size={18} />
                  <span>Rule Sets</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <Settings size={18} />
                  <span>Model Settings</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <SlidersHorizontal size={18} />
                  <span>Risk Categories</span>
                </a>
              </nav>
            </div>

            {/* Admin Section */}
            <div>
              <span className="px-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-2">Admin</span>
              <nav className="space-y-0.5">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <Users size={18} />
                  <span>Users</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <UserPlus size={18} />
                  <span>Teams</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <Blocks size={18} />
                  <span>Integrations</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-[#64748b] hover:bg-[#f8fafc] transition-all">
                  <Settings size={18} />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Plan & Credits Segment */}
        <div className="p-4 border-t border-[#e2e8f0] bg-[#f8fafc]">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[11px] text-[#94a3b8] font-medium">Current Plan</p>
              <p className="text-sm font-bold text-[#0f172a]">Pro</p>
            </div>
            <button className="text-xs bg-white border border-[#e2e8f0] px-2.5 py-1 rounded-md font-medium shadow-sm hover:bg-gray-50">
              Manage
            </button>
          </div>
          <div>
            <div className="flex justify-between text-[11px] font-medium mb-1">
              <span className="text-[#64748b]">LLM Credits</span>
              <span className="text-[#0f172a] font-bold">$14.32 / $50</span>
            </div>
            <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
            <span className="text-[10px] text-[#94a3b8] block mt-1">28% used</span>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-14 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6 flex-shrink-0">
          {/* Global Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={16} />
            <input 
              type="text" 
              placeholder="Search PRs, repositories, users..." 
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-blue-500 text-[#0f172a]"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] bg-white border px-1.5 py-0.5 rounded text-[#94a3b8] font-mono font-normal">⌘ K</kbd>
          </div>

          {/* Right Header Navigation */}
          <div className="flex items-center gap-4">
            <button className="text-[#64748b] hover:text-[#0f172a]"><HelpCircle size={20} /></button>
            <div className="relative">
              <button className="text-[#64748b] hover:text-[#0f172a]"><Bell size={20} /></button>
              <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">8</span>
            </div>
            <button className="text-[#64748b] hover:text-[#0f172a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </button>
            <div className="flex items-center gap-2 border-l pl-4 border-[#e2e8f0]">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                alt="Abhiram" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-[#0f172a] leading-tight flex items-center gap-0.5">Abhiram <ChevronDown size={12} /></p>
                <p className="text-[10px] text-[#94a3b8]">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic View Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Dashboard Meta Row */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">Dashboard</h2>
              <p className="text-xs text-[#64748b]">Overview of your code reviews and AI insights</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-xs font-medium bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-lg shadow-sm text-[#0f172a]">
                <svg className="w-3.5 h-3.5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                May 17 - Jun 16, 2025 <ChevronDown size={14} className="text-[#94a3b8]" />
              </button>
              <button className="flex items-center gap-1.5 text-xs font-medium bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-lg shadow-sm text-[#0f172a]">
                <SlidersHorizontal size={14} className="text-[#64748b]" /> Filter
              </button>
            </div>
          </div>

          {/* ================= METRIC CARDS ROW ================= */}
          <div className="grid grid-cols-5 gap-4">
            {/* PRs Reviewed */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-[#64748b]">PRs Reviewed</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-1">128</p>
                </div>
                <div className="p-2 bg-[#e0e7ff] text-[#4f46e5] rounded-lg">
                  <GitPullRequest size={16} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <ArrowUpRight size={12} /> 23% <span className="text-[#94a3b8] font-normal">vs last 30 days</span>
                </span>
                {/* Minimal Sparkline SVG placeholder */}
                <svg className="w-16 h-6 text-indigo-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 15 Q10 5, 20 12 T40 4 T50 10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Issues Found */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-[#64748b]">Issues Found</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-1">342</p>
                </div>
                <div className="p-2 bg-[#dcfce7] text-[#15803d] rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <ArrowUpRight size={12} /> 18% <span className="text-[#94a3b8] font-normal">vs last 30 days</span>
                </span>
                <svg className="w-16 h-6 text-emerald-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 18 Q12 10, 22 14 T38 6 T50 12" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* High Risk PRs */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-[#64748b]">High Risk PRs</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-1">12</p>
                </div>
                <div className="p-2 bg-[#fef3c7] text-[#b45309] rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <ArrowDownRight size={12} /> 5% <span className="text-[#94a3b8] font-normal">vs last 30 days</span>
                </span>
                <svg className="w-16 h-6 text-amber-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 5 Q15 15, 25 8 T40 16 T50 12" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Avg Review Time Saved */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-[#64748b]">Avg. Review Time Saved</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-1">8.4 hrs</p>
                </div>
                <div className="p-2 bg-[#dbeafe] text-[#1d4ed8] rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <ArrowUpRight size={12} /> 31% <span className="text-[#94a3b8] font-normal">vs last 30 days</span>
                </span>
                <svg className="w-16 h-6 text-blue-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 12 Q10 4, 25 15 T42 6 T50 9" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* LLM Cost */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-[#64748b]">LLM Cost</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-1">$14.32</p>
                </div>
                <div className="p-2 bg-[#f3e8ff] text-[#6b21a8] rounded-lg">
                  <span className="font-bold text-xs">$</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <ArrowDownRight size={12} /> 12% <span className="text-[#94a3b8] font-normal">vs last 30 days</span>
                </span>
                <svg className="w-16 h-6 text-purple-500" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 6 Q12 16, 24 7 T38 15 T50 8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* ================= SPLIT ROW 1 ================= */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Recent Pull Requests Table Block */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 col-span-2 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-[#0f172a]">Recent Pull Requests</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View all</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#f1f5f9] text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">
                      <th className="pb-2.5">Pull Request</th>
                      <th className="pb-2.5">Repository</th>
                      <th className="pb-2.5">Author</th>
                      <th className="pb-2.5 text-center">Risk Score</th>
                      <th className="pb-2.5">Status</th>
                      <th className="pb-2.5 text-right">Updated</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-medium divide-y divide-[#f1f5f9]">
                    {[
                      { id: "#124", title: "Add chunk upload support", repo: "hivedrive-backend", author: "Abhiram", risk: 82, riskBg: "bg-rose-50 text-rose-600", status: "Open", statusBg: "bg-blue-50 text-blue-600", time: "2h ago", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&q=80" },
                      { id: "#123", title: "Refactor file service", repo: "hivedrive-backend", author: "Sarah", risk: 58, riskBg: "bg-amber-50 text-amber-600", status: "Open", statusBg: "bg-blue-50 text-blue-600", time: "5h ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" },
                      { id: "#122", title: "Fix auth middleware bug", repo: "hivedrive-backend", author: "Mike", risk: 25, riskBg: "bg-emerald-50 text-emerald-600", status: "Merged", statusBg: "bg-emerald-50 text-emerald-600", time: "1d ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80" },
                      { id: "#121", title: "Improve frontend caching", repo: "hivedrive-frontend", author: "John", risk: 45, riskBg: "bg-amber-50 text-amber-600", status: "Open", statusBg: "bg-blue-50 text-blue-600", time: "1d ago", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=40&q=80" },
                      { id: "#120", title: "Update dependencies", repo: "hivedrive-backend", author: "Sarah", risk: 15, riskBg: "bg-emerald-50 text-emerald-600", status: "Merged", statusBg: "bg-emerald-50 text-emerald-600", time: "2d ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="py-3 text-[#0f172a]">
                          <span className="text-[#94a3b8] font-semibold mr-1">{row.id}</span>
                          {row.title}
                        </td>
                        <td className="py-3 text-[#64748b]">{row.repo}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-1.5 text-[#0f172a]">
                            <img src={row.avatar} alt="" className="w-4 h-4 rounded-full object-cover" />
                            <span>{row.author}</span>
                          </div>
                        </td>
                        <td className="py-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${row.riskBg}`}>{row.risk}</span>
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${row.statusBg}`}>{row.status}</span>
                        </td>
                        <td className="py-3 text-right text-[#94a3b8]">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risk Summary Donut Chart Area */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-[#0f172a]">Risk Summary</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View details</a>
              </div>
              
              <div className="flex items-center justify-center my-4 relative">
                {/* SVG Concentric Ring Simulated Donut Chart */}
                <svg className="w-36 h-36 transform -rotate-90">
                  <circle cx="72" cy="72" r="55" stroke="#f1f5f9" strokeWidth="14" fill="transparent"/>
                  <circle cx="72" cy="72" r="55" stroke="#4ade80" strokeWidth="14" fill="transparent" strokeDasharray="345" strokeDashoffset="256"/>
                  <circle cx="72" cy="72" r="55" stroke="#facc15" strokeWidth="14" fill="transparent" strokeDasharray="345" strokeDashoffset="135"/>
                  <circle cx="72" cy="72" r="55" stroke="#fb923c" strokeWidth="14" fill="transparent" strokeDasharray="345" strokeDashoffset="32"/>
                  <circle cx="72" cy="72" r="55" stroke="#f87171" strokeWidth="14" fill="transparent" strokeDasharray="345" strokeDashoffset="0"/>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-[#0f172a]">128</span>
                  <span className="text-[10px] uppercase tracking-wide font-bold text-[#94a3b8]">Total PRs</span>
                </div>
              </div>

              {/* Legends Checklist */}
              <div className="space-y-1.5 text-xs font-medium">
                {[
                  { label: "High Risk", val: 12, pct: "9.4%", dot: "bg-red-500" },
                  { label: "Medium Risk", val: 38, pct: "29.7%", dot: "bg-orange-400" },
                  { label: "Low Risk", val: 45, pct: "35.2%", dot: "bg-yellow-400" },
                  { label: "Minimal Risk", val: 33, pct: "25.8%", dot: "bg-emerald-400" },
                ].map((l, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${l.dot}`}></span>
                      <span className="text-[#64748b]">{l.label}</span>
                    </div>
                    <div className="text-right text-[#0f172a]">
                      <span className="font-bold">{l.val}</span> <span className="text-[#94a3b8] font-normal">({l.pct})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SPLIT ROW 2 ================= */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Issue Breakdown progress row */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-sm text-[#0f172a]">Issue Breakdown</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View all</a>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Security", count: 142, color: "bg-red-500" },
                  { name: "Code Quality", count: 98, color: "bg-orange-400" },
                  { name: "Performance", count: 56, color: "bg-yellow-400" },
                  { name: "Architecture", count: 24, color: "bg-blue-500" },
                  { name: "Tests", count: 22, color: "bg-emerald-400" },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-[#64748b]">{item.name}</span>
                      <span className="text-[#0f172a]">{item.count}</span>
                    </div>
                    <div className="w-full bg-[#f1f5f9] h-2 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${(item.count / 150) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Issues Trend Timeline Chart Area */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-[#0f172a]">Issues Trend</h3>
                <div className="flex items-center gap-3 text-[10px] font-bold">
                  <span className="flex items-center gap-1 text-[#4f46e5]"><span className="w-2 h-0.5 bg-[#4f46e5]"></span> Issues Found</span>
                  <span className="flex items-center gap-1 text-[#a5b4fc]"><span className="w-2 h-0.5 bg-[#a5b4fc] border-dashed"></span> Issues Resolved</span>
                </div>
              </div>

              {/* Chart SVG Canvas wrapper */}
              <div className="w-full h-36 mt-4 relative">
                <svg className="w-full h-full text-indigo-600" viewBox="0 0 300 100" fill="none" stroke="currentColor">
                  {/* Axis lines */}
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="10" x2="300" y2="10" stroke="#f1f5f9" strokeWidth="1" />
                  {/* Trend line 1 */}
                  <path d="M0 80 Q50 65, 100 45 T200 15 T300 40" strokeWidth="2" strokeLinecap="round" />
                  {/* Trend line 2 dashed */}
                  <path d="M0 90 Q60 80, 120 65 T240 40 T300 55" strokeWidth="1.5" strokeDasharray="3,3" stroke="#a5b4fc" strokeLinecap="round" />
                </svg>
                {/* Simulated vertical grid limits */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[9px] text-[#94a3b8] font-bold">
                  <span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                </div>
              </div>

              <div className="flex justify-between text-[10px] font-bold text-[#94a3b8] mt-2">
                <span>May 17</span><span>May 24</span><span>May 31</span><span>Jun 7</span><span>Jun 14</span>
              </div>
            </div>

            {/* Top Repositories Stack Row */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-sm text-[#0f172a]">Top Repositories</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View all</a>
              </div>
              <div className="space-y-4">
                {[
                  { name: "hivedrive-backend", count: 87, pct: 85 },
                  { name: "hivedrive-frontend", count: 28, pct: 35 },
                  { name: "hivedrive-admin", count: 9, pct: 15 },
                  { name: "hivedrive-mobile", count: 4, pct: 8 }
                ].map((repo, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <div className="w-1/3 truncate text-xs font-semibold text-[#64748b]">
                      {repo.name}
                    </div>
                    <div className="flex-1 bg-[#f1f5f9] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${repo.pct}%` }}></div>
                    </div>
                    <div className="text-right text-xs font-bold text-[#0f172a] whitespace-nowrap">
                      {repo.count} PRs
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= SPLIT ROW 3 ================= */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Recent AI Reviews Banner Card */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 col-span-2 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-[#0f172a]">Recent AI Reviews</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View all</a>
              </div>
              
              <div className="bg-[#fff1f2] border border-rose-100 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-white border border-rose-200 rounded-lg text-rose-500 h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-blue-600 underline">chunk_upload.py</span>
                      <span className="bg-rose-100 text-rose-600 font-bold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wide">Security Issue</span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] mt-0.5 font-medium">Line 34</p>
                    <p className="text-xs font-bold text-[#0f172a] mt-1.5">Possible SQL Injection</p>
                    <p className="text-xs text-[#64748b] mt-0.5">Using f-string for SQL query can lead to SQL injection vulnerability.</p>
                  </div>
                </div>

                <div className="flex md:flex-col items-end gap-3 md:gap-2 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-rose-200">
                  <div className="text-right flex-1 md:flex-none">
                    <span className="text-[10px] font-bold text-[#94a3b8] block uppercase tracking-wide">Confidence</span>
                    <span className="text-sm font-bold text-emerald-600">91%</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 bg-white text-[#0f172a] text-xs font-bold border border-[#e2e8f0] px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                      View in PR <ExternalLink size={12} />
                    </button>
                    <button className="bg-white text-[#64748b] text-xs font-semibold border border-[#e2e8f0] px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed Segment */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-[#0f172a]">Activity Feed</h3>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">View all</a>
              </div>
              <div className="flex-1 flex items-start gap-3 p-3 bg-slate-50 rounded-xl relative">
                <div className="p-2 bg-white rounded-lg border border-[#e2e8f0] text-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.0.069-.608.069 1.005.074 1.547 1.005 1.547.892.702 2.28.5 2.835.382.09-.646.349-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </div>
                <div className="flex-1 text-xs">
                  <p className="font-semibold text-[#0f172a]">New PR #125 opened in hivedrive-backend</p>
                  <p className="text-[#64748b] mt-0.5">Optimize file chunking algorithm</p>
                  <span className="text-[10px] text-[#94a3b8] block mt-1.5 font-medium">2 minutes ago</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-blue-600 absolute right-3 top-3"></span>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};