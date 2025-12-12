export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mohammed Ahmed",
      condition: "Sports Injury - ACL Recovery",
      rating: 5,
      text: "I was tired and needed a recovery session and actually it was one of my best recovery sessions i had and i was so relieved and felt so much better",
      date: "September 2025",
    },
    {
      name: "Raed Alafif",
      condition: "Chronic Back Pain",
      rating: 5,
      text: "Highly recommend, tried the recovery session and felt relief almost immediately, Dr.Hossam is very professional and highly skilled, thank you!",
      date: "August 2024",
    },
    {
      name: "Alissa Boothman",
      condition: "Post-Surgical Rehabilitation",
      rating: 5,
      text: "Me and my husband came for a recovery massage and the doctors made us feel so welcome and comfortable and and completely relaxed and removed tensions from our muscles, Thankyou so much doctors! 😃",
      date: "May 2024",
    },
    {
      name: "Diaaeldeen Fahmy",
      condition: "Stroke Recovery",
      rating: 5,
      text: "Wow, I had such a great time in physical therapy with Dr. Houssam! He's super professional and awesome to be around. He really knows his stuff and helps your body heal fast. It's not often you find someone like him in that field.",
      date: "July 2024",
    },
    {
      name: "Omar Mohammed",
      condition: "Work-Related Injury",
      rating: 5,
      text: "After injuring my shoulder at work, I needed specialized care to return to my job. The work conditioning program was tailored to my specific needs, and I was able to return to work ahead of schedule.",
      date: "June 2024",
    },
    {
      name: "Sherif Osman",
      condition: "Arthritis Management",
      rating: 5,
      text: "Living with arthritis was limiting my daily activities. The manual therapy and exercise programs have significantly reduced my pain and improved my quality of life. I highly recommend their services.",
      date: "May 2024",
    },
    {
      name: "Melanie Corn",
      condition: "Running Injury",
      rating: 5,
      text: "As a marathon runner, finding the right physical therapy was crucial. The sports rehabilitation program not only healed my injury but also taught me how to prevent future issues. I am running better than ever!",
      date: "April 2024",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their recovery journeys and experiences with Physio 360°. 
              Your success is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#2f037d] mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#2f037d] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#2f037d] mb-2">10,000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Patient Info */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-[#2f037d] mb-2">{testimonial.condition}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Recovery Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied patients who have transformed their lives with our expert care.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-[#2f037d] hover:bg-[#1f0254] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
