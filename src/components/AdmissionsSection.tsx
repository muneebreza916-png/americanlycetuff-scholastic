import React from 'react';
import { GraduationCap, Calendar, FileText, CheckCircle2, ArrowRight, Sparkles, PhoneCall, HelpCircle } from 'lucide-react';

interface AdmissionsSectionProps {
  onOpenInquiry: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      num: '01',
      title: 'Online or Campus Inquiry',
      desc: 'Submit student details or book an individualized campus walkthrough at Military Accounts, Lahore.',
    },
    {
      num: '02',
      title: 'Student Assessment',
      desc: 'A friendly diagnostic evaluation assessing foundational concepts, reasoning, and communicative skills.',
    },
    {
      num: '03',
      title: 'Leadership Interaction',
      desc: 'An inspiring family conversation with the Academic Principal & Directorate to align on goals.',
    },
    {
      num: '04',
      title: 'Enrollment & Welcome',
      desc: 'Finalize registration, receive orientation kits, uniform guides, and access the student portal.',
    },
  ];

  return (
    <section id="admissions" className="bg-[#07152b] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#ef233c]">
            <GraduationCap className="w-4 h-4" />
            <span>Join Our Scholastic Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Montserrat']">
            Admissions Process & Criteria
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Simple, transparent 4-step admission journey tailored for parents and students in Lahore.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0e2448] p-6 rounded-2xl border border-white/10 relative hover:border-[#d90429]/60 transition-colors group"
            >
              <div className="text-3xl font-extrabold text-[#ef233c] font-['Montserrat'] mb-3 opacity-90 group-hover:scale-105 transition-transform">
                {step.num}
              </div>
              <h3 className="text-lg font-bold font-['Montserrat'] text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Callout Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#d90429] via-[#b50220] to-[#07152b] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold font-['Montserrat']">
              Ready to Give Your Child the Scholastic Advantage?
            </h3>
            <p className="text-sm text-white/90 max-w-2xl">
              Limited seats available for early registration across Pre-School, Junior School, Matriculation, and Cambridge O/A-Levels.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-white text-[#07152b] hover:bg-slate-100 font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2 text-[#d90429]" />
              Start Admission Inquiry
            </button>
            <a
              href="tel:+923099419999"
              className="px-5 py-3 bg-black/30 hover:bg-black/40 border border-white/20 text-white font-medium text-sm rounded-xl transition-colors flex items-center"
              title="Call Mobile & WhatsApp Helpline"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#ef233c]" />
              Call (+92 309 9419999)
            </a>
            <a
              href="tel:+9242111257257"
              className="px-5 py-3 bg-black/30 hover:bg-black/40 border border-white/20 text-white font-medium text-sm rounded-xl transition-colors flex items-center"
              title="Call Official UAN Helpline"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#ef233c]" />
              UAN (042-111-257-257)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
