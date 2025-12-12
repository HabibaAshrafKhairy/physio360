'use client';


export default function ContactPage() {
  const locations = [
    {
      name: "Maadi Clinic",
      address:
        "Maadi, 27 sayed dawood next to andalosia hospital taqseem ellaselky",
      phone: "01101401382",
      hours: "Daily: 2pm-10pm (Closed Friday)",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Maadi,+27+sayed+dawood+next+to+andalosia+hospital+taqseem+ellaselky",
    },
    {
      name: "Dokki Clinic",
      address: "Dokki, 129 Eltahrir street next to russian cultural center",
      phone: "01101401382",
      hours: "Sun, Tues, Thurs: 5pm-12am",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Dokki,+129+Eltahrir+street+next+to+russian+cultural+center",
    },
    {
      name: "Korba Heliopolis Clinic",
      address: "Heliopolis, 11 elthawra street next to vodafone egypt",
      phone: "01101401382",
      hours: "Daily: 11am-10pm (Closed Friday)",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Heliopolis,+11+elthawra+street+next+to+vodafone+egypt",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to schedule an appointment? We are here to
              help. Reach out to us through any of our convenient locations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 group cursor-pointer hover:bg-white p-3 -m-3 rounded-lg transition-all duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-[#2f037d] group-hover:text-[#17aa37] shrink-0 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-gray-600 group-hover:text-[#2f037d] transition-colors">
                        {location.address}
                      </p>
                      <span className="text-xs text-[#17aa37] opacity-0 group-hover:opacity-100 transition-opacity mt-1 inline-block">
                        Click for directions →
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-[#2f037d] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-600 hover:text-[#2f037d]"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#2f037d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-[#2f037d]">
                      {location.email}
                    </a>
                  </div> */}

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-[#2f037d] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
