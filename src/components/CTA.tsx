import React from 'react';
import ContentImage from '../assets/Hitube_xpi2o3RnpT_2024_12_05_13_41_49.jpg'
import ContentImage1 from '../assets/240871623_1189446038202977_6949563621197514995_n.jpg'

const FineDetails: React.FC = () => {
  return (
    <section className="px-6 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">The Fine Details</h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
          all-day adventures, long shifts at work, and tough travel schedules.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left image and description */}
        <div className="text-center md:text-left">
          <img
            src={ContentImage}
            alt="Padded snack sleeve"
            className="rounded-lg w-full md:max-w-md mx-auto"
          />
          <p className="text-gray-600 text-sm md:text-base mt-4">
            The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
            combination of on-the-go treats that your heart desires. Yes, we did the math.
          </p>
        </div>

        {/* Right image and description */}
        <div className="text-center md:text-left">
          <img
            src={ContentImage1}
            alt="Quick-access pouch"
            className="rounded-lg w-full md:max-w-md mx-auto"
          />
          <p className="text-gray-600 text-sm md:text-base mt-4">
            Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
            for even the most unexpected snack attacks and sharing needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FineDetails;
