const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Pediatric Care",
      description: "Our team delivers specialized, dependable pediatric dental services with gentle, expert care every step of the way."
    },
    {
      title: "Child-Focused Solutions, Anytime",
      description: "We specialize exclusively in pediatric dentistry, providing tailored solutions whenever you need them, no matter the season."
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely happy with our care, you don't pay—your satisfaction is our top priority."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-oxford-blue-1 leading-tight mb-6">
                Why Choose Wonder Smiles for Your Child's Dental Care?
              </h2>
            </div>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-montserrat font-bold text-oxford-blue-1">
                    {feature.title}
                  </h3>
                  <p className="text-sonic-silver font-lato leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="./assests/doctor-with-children.jpg"
                alt="Wonder Smiles - Friendly Pediatric Dental Care"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                width="600"
                height="400"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-carolina-blue/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-royal-blue-light/20 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;