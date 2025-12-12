'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    branch: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    isNewPatient: 'yes',
    insuranceProvider: '',
    reasonForVisit: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Initialize EmailJS (replace these with your actual EmailJS credentials)
      // Get them from: https://www.emailjs.com/
      const SERVICE_ID = 'service_g88sw4f'; // e.g., 'service_xxxxxxx'
      const TEMPLATE_ID = 'template_bt9kcyr'; // e.g., 'template_xxxxxxx'
      const PUBLIC_KEY = 'OiCbJoM_Q2fM2CXh_'; // e.g., 'xxxxxxxxxxxxxxx'

      // Prepare template parameters
      const templateParams = {
        to_email: 'appointments@physio360.com', // Your clinic email
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth,
        is_new_patient: formData.isNewPatient === 'yes' ? 'Yes' : 'No',
        branch: formData.branch,
        service: formData.service,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        insurance_provider: formData.insuranceProvider || 'Not provided',
        reason_for_visit: formData.reasonForVisit,
        additional_notes: formData.additionalNotes || 'None',
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          branch: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          isNewPatient: 'yes',
          insuranceProvider: '',
          reasonForVisit: '',
          additionalNotes: '',
        });
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Failed to send appointment request. Please try again or call us directly.');
    }
  };

  const branches = [
    'Maadi Clinic - Maadi, 27 sayed dawood next to andalosia hospital taqseem ellaselky',
    'Dokki Clinic - Dokki, 129 Eltahrir street next to russian cultural center',
    'Korba Heliopolis Clinic - Heliopolis, 11 elthawra street next to vodafone egypt',
  ];

  const services = [
    "Physical Assessment",
    'Customized physical therapy sessions',
    'Cupping Therapy (Dry/Wet)',
    'Recovery Sessions',
    'Home visits',
    'Sports Rehabilitation',
    'Post-Surgical Rehabilitation',
    'Pain Management',
    'Manual Therapy',
    'Neurological Rehabilitation',
    'Geriatric Physical Therapy',
    'Work Injury Rehabilitation',
  ];

  const timeSlots = [
    '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards recovery. Fill out the form below and we will contact you 
              to confirm your appointment details.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-semibold text-lg mb-1">Appointment Request Sent Successfully!</p>
                    <p className="text-green-700">
                      Thank you for choosing Physio 360°. We have received your appointment request and will contact you within 24 hours to confirm.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold text-lg mb-1">Submission Failed</p>
                    <p className="text-red-700">
                      {errorMessage || 'Failed to send appointment request. Please try again or call us directly at (555) 123-4567.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#2f037d]">
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                      placeholder="Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-900 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="isNewPatient" className="block text-sm font-semibold text-gray-900 mb-2">
                      Are you a new patient?
                    </label>
                    <select
                      id="isNewPatient"
                      name="isNewPatient"
                      
                      value={formData.isNewPatient}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 cursor-pointer"
                    >
                      <option value="yes">Yes, I am a new patient</option>
                      <option value="no">No, I am a returning patient</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#2f037d]">
                  Appointment Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="branch" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Branch Location *
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select a location</option>
                      {branches.map((branch, index) => (
                        <option key={index} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#2f037d]">
                  Additional Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="reasonForVisit" className="block text-sm font-semibold text-gray-900 mb-2">
                      Reason for Visit
                    </label>
                    <textarea
                      id="reasonForVisit"
                      name="reasonForVisit"
                    
                      value={formData.reasonForVisit}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 resize-none"
                      placeholder="Please briefly describe your condition or reason for seeking physical therapy..."
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 resize-none"
                      placeholder="Any other information you would like us to know..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2f037d] hover:bg-[#1f0254] disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#2f037d]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Request</h3>
              <p className="text-gray-600">
                Fill out the appointment form with your details and preferred time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#2f037d]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Contact You</h3>
              <p className="text-gray-600">
                Our team will call you within 24 hours to confirm your appointment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#2f037d]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Begin Treatment</h3>
              <p className="text-gray-600">
                Arrive for your first session and start your recovery journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
