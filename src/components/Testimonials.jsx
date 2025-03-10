import React from "react";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Organization: Transportation Manager, PepsiCo",
    text: "We’ve seen a significant reduction in transportation cost and improved delivery times since implementing Spot Tracker. Their route optimization algorithms have been a game changer for our business.",
    image: "/Ellipse.png", 
  },
  {
    name: "Sarah John",
    role: "Organization: Logistics Manager, Nestle",
    text: "Spot Tracker has revolutionized our inventory management process. We’ve reduced stock outs by 30% and improved delivery times by 25%.",
    image: "Ellipse3.png", 
  },
  {
    name: "Rashid Khan",
    role: "Organization: Marketing Manager, Shan Foods",
    text: "We were struggling to keep track of our inventory across multiple warehouses. Spot Tracker’s real-time tracking and alerts have saved our time and reduced errors.",
    image: "Ellipse1.png", 
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full bg-white py-12 flex justify-center items-center min-h-screen">
      {/* Parent Div */}
      <div className="w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <p className="text-gray-600 mt-2 font-medium text-center">What Our Clients Say</p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
