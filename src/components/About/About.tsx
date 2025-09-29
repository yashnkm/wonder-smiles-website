const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pediatric Specialist",
      description: "Specialized training in children's dental care and behavior management"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Special Needs Care",
      description: "Expert care for children with physical, developmental, or cognitive conditions"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9z" />
        </svg>
      ),
      title: "Behavioral Management",
      description: "Expert techniques to help children feel comfortable during dental visits"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Banner */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/assests/dr-chandrama-patil.jpeg"
                alt="Dr. Chandrama Patil - Pediatric Dentist"
                className="w-full h-auto rounded-lg shadow-xl"
                width="470"
                height="538"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-carolina-blue/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-royal-blue-light/10 rounded-full -z-10"></div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 -right-6 bg-white p-4 rounded-lg shadow-lg border border-light-gray">
              <div className="text-center">
                <div className="text-2xl font-bold text-carolina-blue">15+</div>
                <div className="text-sm text-sonic-silver">Years Experience</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
                About Dr. Chandrama Patil
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Specialized Care For Your 
                <span className="text-carolina-blue"> Child's</span> Smile
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
                adept at managing extremely anxious and scared patients, creating a calm and comforting 
                environment that helps them feel at ease. She also has specialized experience in 
                providing dental care for children with special health care needs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-1 gap-4 py-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-cultured rounded-lg hover:bg-lavender-web transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-carolina-blue text-white rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sonic-silver text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#service" className="btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;