import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const TestimonialsPage = () => {
  // Real Google Maps reviews data with enhanced structure
  const reviews = [
    {
      id: 1,
      name: "Prasad Palekar",
      rating: 5,
      timeAgo: "a week ago",
      review: "Found this relatively new clinic in Bavdhan and it's a true gem. The staff is perfect—they manage appointments well and even call to check in after treatment. The dentists are amazing, kind, and treat you with so much care.",
      verified: true,
      category: "General Care",
      bgImage: "/assests/gallery/DSC02652.jpg"
    },
    {
      id: 2,
      name: "Apurva Jadhav",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Absolutely the best dental experience I've ever had! Dr. Chandrama explained everything in detail and made me feel super comfortable. The clinic is modern, clean, and welcoming. Highly recommend Wonder Smiles!",
      verified: true,
      category: "Patient Experience",
      bgImage: "/assests/gallery/DSC02870.jpg"
    },
    {
      id: 3,
      name: "Prasad Patil",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "I had a fantastic visit to this clinic. The staff is incredibly professional, warm and attentive. The dentist explained everything clearly and made me feel completely at ease throughout the procedure. Very neat clinic that too with state of the art equipments. Would love to visit again!!!",
      verified: true,
      hasResponse: true,
      category: "Technology",
      bgImage: "/assests/gallery/DSC02683.jpg"
    },
    {
      id: 4,
      name: "Saurabh Patil",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Super friendly and down-to-earth dentist. Unlike other clinics that push for expensive treatments, they suggested only what was necessary. Trustworthy place.",
      verified: true,
      category: "Trust & Honesty",
      bgImage: "/assests/gallery/DSC02705.jpg"
    },
    {
      id: 5,
      name: "Piyush Sawale",
      rating: 5,
      timeAgo: "a week ago",
      review: "I had a great experience at wonder smiles Dental Clinic! The entire team is extremely professional, friendly, and made me feel comfortable from the moment I walked in. Dr. Chandrama took the time to explain the procedure thoroughly.",
      verified: true,
      hasResponse: true,
      category: "Professional Care",
      bgImage: "/assests/gallery/DSC02777.jpg"
    },
    {
      id: 6,
      name: "M Mamta",
      rating: 5,
      timeAgo: "6 days ago",
      review: "Dr. Chandrama was extremely kind and professional. She explained the entire procedure in detail, clearly identifying the root cause and how it could be prevented. She also highlighted the importance of maintaining good oral hygiene.",
      verified: true,
      hasResponse: true,
      category: "Education & Prevention",
      bgImage: "/assests/gallery/DSC02873.jpg"
    },
    {
      id: 7,
      name: "Shivraj Kale",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Five stars for professionalism and hygiene! The staff wear proper PPE, sanitize after every patient, and make you feel safe. My kids also loved the pediatric dentist here.",
      verified: true,
      category: "Hygiene & Safety",
      bgImage: "/assests/gallery/DSC02930.jpg"
    },
    {
      id: 8,
      name: "Onkar Utekar",
      rating: 5,
      timeAgo: "a week ago",
      review: "Our daughter's dental treatment was a very smooth experience, and we're happy with the results. We will definitely be recommending this clinic.",
      verified: true,
      hasResponse: true,
      category: "Pediatric Care",
      bgImage: "/assests/gallery/DSC02930.jpg"
    },
    {
      id: 9,
      name: "Itisha Jain",
      rating: 5,
      timeAgo: "a week ago",
      review: "We had an excellent experience here. Every appointment was on time, and the treatment was completed exactly as scheduled. We truly appreciate the professionalism and will surely be recommending Dr. Chandrama to our contacts. Thank you!",
      verified: true,
      hasResponse: true,
      category: "Punctuality",
      bgImage: "/assests/gallery/DSC02876.jpg"
    },
    {
      id: 10,
      name: "Gyanesh Mohata",
      rating: 5,
      timeAgo: "a week ago",
      review: "As a father, I'm very happy with this clinic. The pedodontist Dr. Chandrama was patient, caring, and made my child feel completely at ease. A very child-friendly and professional clinic — highly recommended!",
      verified: true,
      localGuide: true,
      hasResponse: true,
      category: "Pediatric Specialist",
      bgImage: "/assests/gallery/DSC02930.jpg"
    },
    {
      id: 11,
      name: "Prasanna Marudwar",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Excellent, knowledgeable, well-trained, and empathetic. Dr. Chandrama is an outstanding dentist. My daughter was very comfortable during the treatment, as the doctor patiently explained everything and handled her with great care.",
      verified: true,
      category: "Expertise",
      bgImage: "/assests/gallery/DSC02904.jpg"
    },
    {
      id: 12,
      name: "Dipak Khade",
      rating: 5,
      timeAgo: "a week ago",
      review: "I recently visited Wonder Smile Dental Clinic in Bavdhan for my nephew's dental treatment, and we had an excellent experience. The clinic is run by Dr. Chandrama who is very professional and caring.",
      verified: true,
      hasResponse: true,
      category: "Family Care",
      bgImage: "/assests/gallery/DSC02881.jpg"
    },
    {
      id: 13,
      name: "Yash Nikam",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "My nephew was always terrified of the dentist until we met Dr. Chandrama. Her caring approach changed a scared little one into a smiling patient.",
      verified: true,
      category: "Anxiety Management",
      bgImage: "/assests/gallery/DSC02930.jpg"
    },
    {
      id: 14,
      name: "Raghav Kavimandan",
      rating: 5,
      timeAgo: "a week ago",
      review: "What a great experience! Dr. Chandrama is gentle, professional, and really takes the time to listen. Highly recommend!",
      verified: true,
      category: "Communication",
      bgImage: "/assests/gallery/DSC02907.jpg"
    },
    {
      id: 15,
      name: "Neha Zavar",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "I had a wonderful experience, Dr. Chandrama is incredibly skilled, professional, and genuinely cares about the comfort and well-being of their patients. Thank you.",
      verified: true,
      category: "Patient Comfort",
      bgImage: "/assests/gallery/DSC02956.jpg"
    }
  ];


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(33, 45, 69, 0.8), rgba(33, 45, 69, 0.8)), url('./assests/gallery-clinic-space/4.webp')"
        }}
      >
        <div className="container-custom text-center text-white">
          <nav className="mb-6">
            <ol className="flex justify-center items-center space-x-2 text-sm">
              <li>
                <a href="/" className="hover:text-carolina-blue transition-colors">Home</a>
              </li>
              <li className="text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-carolina-blue">Testimonials</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Testimonials</h1>
        </div>
      </section>

      <main className="pt-8 pb-16">
        {/* Remove old hero section and continue with existing content */}
        <div className="hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <img
              src="/assests/gallery/DSC02930.jpg"
              alt="Happy Patients at Wonder Smiles"
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Google Reviews
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Patient Testimonials
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Real stories from real patients who trust Wonder Smiles for their family's dental care.
              Every review reflects our commitment to excellence and compassionate treatment.
            </p>

            {/* Overall Rating Card */}
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
                <div className="text-sm text-blue-200">Perfect Rating</div>
              </div>
              <div className="border-l border-white/30 pl-6">
                <div className="text-3xl font-bold text-white">{totalReviews}+</div>
                <div className="text-sm text-blue-200">Happy Patients</div>
              </div>
              <div className="border-l border-white/30 pl-6">
                <a
                  href="https://maps.app.goo.gl/5GfWtf2PXvJRR3a96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-200 font-medium transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          {/* Reviews Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-oxford-blue-1 text-lg">{review.name}</h3>
                        <div className="flex items-center gap-2">
                          {review.localGuide && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                              Local Guide
                            </span>
                          )}
                          {review.verified && (
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{review.timeAgo}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-600">Perfect Experience</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                  {review.hasResponse && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-600">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-blue-700">Wonder Smiles Team</span>
                      </div>
                      <p className="text-sm text-blue-700 italic">Thank you for your valuable feedback! We're delighted to have provided you with excellent care. 💙</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Why Families Trust Wonder Smiles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5.0</div>
                <div className="text-blue-200 text-sm">Perfect Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200 text-sm">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-200 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-oxford-blue-1 mb-4">
                Ready to Join Our Happy Patients?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the same exceptional care that earned us these amazing reviews.
                Book your appointment today and discover why families choose Wonder Smiles!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a
                  href="tel:+917052101786"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/917052101786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;