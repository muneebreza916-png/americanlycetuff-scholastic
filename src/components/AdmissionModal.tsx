import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle, Send, Phone, MapPin, Calendar, Clock, User, Mail, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    studentName: '',
    gradeApplying: 'Grade 1 - 5 (Primary)',
    parentName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      gradeApplying: 'Grade 1 - 5 (Primary)',
      parentName: '',
      phone: '',
      email: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#07152b] border border-[#d90429]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-admission-modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#d90429]/20 border-2 border-[#d90429] text-[#ef233c] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Montserrat'] text-white">
              Inquiry Submitted Successfully!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.parentName}</strong>. Our Admissions Directorate at the Military Accounts Lahore campus will contact you at <strong className="text-white">{formData.phone}</strong> within 24 hours.
            </p>
            <div className="p-4 bg-[#0e2448] rounded-xl text-xs text-slate-300 border border-white/10 text-left space-y-1">
              <div><strong>Campus:</strong> American Lycetuff Scholastic Campus, 31 MB, Millitary Accounts, Lahore</div>
              <div><strong>Grade:</strong> {formData.gradeApplying}</div>
              <div><strong>Student:</strong> {formData.studentName}</div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#d90429] hover:bg-[#b50220] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-[#d90429] text-white rounded-xl shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-white">
                  Campus Tour & Admissions
                </h3>
                <p className="text-xs text-slate-300">
                  American Lycetuff Scholastic Campus • Lahore (Military Accounts)
                </p>
              </div>
            </div>

            <div className="bg-[#0e2448]/80 p-3 rounded-lg border border-white/10 text-xs text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ef233c] shrink-0" />
              <span>Admissions Open for 2026-2027 Academic Year (Playgroup to A-Levels / Matric).</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Student&apos;s Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Daniyal Ahmed"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full bg-[#040d1c] border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#d90429]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.gradeApplying}
                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                    className="w-full bg-[#040d1c] border border-white/15 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#d90429]"
                  >
                    <option value="Early Years / Pre-School">Early Years / Pre-School</option>
                    <option value="Junior Campus (Grades 1-5)">Junior Campus (Grades 1-5)</option>
                    <option value="Middle School (Grades 6-8)">Middle School (Grades 6-8)</option>
                    <option value="Matriculation (FBISE/BISE)">Matriculation (FBISE / BISE)</option>
                    <option value="Cambridge O-Levels">Cambridge O-Levels</option>
                    <option value="Cambridge A-Levels">Cambridge A-Levels</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Salman Khan"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-[#040d1c] border border-white/15 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#d90429]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contact Phone (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#040d1c] border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#d90429]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#040d1c] border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#d90429]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Questions or Preferred Tour Date
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your child's interests or request a specific time to visit the Military Accounts campus..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#040d1c] border border-white/15 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#d90429] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-2.5 rounded-lg border border-white/20 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 py-2.5 rounded-lg bg-[#d90429] hover:bg-[#b50220] text-white text-xs sm:text-sm font-semibold flex items-center justify-center shadow-lg shadow-[#d90429]/30 transition-colors"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
