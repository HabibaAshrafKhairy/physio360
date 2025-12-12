export default function TeamPage() {
  const team = [
    {
      name: "Dr. Hossam Gomaa",
      role: "Lead Physical Therapist",
      specialty: "Orthopedic & Sports Rehabilitation",
      credentials: "DPT, OCS, CSCS",
      bio: "With over 15 years of experience, Dr. Hossam specializes in orthopedic rehabilitation and sports injuries.",
    },
    {
      name: "Dr. Mai Saeed",
      role: "Senior Physical Therapist",
      specialty: "Orthopedic Rehabilitation",
      credentials: "OMTC",
      bio: "Expert in post-surgical rehabilitation and chronic pain management with 6 years of clinical experience.",
    },
    {
      name: "Dr. Nourhan Mohammed",
      role: "Physical Therapist",
      specialty: "Manual Therapy",
      credentials: "OMTC",
      bio: "Specializes in manual therapy. Passionate about helping patients regain mobility and reduce pain.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of licensed physical therapists brings together decades of experience 
              and specialized expertise to provide you with the highest quality care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Profile Image Placeholder */}
                <div className="aspect-square bg-linear-to-br from-[#2f037d] to-[#1f0254] flex items-center justify-center">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#2f037d] font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{member.credentials}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Specialty:</p>
                    <p className="text-gray-600">{member.specialty}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We are always looking for passionate, skilled physical therapists who share our commitment 
            to exceptional patient care. If you are interested in joining our team, we would love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}
