import React from 'react';
import { Printer, Mail, Phone, MapPin, Cpu, Briefcase, GraduationCap, PenTool, Shield, Github, ExternalLink, UserCheck } from 'lucide-react';

const App = () => {
  const handlePrint = () => {
    window.print();
  };

  const qrLinks = [
    {
      label: "Portfolio & Case Studies",
      url: "https://dusty.mynode.us.com",
      icon: <ExternalLink size={16} />,
      id: "portfolio"
    },
    {
      label: "Digital ID",
      url: "https://dusty.mynode.us.com/dustyid",
      icon: <UserCheck size={16} />,
      id: "dustyid"
    },
    {
      label: "GitHub Repositories",
      url: "https://github.com/dustymclean",
      icon: <Github size={16} />,
      id: "github"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Print Control Bar - Hidden during actual print */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-all shadow-md font-semibold text-sm"
        >
          <Printer size={18} />
          Print Resume
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200 print:shadow-none print:rounded-none print:border-none print:p-0">
        <div className="p-10 sm:p-14">
          
          {/* Contact Header */}
          <header className="text-center border-b border-slate-100 pb-10 mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3 uppercase">Dusty Lyn McLean</h1>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-600 mt-5 font-medium">
              <span className="flex items-center gap-1.5"><MapPin size={15} className="text-slate-400" /> Grenada, Mississippi area</span>
              <span className="flex items-center gap-1.5"><Mail size={15} className="text-slate-400" /> dusty_mclean@icloud.com</span>
              <span className="flex items-center gap-1.5"><Phone size={15} className="text-slate-400" /> 601-300-0702</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200">MyNode</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200">North Mississippi Notary</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200">Industrial Engineering Auditor</span>
            </div>
          </header>

          {/* Profile Section */}
          <section className="mb-12">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-5">Profile</h2>
            <p className="text-slate-700 leading-relaxed text-[15px]">
              Grounded technical consultant and notary professional with an uncompromising focus on hardware integrity, system transparency, and efficient service delivery. I approach IT infrastructure from an auditor’s perspective—prioritizing build quality, technical specifications, and real-world value over market hype. My methodology is rooted in the belief that systems should be human-centric, candidly documented, and built to survive the rigors of long-term operational use. Specialized in bridging the gap between high-level industrial engineering principles and "boots-on-the-ground" technical implementation.
            </p>
          </section>

          {/* Operational Philosophy */}
          <section className="mb-12">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-6">Operational Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: "Transparency", desc: "I believe in being human and candid. If a technical solution isn't worth the cost, I say so. I do not sell \"features\"; I verify utility." },
                { title: "Build Quality", desc: "I prioritize hardware that is built to last, not just hardware that is built to sell. I look at capacitors, PCB traces, and thermal paths before I look at branding." },
                { title: "Efficiency", desc: "Balancing professional ventures with a dedicated family schedule, ensuring high output and focused delivery during operational hours." },
                { title: "Fiscal Realism", desc: "I don't recommend the newest technology for the sake of novelty; I recommend the technology that is proven to pay for itself through reliability and low maintenance." },
                { title: "Documentation Accountability", desc: "Clear, jargon-free records are the only way to ensure a system is actually understood by the owner, not just \"working\" for the moment." },
                { title: "Sovereign Infrastructure", desc: "Minimizing reliance on opaque third-party providers. If you don't control the hardware and the data, you don't own the system." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col justify-between">
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-snug italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-8">Professional Experience</h2>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">MyNode</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Grenada, MS | Current</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-3 italic">Lead IT Consultant / Owner</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-sm">
                  <li>Manage full-cycle IT consulting services, evaluating client hardware and software stacks with a focus on long-term stability and cost-to-performance ratios.</li>
                  <li>Deploy and maintain sovereign server environments (Bare Metal, Proxmox, TrueNAS), prioritizing transparent documentation and "no-fluff" technical implementation.</li>
                  <li>Audit client networking configurations to identify bottlenecks, replacing generic consumer-grade hardware with professional-grade components (Ubiquiti/Enterprise) that offer superior thermal management and throughput.</li>
                  <li>Provide candid technical reviews for internal systems, ensuring every build meets rigorous standards for build quality and functional longevity.</li>
                  <li>Develop custom automation workflows and integration scripts (Python/Linux) to streamline client operations and data integrity.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">North Mississippi Notary</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Grenada, MS | Current</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-3 italic">Notary Public</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-sm">
                  <li>Facilitate legal document verification and signing services across North Mississippi with a focus on precision and regulatory compliance.</li>
                  <li>Manage sensitive records and identity verification processes, maintaining a transparent and professional environment for all parties.</li>
                  <li>Maintain a highly organized mobile operation, ensuring reliability and punctuality for time-sensitive legal and business transactions.</li>
                  <li>Audit identity credentials and legal frameworks to ensure 100% validity in high-stakes documentation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">Copiah County School District</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Hazlehurst, MS | 2 Years</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-3 italic">Technology Specialist</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-sm">
                  <li>Maintained and audited district-wide hardware and software infrastructure, ensuring maximum uptime for educational environments.</li>
                  <li>Troubleshot complex networking issues and managed device deployments across multiple campuses, ensuring strict adherence to FERPA and data privacy regulations.</li>
                  <li>Provided technical support and hardware lifecycle assessments to ensure fiscal responsibility and equipment reliability.</li>
                  <li>Acted as an internal auditor for hardware procurement, identifying high-failure-rate components and recommending superior alternatives.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">Independent Technical Consultancy</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Mississippi Region | 3 Years</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-3 italic">Strategic Systems Consultant / Owner</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-sm">
                  <li>Founded and managed regional technical operations focusing on grounded web solutions and honest hardware recommendations.</li>
                  <li>Led client acquisition and technical strategy for small businesses, providing "business-in-a-box" setups including digital presence and local infrastructure.</li>
                  <li>Conducted extensive system migrations and legacy hardware integrations to maximize existing client ROI.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12 print:mt-10">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">The University of Southern Mississippi</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Hattiesburg, MS | Current</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-2 italic">Bachelor of Science in Industrial Engineering Technology</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
                  <li>Emphasis on Process Optimization, Quality Control, and Systems Engineering.</li>
                  <li>Applying LEAN and Six Sigma methodologies to technical infrastructure and hardware lifecycle management.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">Southwest Mississippi Community College</h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Summit, MS | Graduated 2021</span>
                </div>
                <p className="font-bold text-slate-600 text-sm mb-2 italic">Associate of Applied Science in Information Systems Technology</p>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
                  <li>Specialization in Computer Networking and Communications.</li>
                  <li>Focused on the physical layer of networking and high-availability systems.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Toolkit Dossier */}
          <section className="mb-12">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-8">The Auditor's Toolkit: Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase border-b border-slate-200 mb-4 pb-1.5 flex items-center gap-2 tracking-widest">
                  <Cpu size={16} className="text-slate-400" /> Hardware & Engineering
                </h3>
                <ul className="text-[13px] text-slate-700 space-y-3">
                  <li><span className="font-bold">Component-Level Teardowns:</span> Expert evaluation of PCB integrity, capacitor quality, and solder analysis to predict hardware failure.</li>
                  <li><span className="font-bold">Thermal Auditing:</span> Optimization diagnostics and load-bearing stress testing.</li>
                  <li><span className="font-bold">Power Quality:</span> Ripple voltage and UPS redundancy validation.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase border-b border-slate-200 mb-4 pb-1.5 flex items-center gap-2 tracking-widest">
                  <Briefcase size={16} className="text-slate-400" /> Business Venture
                </h3>
                <ul className="text-[13px] text-slate-700 space-y-3">
                  <li><span className="font-bold">Entity Formation:</span> Turnkey setup of LLCs, EIN acquisition, and Operating Agreements.</li>
                  <li><span className="font-bold">Financial Infrastructure:</span> Commercial banking and merchant processing deployment.</li>
                  <li><span className="font-bold">Operational Scaling:</span> Transitioning concepts to functional entities.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase border-b border-slate-200 mb-4 pb-1.5 flex items-center gap-2 tracking-widest">
                  <Shield size={16} className="text-slate-400" /> Intelligence & Security
                </h3>
                <ul className="text-[13px] text-slate-700 space-y-3">
                  <li><span className="font-bold">OSINT:</span> Deep-dive digital footprint auditing and investigative research.</li>
                  <li><span className="font-bold">Privacy Engineering:</span> De-Googling workflows and end-to-end encryption.</li>
                  <li><span className="font-bold">Vulnerability:</span> Identifying physical and digital weak points in small-business networking.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase border-b border-slate-200 mb-4 pb-1.5 flex items-center gap-2 tracking-widest">
                  <GraduationCap size={16} className="text-slate-400" /> Industrial Methodology
                </h3>
                <ul className="text-[13px] text-slate-700 space-y-3">
                  <li><span className="font-bold">Process Optimization:</span> LEAN and Six Sigma in technical deployments.</li>
                  <li><span className="font-bold">Quality Assurance:</span> Statistical process control and PM scheduling.</li>
                  <li><span className="font-bold">Compliance:</span> Expert auditing for HIPAA, FERPA, and PCI-DSS standards.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diagnostic Toolset Inventory */}
          <section className="mb-12">
            <h3 className="text-xs font-black text-slate-800 uppercase border-b border-slate-200 mb-4 pb-1.5 flex items-center gap-2 tracking-widest">
              <PenTool size={16} className="text-slate-400" /> Diagnostic Inventory
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Multimeter", "Thermal Imaging (FLIR)", "Oscilloscopes", "IPMI/iDRAC", 
                "Wireshark", "Nmap", "OSINT Frameworks", "Debian/RHEL Shell", "TrueNAS", "Proxmox"
              ].map((tool, idx) => (
                <span key={idx} className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-[11px] font-bold border border-slate-200 shadow-sm">{tool}</span>
              ))}
            </div>
          </section>

          {/* Digital Presence & QR Codes */}
          <section className="mb-12 bg-slate-900 text-white p-8 rounded-2xl shadow-inner print:bg-white print:text-slate-900 print:border print:border-slate-200 print:shadow-none">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] border-l-4 border-slate-400 pl-4 mb-8 print:border-slate-800">Digital Presence & Verifiable Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qrLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-white/5 transition-colors print:hover:bg-transparent"
                >
                  <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-700 transition-transform group-hover:scale-105 print:shadow-none print:border-slate-200">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link.url)}`}
                      alt={`QR Code for ${link.label}`}
                      className="w-32 h-32"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
                      {link.icon} {link.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 opacity-70 group-hover:opacity-100 transition-opacity print:text-slate-500">
                      {link.url.replace('https://', '')}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-4 print:mt-6">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] border-l-4 border-slate-800 pl-4 mb-8">Selected Audit Projects</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm">
                <p className="font-black text-slate-800 text-[13px] uppercase tracking-wider mb-2">Sovereign Data Infrastructure Build</p>
                <p className="text-slate-600 text-sm leading-relaxed italic">Engineered a completely self-hosted server stack for a regional consultancy, migrating all operations away from third-party cloud providers. Verified hardware down to the component level to ensure a 10-year projected lifecycle.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm">
                <p className="font-black text-slate-800 text-[13px] uppercase tracking-wider mb-2">Small Business "Venture Launch" Audit</p>
                <p className="text-slate-600 text-sm leading-relaxed italic">Managed the end-to-end legal and technical launch of a local service provider, including LLC formation, commercial banking setup, and high-security digital workflow implementation.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm">
                <p className="font-black text-slate-800 text-[13px] uppercase tracking-wider mb-2">Legacy Infrastructure & E-Waste Mitigation</p>
                <p className="text-slate-600 text-sm leading-relaxed italic">Optimized legacy firmware and implemented a Linux-based containerization strategy, extending hardware lifespan by a projected 5 years and eliminating a $15k unnecessary expenditure.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Print-specific CSS hacks to ensure it looks professional on paper */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { 
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .min-h-screen { 
            padding: 0 !important; 
            background: transparent !important; 
          }
          .max-w-4xl { 
            max-width: 100% !important; 
            margin: 0 !important; 
          }
          .shadow-xl, .border, .rounded-xl { 
            box-shadow: none !important; 
            border: none !important; 
            border-radius: 0 !important;
          }
          .p-10, .p-14 { 
            padding: 0 !important; 
          }
          .bg-slate-50 {
            background-color: #f8fafc !important;
            border: 1px solid #f1f5f9 !important;
          }
          header { margin-bottom: 2rem !important; }
          section { margin-bottom: 2rem !important; }
          @page { margin: 2cm; }
        }
      `}} />
    </div>
  );
};

export default App;