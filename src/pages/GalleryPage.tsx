import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Gallery photos - curated selection with varied layouts
  const photos = [
    { id: 1, src: '/assests/gallery/DSC02652.webp', alt: 'Dr. Chandrama Patil at Wonder Smiles', featured: true },
    { id: 2, src: '/assests/gallery/DSC02683.jpg', alt: 'Advanced dental equipment and technology', featured: true },
    { id: 3, src: '/assests/gallery/DSC02675.webp', alt: 'Modern dental clinic facility' },
    { id: 4, src: '/assests/gallery/DSC02681.webp', alt: 'Professional dental care' },
    { id: 5, src: '/assests/gallery/DSC02777.webp', alt: 'State-of-the-art dental technology' },
    { id: 6, src: '/assests/gallery/DSC02870.webp', alt: 'Comfortable patient area' },
    { id: 7, src: '/assests/gallery/DSC02873.webp', alt: 'Professional dental workspace' },
    { id: 8, src: '/assests/gallery/DSC02876.webp', alt: 'Modern clinic environment' },
    { id: 9, src: '/assests/gallery/DSC02881.webp', alt: 'Quality dental care facility' },
    { id: 10, src: '/assests/gallery/DSC02904.webp', alt: 'Wonder Smiles treatment area' },
    { id: 11, src: '/assests/gallery/DSC02907.webp', alt: 'Expert dental care setup' },
    { id: 12, src: '/assests/gallery/DSC02930.webp', alt: 'Pediatric dental care' },
    { id: 13, src: '/assests/gallery/DSC02940.webp', alt: 'Comprehensive dental services' },
    { id: 14, src: '/assests/gallery/DSC02956.webp', alt: 'Professional dental practice' },
  ];

  // Video data - Google Drive video
  const videos = [
    {
      id: 1,
      title: 'Wonder Smiles Clinic Tour',
      driveId: '1pmge1ehdyj76NB5wqjvF1LmJ-N20V8vk',
      thumbnail: '/assests/gallery/DSC02652.webp'
    },
  ];

  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(33, 45, 69, 0.8), rgba(33, 45, 69, 0.8)), url('./assests/gallery-clinic-space/3.webp')"
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
              <li className="text-carolina-blue">Gallery</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Gallery</h1>
        </div>
      </section>

      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation - Optimized */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'photos'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Photos ({photos.length})
                </span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Videos ({videos.length})
                </span>
              </button>
            </div>
          </div>

          {/* Photos Section with Masonry Layout */}
          {activeTab === 'photos' && (
            <div className="space-y-8">
              {/* Featured Photos - Large Display */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {photos.filter(photo => photo.featured).slice(0, 2).map((photo) => (
                  <div
                    key={photo.id}
                    className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                    onClick={() => setSelectedImage(photo)}
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-lg mb-2">{photo.alt}</h3>
                        <p className="text-blue-200 text-sm">Click to view full size</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                ))}
              </div>

              {/* Regular Photos - Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.filter(photo => !photo.featured).map((photo) => (
                  <div
                    key={photo.id}
                    className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-200 hover:scale-102"
                    onClick={() => setSelectedImage(photo)}
                  >
                    <div className="aspect-square">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section with Enhanced Design */}
          {activeTab === 'videos' && (
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-102"
                    onClick={() => setSelectedVideo(video.driveId)}
                  >
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-20 h-20 bg-white/20 rounded-full absolute -inset-2 animate-ping"></div>
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors duration-200">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        LIVE TOUR
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-oxford-blue-1 mb-3">{video.title}</h3>
                      <p className="text-gray-600 mb-4">
                        Take a virtual tour of our state-of-the-art dental facility and see why families choose Wonder Smiles for their dental care.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          HD Quality
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Virtual Tour
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Image Lightbox Modal - Enhanced */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{selectedImage.alt}</h3>
                <p className="text-blue-200 text-sm">Wonder Smiles Dental Clinic</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Video Modal - Enhanced */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-6xl">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo}/preview`}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;