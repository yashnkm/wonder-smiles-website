interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-lavender-web rounded-lg flex items-center justify-center group-hover:bg-carolina-blue group-hover:shadow-lg transition-all duration-300">
          <img 
            src={icon} 
            alt={title}
            className="w-10 h-10 filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
            width="100"
            height="100"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-montserrat font-bold text-lg text-oxford-blue-1 mb-2 group-hover:text-carolina-blue transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sonic-silver leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: './assets/images/service-icon-1.png',
      title: 'Pediatric Check-ups',
      description: 'Regular examinations and professional cleanings for children to maintain good oral hygiene and prevent cavities.'
    },
    {
      icon: './assets/images/service-icon-2.png',
      title: 'Preventive Care',
      description: 'Fluoride treatments and sealants to strengthen tooth enamel and protect against decay in children.'
    },
    {
      icon: './assets/images/service-icon-3.png',
      title: 'Restorative Treatments',
      description: 'Fillings, crowns, and space maintainers to treat and restore damaged or decayed teeth in children.'
    },
    {
      icon: './assets/images/service-icon-4.png',
      title: 'Special Needs Care',
      description: 'Specialized dental care tailored for children with various physical, developmental, or cognitive conditions.'
    },
    {
      icon: './assets/images/service-icon-5.png',
      title: 'Behavior Management',
      description: 'Compassionate techniques to help anxious or fearful children feel comfortable during treatment.'
    },
    {
      icon: './assets/images/service-icon-6.png',
      title: 'General Dentistry',
      description: 'Comprehensive dental services for all ages including cosmetic dentistry, extractions, and root canal treatment.'
    },
    {
      icon: './assets/images/service-icon-1.png',
      title: 'Emergency Care',
      description: 'Prompt treatment for dental injuries, sports trauma, fractured teeth, and other urgent dental issues.'
    },
    {
      icon: './assets/images/service-icon-2.png',
      title: 'Gum Disease Treatment',
      description: 'Scaling, root planing, and other procedures to treat and manage gingivitis and periodontitis.'
    }
  ];

  return (
    <section id="service" className="section-padding bg-cultured">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
            Our Services
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
            What We Provide
          </h2>
          <div className="w-20 h-1 bg-carolina-blue mx-auto rounded-full"></div>
        </div>

        {/* Services Grid - Matching Original Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout - 3x3 Grid with center banner */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {/* First Row */}
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
            
            {/* Second Row */}
            <ServiceCard {...services[3]} />
            
            {/* Center Service Banner */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                <img 
                  src="/assets/images/service-banner.png" 
                  alt="Professional dental services"
                  className="w-full h-auto max-w-sm rounded-lg shadow-lg"
                  width="409"
                  height="467"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-carolina-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Expert Care
                </div>
              </div>
            </div>
            
            <ServiceCard {...services[4]} />
            
            {/* Third Row */}
            <ServiceCard {...services[5]} />
            <ServiceCard {...services[6]} />
            <ServiceCard {...services[7]} />
          </div>
          
          {/* Mobile/Tablet Layout - 2 columns with banner at bottom */}
          <div className="lg:hidden">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            {/* Mobile Service Banner */}
            <div className="flex justify-center">
              <div className="relative group max-w-sm">
                <img 
                  src="/assets/images/service-banner.png" 
                  alt="Professional dental services"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width="409"
                  height="467"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-carolina-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Expert Care
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-sonic-silver mb-6 max-w-2xl mx-auto">
            Don't see the service you need? We offer comprehensive dental care solutions 
            tailored to your specific requirements. Contact us to discuss your dental health goals.
          </p>
          <a href="#contact" className="btn-primary mr-4">
            Book Consultation
          </a>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;