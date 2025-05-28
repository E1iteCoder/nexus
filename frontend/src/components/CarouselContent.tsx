import React, { useState } from "react";
import "../styles/CarouselContent.css";
import BookModal from "./Modal";
import BookCard from "./CardComponent";

// 1) Import your images from src/assets
import demoBook1 from "../assets/demo-book.png";
import demoBook2 from "../assets/demo-book2.png";
import demoBook3 from "../assets/demo-book3.png";
import bookCover from "../assets/Book Cover Template.png";
import tsotCover from "../assets/TSOT.png";

interface CardData {
  title: string;
  author: string;
  description: string;
  image: string;
  rating: number;
}

const cardData: CardData[] = [
  { title: "Demo Book",          author: "N/A", image: demoBook1, description: "Lorem ipsum", rating: 0 },
  { title: "Book Cover",         author: "N/A", image: bookCover, description: "Lorem ipsum", rating: 0 },
  { title: "Demo Book #2",       author: "N/A", image: demoBook2, description: "Lorem ipsum", rating: 0 },
  { title: "Demo Book #3",       author: "N/A", image: demoBook3, description: "Lorem ipsum", rating: 0 },
  { title: "Demo Book #3.5",     author: "N/A", image: demoBook3, description: "Lorem ipsum", rating: 0 },
  { title: "The Shadows of the Tree",
    author: "Nexus Originals",
    image: tsotCover,
    description: `This is the story of a teen from Ethiopia who becomes captivated by the legend of the mysterious blue glowing trees…`,
    rating: 5
  },
];

// chunk helper
const chunkArray = (arr: CardData[], size: number) => {
  const chunks: CardData[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
const chunkedCardData = chunkArray(cardData, 3);

export default function CarouselContent({
  title,
  subheading,
}: {
  title: string;
  subheading: string;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    toggleModal();
  };

  const nextSlide = () =>
    setCurrentSlide((c) => (c < chunkedCardData.length - 1 ? c + 1 : 0));
  const prevSlide = () =>
    setCurrentSlide((c) => (c > 0 ? c - 1 : chunkedCardData.length - 1));

  return (
    <div className="carousel-container">
      <h2 className="main-header">{title}</h2>
      <h5 className="sub-header">{subheading}</h5>

      <div className="custom-carousel">
        <button
          className="carousel-control prev"
          onClick={prevSlide}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="carousel-inner">
          {chunkedCardData.map((chunk, i) => (
            <div
              key={i}
              className={`carousel-item ${
                i === currentSlide ? "active" : ""
              }`}
            >
              <div className="carousel-chunk">
                {chunk.map((card, idx) => (
                  <div
                    key={idx}
                    className="carousel-card-wrapper"
                    onClick={() => handleCardClick(card)}
                  >
                    <BookCard
                      image={card.image}
                      alt={card.title}
                      title={card.title}
                      text={card.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control next"
          onClick={nextSlide}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {selectedCard && (
        <BookModal
          {...selectedCard}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}
