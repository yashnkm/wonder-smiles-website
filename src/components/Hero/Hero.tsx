const Hero = () => {
  return (
    <div className="relative pt-4 sm:pt-6 lg:pt-8 bg-gradient-to-br from-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[450px] lg:min-h-[550px] xl:min-h-[600px]">

          {/* Left Section - Content */}
          <div className="py-4 lg:py-0">
            <div className="max-w-xl">
              <p className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
                ✨ Expert Dental Care by Dr. Chandrama Patil
              </p>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Creating Beautiful, Healthy Smiles That Last a <span className="text-blue-600">Lifetime</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                Experience gentle, comprehensive dental care for your entire family. From preventive check-ups to advanced cosmetic procedures, we're here to make every visit comfortable and rewarding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
                <a
                  href="#appointment"
                  title="Book an Appointment"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 transform hover:-translate-y-0.5"
                  role="button"
                >
                  Book Your Appointment
                </a>
                <a
                  href="#services"
                  title="Our Services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-7 text-blue-600 transition-all duration-200 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  role="button"
                >
                  Explore Our Services
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600">4.9/5 Patient Rating</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-600">1000+ Happy Patients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Doctor Image */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

              {/* Main image */}
              <div className="relative">
                <img
                  className="w-full h-auto rounded-2xl shadow-2xl lg:max-w-lg xl:max-w-xl mx-auto"
                  src="/assests/doctor-hero.jpg"
                  alt="Dr. Chandrama Patil - Expert Dentist at Wonder Smiles"
                />

                {/* Floating card - adjusted position */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-3 hidden sm:block">
                  <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Open</p>
                      <p className="text-sm font-bold text-blue-600">9AM - 7PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;