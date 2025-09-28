import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ServicesPage = () => {
  // Pediatric Dental Services
  const pediatricServices = [
    {
      id: 1,
      title: "Routine Check-ups and Cleanings",
      description: "Regular examinations and professional cleanings to maintain good oral hygiene and prevent cavities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Preventive Care",
      description: "Fluoride treatments to strengthen tooth enamel and sealants to protect chewing surfaces from decay.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      subServices: [
        "Fluoride Treatments: Strengthen tooth enamel and make teeth more resistant to decay",
        "Sealants: Protective coatings applied to chewing surfaces to prevent cavities"
      ]
    },
    {
      id: 3,
      title: "Restorative Treatments",
      description: "Comprehensive restoration services to repair and protect damaged teeth in children.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      subServices: [
        "Fillings: Treat cavities in both baby and permanent teeth",
        "Crowns: Restore and protect severely decayed or damaged teeth",
        "Space Maintainers: Hold open space for permanent teeth if baby tooth is lost prematurely"
      ]
    },
    {
      id: 4,
      title: "Behavior Management",
      description: "Compassionate techniques to help anxious or fearful children feel comfortable during treatment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Special Needs Dental Care",
      description: "Specialized care tailored to children with physical, developmental, or cognitive conditions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Sports Injury Treatment",
      description: "Treatment of trauma and fractured teeth during sports injuries with immediate care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // General Dental Services
  const generalServices = [
    {
      id: 1,
      title: "Cosmetic Dentistry",
      description: "Procedures to improve the appearance of teeth, such as teeth whitening and veneers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Restorations",
      description: "Comprehensive restoration services including fillings, inlays, and onlays to repair damaged teeth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Extractions",
      description: "Safe removal of teeth that are severely decayed, damaged, or impacted.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Root Canal Treatment",
      description: "Advanced endodontic therapy to save teeth with infected or damaged pulp.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Gum Disease Treatment",
      description: "Scaling, root planing, and procedures to treat and manage gingivitis and periodontitis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Emergency Dental Care",
      description: "Prompt treatment for dental injuries, severe toothaches, and other urgent dental issues.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(33, 45, 69, 0.8), rgba(33, 45, 69, 0.8)), url('./assests/gallery-clinic-space/5.webp')"
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
              <li className="text-carolina-blue">Services</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
        </div>
      </section>

      <main>
        {/* Pediatric Dental Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Pediatric <span className="text-carolina-blue">Dental Services</span>
              </h2>
              <div className="w-16 h-1 bg-carolina-blue rounded-full mx-auto mb-6"></div>
              <p className="text-sonic-silver text-lg max-w-3xl mx-auto">
                Specialized dental care designed specifically for children, providing gentle and compassionate treatment
                in a comfortable, child-friendly environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pediatricServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-cultured p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-carolina-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-oxford-blue-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sonic-silver leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.subServices && (
                    <ul className="space-y-2">
                      {service.subServices.map((subService, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-sonic-silver">
                          <svg className="w-4 h-4 text-carolina-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Dental Services Section */}
        <section className="section-padding bg-cultured">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                General <span className="text-carolina-blue">Dental Services</span>
              </h2>
              <div className="w-16 h-1 bg-carolina-blue rounded-full mx-auto mb-6"></div>
              <p className="text-sonic-silver text-lg max-w-3xl mx-auto">
                Comprehensive dental care for patients of all ages, utilizing the latest technology and techniques
                to ensure optimal oral health and beautiful smiles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-carolina-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-oxford-blue-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sonic-silver leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-padding bg-oxford-blue-1 text-white text-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl">
                Ready to Schedule Your <span className="text-carolina-blue">Appointment?</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you need pediatric dental care for your child or general dental services for your family,
                our experienced team is here to provide exceptional care in a comfortable environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/#appointment"
                  className="bg-carolina-blue hover:bg-royal-blue-light text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+917052101786"
                  className="border border-white hover:bg-white hover:text-oxford-blue-1 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Call Now: +91 70521 01786
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;