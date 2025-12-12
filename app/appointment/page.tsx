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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose your preferred booking method - fill out the form below or
              contact us directly via WhatsApp for instant confirmation.
            </p>

            {/* WhatsApp Quick Book Button */}
            <a
              href="https://wa.me/201101401382?text=Hi%20Physio%20360%20Degree!%20%F0%9F%91%8B%0A%0AI'd%20like%20to%20book%20an%20appointment%3A%0A%0AName%3A%20%0APhone%3A%20%0AClinic%3A%20%5BMaadi%20%2F%20Dokki%20%2F%20Korba%5D%0AService%3A%20%0APreferred%20Date%3A%20%0APreferred%20Time%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Book via Email
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {submitStatus === "success" && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-green-800 font-semibold text-lg mb-1">
                      Appointment Request Sent Successfully!
                    </p>
                    <p className="text-green-700">
                      Thank you for choosing Physio 360°. We have received your
                      appointment request and will contact you within 24 hours
                      to confirm.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold text-lg mb-1">
                      Submission Failed
                    </p>
                    <p className="text-red-700">
                      {errorMessage ||
                        "Failed to send appointment request. Please try again or call us directly at (555) 123-4567."}
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
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="isNewPatient"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="branch"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                        <option key={index} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                        <option key={index} value={time}>
                          {time}
                        </option>
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
                    <label
                      htmlFor="reasonForVisit"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="additionalNotes"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Submit Request
              </h3>
              <p className="text-gray-600">
                Fill out the appointment form with your details and preferred
                time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#2f037d]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                We Contact You
              </h3>
              <p className="text-gray-600">
                Our team will call you within 24 hours to confirm your
                appointment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#2f037d]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Begin Treatment
              </h3>
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
