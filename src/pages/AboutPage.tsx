import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Breadcrumb */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(33, 45, 69, 0.8), rgba(33, 45, 69, 0.8)), url('./assests/gallery-clinic-space/2.webp')"
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
              <li className="text-carolina-blue">About Us</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">About Us</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                  Bringing Bright <span className="text-carolina-blue">Smiles</span> to Life with Expert Care
                </h2>
                <div className="w-16 h-1 bg-carolina-blue rounded-full mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-sonic-silver leading-relaxed">
                  Welcome to Wonder Smiles Kids & Family Dental Clinic, your premier choice when it comes to Dental care for you & your family! 
                  Our practice specializes in providing comprehensive dental services that prioritize both comfort and quality. 
                  We believe that excellent oral health is the foundation of overall well-being.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  At Wonder Smiles, comfort and kindness are our priority. Dr. Patil's expertise brings years of experience 
                  and a passion for delivering gentle care to help brighten smiles and maintain excellent oral health.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  We deliver exceptional care with the latest equipment, technology, advanced 
                  experience, and years of skilled practice spanning decades. Our professional and 
                  dedicated dental office takes pride in providing each patient with outstanding results.
                </p>
              </div>

              <a href="#contact" className="btn-primary inline-block">
                Learn More
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/assests/gallery/DSC02870.webp"
                alt="Dr. Chandrama Patil providing dental treatment"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-carolina-blue/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-royal-blue-light/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                  Meet <span className="text-carolina-blue">Dr. Chandrama Patil</span>
                </h2>
                <div className="w-16 h-1 bg-carolina-blue rounded-full mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-sonic-silver leading-relaxed">
                  Dr. Chandrama Patil (Pampatwar) is a highly skilled and compassionate pediatric and 
                  general dentist with a strong educational background from the prestigious Nair Hospital 
                  Dental College in Mumbai. Her passion lies in pediatric dentistry, where she specializes 
                  in treating children with empathy and exceptional care.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  Dr. Patil's expertise extends beyond routine dental procedures. She is particularly
                  skilled in behavioral management techniques, creating a calm and comforting
                  environment that helps anxious and scared patients feel at ease during their visits.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-cultured p-6 rounded-lg">
                <h4 className="font-montserrat font-semibold text-oxford-blue-1 mb-4">Qualifications:</h4>
                <ul className="space-y-2 text-sonic-silver">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    MDS from Nair Hospital Dental College, Mumbai
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Specialized in Pediatric Dentistry
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    15+ Years of Clinical Experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/assests/DSC02681.webp"
                alt="Dr. Chandrama Patil - Pediatric Dentist"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-carolina-blue/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-royal-blue-light/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-carolina-blue text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1">Our Mission</h3>
              </div>
              <p className="text-sonic-silver leading-relaxed">
                Our goal is to offer comprehensive, affordable, and meticulous dental procedures while delivering the 
                highest quality of preventive, restorative, and corrective dental care. We are committed to making 
                accessible, responsive and tailored to individual needs, ensuring the quality care with a patient-first approach.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-royal-blue-light text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1">Our Vision</h3>
              </div>
              <p className="text-sonic-silver leading-relaxed">
                To build a life in the leading center for Dental services, providing exceptional dental care and 
                services. To be the most valued healthcare partner in the community. We aim to combine the most advanced 
                dental technology and procedures to confidently deliver quality care and exceptional patient experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="/assests/gallery-clinic-space/3.webp"
                alt="Wonder Smiles Modern Clinic Interior"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-carolina-blue/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-royal-blue-light/10 rounded-full -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                  What Sets Us <span className="text-carolina-blue">Apart?</span>
                </h2>
                <div className="w-16 h-1 bg-carolina-blue rounded-full mb-6"></div>
              </div>

              <div className="space-y-6">
                {/* Experienced & Caring Team */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-carolina-blue text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                      Experienced & Caring Team
                    </h4>
                    <p className="text-sonic-silver">
                      Our skilled professionals bring empathy and expertise to provide gentle and effective 
                      dental care, especially for children and anxious patients.
                    </p>
                  </div>
                </div>

                {/* State-of-the-Art Technology */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-blue-light text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                      State-of-the-Art Technology
                    </h4>
                    <p className="text-sonic-silver">
                      We use the latest dental technology and equipment to deliver precise diagnostics 
                      and more comfortable treatment experiences.
                    </p>
                  </div>
                </div>

                {/* Comfort & Convenience */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                      Comfort & Convenience
                    </h4>
                    <p className="text-sonic-silver">
                      Our clinic is designed with patient comfort in mind, featuring a welcoming atmosphere 
                      that helps reduce anxiety and create positive dental experiences.
                    </p>
                  </div>
                </div>

                {/* Strict Hygiene Standards */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                      Strict Hygiene Standards
                    </h4>
                    <p className="text-sonic-silver">
                      We maintain the highest standards of sterilization and infection control to ensure 
                      a safe and hygienic environment for all our patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Happy Patients */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-carolina-blue mb-2">
                100 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Happy Smiles</div>
            </div>

            {/* Satisfaction Rate */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-carolina-blue mb-2">
                100 <span className="text-2xl">%</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Satisfaction Rate</div>
            </div>

            {/* Years of Experience */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-carolina-blue mb-2">
                3 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Years of Trusted Dental Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Today Section */}
      <section className="section-padding bg-oxford-blue-1 text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl">
              Visit Us <span className="text-carolina-blue">Today!</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Let us take care of your smile with our safe, effective, and innovative procedures. Schedule an appointment today and 
              experience exceptional dental care in a comfortable, family-friendly environment.
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
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;