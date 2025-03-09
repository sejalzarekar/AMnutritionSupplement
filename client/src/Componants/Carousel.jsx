import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GymCarousel = () => {
  const products = [
    {
      id: 1,
      image: "/assets/p1.webp",
      title: "Whey Protein",
      description: "High-quality protein for muscle growth.",
      buttonText: "Shop Now",
      buttonColor: "warning",
    },
    {
      id: 2,
      image: "/assets/p2.jpeg",
      title: "Dumbbells Set",
      description: "Adjustable dumbbells for home workouts.",
      buttonText: "Shop Nhttps://via.placeholder.com/800x450ow",
      buttonColor: "danger",
    },
    {
      id: 3,
      image: "/assets/p3.webp",
      title: "Smart Treadmill",
      description: "Track your performance with smart features.",
      buttonText: "Shop Now",
      buttonColor: "success",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🏋️ Gym Products Sale 🏋️</h2>
      <Carousel fade interval={3000}>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.title}
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark p-2 rounded">
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <Button variant={product.buttonColor}>{product.buttonText}</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GymCarousel;
