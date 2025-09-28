const Footer = () => {
  const services = [
    { name: "Pediatric Check-ups", href: "#" },
    { name: "Preventive Care", href: "#" },
    { name: "Restorative Treatments", href: "#" },
    { name: "Special Needs Care", href: "#" },
    { name: "Emergency Care", href: "#" },
    { name: "General Dentistry", href: "#" }
  ];

  return (
    <footer className="bg-oxford-blue-1 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <a href="#" className="text-2xl font-montserrat font-bold text-carolina-blue">
                  Dr. Chandrama Patil
                </a>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Specialized pediatric and general dentistry with compassionate care 
                for children and adults. Expert treatment for anxious patients and 
                children with special health care needs.
              </p>
              
              {/* Schedule */}
              <div className="flex items-start gap-3 bg-oxford-blue-2 rounded-lg p-4">
                <div className="w-10 h-10 bg-carolina-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Office Hours</div>
                  <div className="text-gray-300 text-sm">
                    Monday - Saturday:<br />
                    9:00am - 10:00pm
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Services */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-6 text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-300 hover:text-carolina-blue transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-6 text-white">
                Contact Us
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-carolina-blue flex-shrink-0 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Address</div>
                    <address className="text-gray-300 text-sm not-italic">
                      Wonder Smiles Kids & Family Dental Clinic,<br />
                      First floor, F03, Brahma Vantage High building,<br />
                      Police chowki, NDA Pashan Rd, opposite Bavdhan,<br />
                      Ram Nagar, Bavdhan, Pune, Maharashtra 411021
                    </address>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-carolina-blue flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href="tel:+917052101786" 
                      className="text-gray-300 hover:text-carolina-blue transition-colors duration-200"
                    >
                      +91-7052-101-786
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-carolina-blue flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href="mailto:info@chandramapatilclinic.com" 
                      className="text-gray-300 hover:text-carolina-blue transition-colors duration-200"
                    >
                      info@chandramapatilclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Contact Icons */}
      {/* Location Icon - Left Side */}
      <a 
        href="https://maps.google.com/?q=Wonder Smiles Kids & Family Dental Clinic, First floor,F03, Brahma Vantage High building, Police chowki, NDA Pashan Rd, opposite Bavdhan, Ram Nagar, Bavdhan, Pune, Maharashtra 411021"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 z-50"
        aria-label="View location on maps"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </a>
      
      {/* WhatsApp Icon - Bottom Right */}
      <a 
        href="https://wa.me/917052101786"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 z-50"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
      
      {/* Phone Icon - Right Side */}
      <a 
        href="tel:+917052101786"
        className="fixed bottom-6 right-6 w-12 h-12 bg-carolina-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-royal-blue-light transition-all duration-200 hover:scale-110 z-50"
        aria-label="Call us"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;