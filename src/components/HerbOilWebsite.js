'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const HerbOilWebsite = () => {
  const [activeQnA, setActiveQnA] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [whatsappForm, setWhatsappForm] = useState({
    name: '',
    message: ''
  });

  const slides = [
    {
      image: "/api/placeholder/1200/600",
      title: "Premium Herb Oil Collection",
      description: "Handcrafted with natural ingredients"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Therapeutic Grade Essential Oils",
      description: "Experience deep relaxation"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Traditional Healing Blend",
      description: "Ancient wisdom meets modern wellness"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const products = [
    {
      id: 1,
      name: "Lavender Calm Massage Oil",
      description: "Soothing blend with pure lavender essential oil",
      price: "Rp 159.000",
    },
    {
      id: 2,
      name: "Eucalyptus Relief Oil",
      description: "Therapeutic blend for muscle relaxation",
      price: "Rp 179.000",
    }
  ];

  const benefits = [
    "Relieves muscle tension and soreness",
    "100% natural ingredients",
    "Promotes better sleep quality",
    "Improves blood circulation"
  ];

  const reviews = [
    {
      name: "Sarah W.",
      rating: 5,
      comment: "Amazing product! The lavender scent is so relaxing."
    },
    {
      name: "Mike T.",
      rating: 5,
      comment: "Really helps with my back pain. Highly recommended!"
    }
  ];

  const qna = [
    {
      question: "What are the main ingredients?",
      answer: "Our oils contain 100% natural ingredients including essential oils, carrier oils, and therapeutic herbs."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 2-3 working days within Jakarta, and 4-7 days for other regions."
    }
  ];

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Name: ${whatsappForm.name}\nMessage: ${whatsappForm.message}`
    );
    window.open(`https://wa.me/6285171048680?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Nasya</h1>
        </div>
      </header>

      {/* Hero Slideshow */}
      <section className="relative bg-black">
        <div className="relative h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Photos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/api/placeholder/400/300"
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border border-white rounded-lg">
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews and WhatsApp Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold">{review.name}</span>
                    <div className="ml-2">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
              <form onSubmit={handleWhatsappSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={whatsappForm.name}
                    onChange={(e) => setWhatsappForm({...whatsappForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    value={whatsappForm.message}
                    onChange={(e) => setWhatsappForm({...whatsappForm, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded flex items-center justify-center"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Links */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Shop Now</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://shopee.co.id/your-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-lg flex items-center"
            >
              <ShoppingBag className="mr-2" size={20} />
              Shopee
            </a>
            <a
              href="https://www.tokopedia.com/your-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-lg flex items-center"
            >
              <ShoppingBag className="mr-2" size={20} />
              Tokopedia
            </a>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {qna.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setActiveQnA(activeQnA === index ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  {activeQnA === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {activeQnA === index && (
                  <div className="px-6 py-4 border-t">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Natural Herb Massage Oils. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HerbOilWebsite;
