import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Dr. Chandrama Patil is absolutely wonderful with children. My daughter who was terrified of dentists now looks forward to her visits. The way she handles kids with special needs is truly remarkable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Parent"
  },
  {
    text: "As a parent of a child with autism, finding the right dentist was challenging. Dr. Patil's patience and understanding approach made all the difference. Highly recommend!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    name: "Rahul Mehta",
    role: "Parent"
  },
  {
    text: "Excellent pediatric care! Dr. Chandrama's clinic is child-friendly and she explains everything in a way kids can understand. My son actually enjoys his dental check-ups now.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    name: "Sneha Patel",
    role: "Mother of Two"
  },
  {
    text: "Professional, caring, and skilled. Dr. Patil treated my 4-year-old's cavity with such gentleness. The entire experience was stress-free for both me and my child.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Amit Gupta",
    role: "Father"
  },
  {
    text: "Best pediatric dentist in the area! The staff is amazing with children, and Dr. Chandrama has a natural gift for making kids comfortable. Clean, modern facility too.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    name: "Kavya Singh",
    role: "Parent"
  },
  {
    text: "Dr. Patil's expertise with special needs children is unmatched. My son has ADHD and she managed his treatment beautifully. Very grateful for her compassionate care.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face",
    name: "Vikram Joshi",
    role: "Parent"
  },
  {
    text: "Outstanding service and care! Dr. Patil's gentle approach helped my shy 3-year-old feel comfortable during her first dental visit. The staff is incredibly patient and kind.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    name: "Meera Kulkarni",
    role: "Mother"
  },
  {
    text: "Highly recommend Dr. Chandrama Patil for pediatric dental care. She took great care of my twins and made the experience fun for them. Professional and compassionate.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    name: "Suresh Agarwal",
    role: "Father of Twins"
  },
  {
    text: "Dr. Patil's clinic is a blessing for parents. The environment is child-friendly and she has a wonderful way of explaining dental care to children. My son loves going there!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    name: "Anjali Desai",
    role: "Parent"
  },
  {
    text: "Exceptional pediatric dentist! Dr. Patil handled my daughter's emergency dental issue with such care and expertise. Available when we needed her most. Truly grateful!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    name: "Ravi Nair",
    role: "Parent"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={`${props.className} relative overflow-hidden`} style={{ height: '400px' }}>
      {/* Fade gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cultured to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cultured to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 pb-8 absolute top-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-2xl border border-light-gray shadow-lg bg-white max-w-xl w-full hover:shadow-xl transition-shadow duration-300" key={i}>
                  <div className="text-sonic-silver text-base leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-4">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-carolina-blue/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-oxford-blue-1 text-base">{name}</div>
                      <div className="text-sonic-silver text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const MobileTestimonialsColumn = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} relative overflow-hidden`} style={{ height: '500px' }}>
      {/* Fade gradient overlays for mobile */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cultured to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cultured to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 absolute top-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.slice(0, 3).map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-2xl border border-light-gray shadow-lg bg-white hover:shadow-xl transition-shadow duration-300" key={i}>
                  <div className="text-sonic-silver text-base leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-4">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-carolina-blue/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-oxford-blue-1 text-base">{name}</div>
                      <div className="text-sonic-silver text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsColumns() {
  return (
    <section id="testimonials" className="py-20 bg-cultured overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-oxford-blue-1 mb-4">
            What Parents Say
          </h2>
          <p className="text-sonic-silver text-lg max-w-2xl mx-auto font-lato">
            Hear from the parents who trust Dr. Chandrama Patil with their children's dental health
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid md:grid-cols-5 gap-4 max-w-7xl w-full">
            <TestimonialsColumn
              testimonials={testimonials.slice(0, 2)}
              duration={15}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 4)}
              duration={20}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(4, 6)}
              duration={17}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(6, 8)}
              duration={22}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(8, 10)}
              duration={18}
              className="hidden md:block"
            />
            
            {/* Mobile version - single column with contained scrolling */}
            <MobileTestimonialsColumn className="md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}