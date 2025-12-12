export default function ServicesPage() {
  const services = [
    {
      title: "Customized physical therapy sessions",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
      description:
        "Personalized one-on-one therapy sessions tailored to your specific needs, goals, and condition to optimize your recovery and performance.",
      features: [
        "Comprehensive initial assessment",
        "Individualized treatment plans",
        "One-on-one attention throughout session",
        "Flexible scheduling options",
        "Progress tracking and plan adjustments",
      ],
    },
    {
      title: "Cupping Therapy (Dry/Wet)",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
      description:
        "Ancient healing technique using suction cups to promote blood flow, reduce pain, and accelerate recovery.",
      features: [
        "Dry cupping for muscle tension",
        "Wet cupping for detoxification",
        "Pain and inflammation relief",
        "Improved circulation",
        "Fascia release and mobility",
      ],
    },
    {
      title: "Recovery Sessions",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
      description:
        "Comprehensive recovery programs combining multiple therapeutic modalities to accelerate healing and optimize performance.",
      features: [
        "Deep tissue massage",
        "Pain relief techniques",
        "Customzied sessions according to your assessment",
        "Active recovery protocols",
        "Muscle recovery and regeneration",
        "Flexibility and mobility work",
      ],
    },
    {
      title: "Home visits",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
      description:
        "Professional physical therapy services delivered in the comfort of your own home, perfect for those with mobility limitations or busy schedules.",
      features: [
        "Convenient at-home treatment sessions",
        "All necessary equipment provided",
        "Personalized care in familiar environment",
        "Flexible scheduling to fit your routine",
        "Ideal for post-surgery or limited mobility",
        "Family involvement encouraged",
      ],
    },
    {
      title: "Sports Rehabilitation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      description:
        "Comprehensive rehabilitation programs designed for athletes at all levels to recover from injuries and enhance performance.",
      features: [
        "Sports injury assessment and treatment",
        "Performance enhancement programs",
        "Injury prevention strategies",
        "Return-to-sport protocols",
        "Athletic conditioning",
      ],
    },
    {
      title: "Post-Surgical Rehabilitation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Expert post-operative care to ensure optimal recovery after orthopedic surgeries.",
      features: [
        "Joint replacement recovery",
        "ACL/PCL reconstruction rehab",
        "Rotator cuff repair recovery",
        "Spinal surgery rehabilitation",
        "Fracture healing support",
      ],
    },
    {
      title: "Pain Management",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      description:
        "Advanced techniques to manage chronic pain and improve your quality of life.",
      features: [
        "Chronic back pain treatment",
        "Arthritis management",
        "Headache and migraine relief",
        "Fibromyalgia care",
        "Nerve pain management",
      ],
    },
    {
      title: "Manual Therapy",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      ),
      description:
        "Hands-on techniques to improve mobility, reduce pain, and restore function.",
      features: [
        "Joint mobilization",
        "Soft tissue massage",
        "Myofascial release",
        "Trigger point therapy",
        "Spinal manipulation",
      ],
    },
    {
      title: "Neurological Rehabilitation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
      description:
        "Specialized care for patients with neurological conditions and movement disorders.",
      features: [
        "Stroke recovery programs",
        "Parkinsons disease management",
        "Multiple sclerosis care",
        "Balance and gait training",
        "Vestibular rehabilitation",
      ],
    },
    {
      title: "Geriatric Physical Therapy",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      description:
        "Comprehensive care focused on maintaining independence and mobility for older adults.",
      features: [
        "Fall prevention programs",
        "Balance and coordination training",
        "Osteoporosis management",
        "Arthritis care",
        "Post-hospitalization recovery",
      ],
    },
    {
      title: "Work Injury Rehabilitation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      description:
        "Specialized programs to help you recover from work-related injuries and return to your job safely.",
      features: [
        "Ergonomic assessments",
        "Functional capacity evaluations",
        "Work conditioning programs",
        "Return-to-work planning",
        "Injury prevention training",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physical therapy services tailored to your unique needs. 
              We combine evidence-based treatments with compassionate care to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#2f037d] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#2f037d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features List */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900 mb-3">What We Offer:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-[#2f037d] mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#2f037d] to-[#1f0254]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl text-purple-50 mb-8">
            Schedule your initial consultation today and take the first step towards recovery.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-white hover:bg-gray-100 text-[#2f037d] px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </>
  );
}
