import React, { useState } from "react";
import "../styles/CarouselContent.css";
import BookModal from "./Modal";
import BookCard from "./CardComponent";

interface CardData {
  author: string;
  description: string;
  image: string;
  title: string;
  rating: number;
}

const cardData = [
  {
    title: "Demo Book",
    author: "N/A",
    image: "/pictures/demo-book.png",
    description: "Lorem ipsum",
    rating: 0,
  },
  {
    title: "Book Cover",
    author: "N/A",
    image: "/pictures/Book Cover Template.png",
    description: "Lorem ipsum",
    rating: 0,
  },
  {
    title: "Demo Book #2",
    author: "N/A",
    image: "/pictures/demo-book2.png",
    description: "Lorem ipsum",
    rating: 0,
  },
  {
    title: "Demo Book #3",
    author: "N/A",
    image: "/pictures/demo-book3.png",
    description: "Lorem ipsum",
    rating: 0,
  },
  {
    title: "Demo Book #3.5",
    author: "N/A",
    image: "/pictures/demo-book3.png",
    description: "Lorem ipsum",
    rating: 0,
  },
  {
    title: "The Shadows of the Tree",
    author: "NexusRead Originals",
    image: "/pictures/TSOT.png",
    description:
      "This is the story of a teen from Ethiopia who becomes captivated by the legend of the mysterious blue glowing trees and their extraordinary fruit. Determined to find the tree, he stumbles upon its location by chance while watching a show. Fueled by curiosity, he embarks on a journey to reach the tree and finally taste its marvelous fruit. Consuming the fruit alters his life in ways he could never have imagined. Join him in this suspenseful and captivating first installment of The Shadows of the Tree series, as he navigates the intriguing aftermath of his encounter with the fruit.",
    rating: 5,
  },
] as CardData[];

const chunkArray = (arr: CardData[], chunkSize: number) => {
  const chunkedArr: CardData[][] = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
  }
  return chunkedArr;
};
const chunkedCardData = chunkArray(cardData, 3);

export default function CarouselContent({
  title,
  subheading,
}: {
  title: string;
  subheading: string;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    toggleModal();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < chunkedCardData.length - 1 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : chunkedCardData.length - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="main-header mb-3">{title}</h2>
      <h5 className="sub-header">{subheading}</h5>
      <div className="py-4"></div>

      <div className="custom-carousel">
        <button
          className="carousel-control prev"
          onClick={prevSlide}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="carousel-inner">
          {chunkedCardData.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="carousel-chunk">
                {chunk.map((card, idx) => (
                  <div
                    key={idx}
                    className="carousel-card-wrapper"
                    onClick={() => handleCardClick(card)}
                  >
                    <div className="mx-auto book-card">
                      <BookCard
                        image={card.image}
                        alt="book cover"
                        title={""}
                        text={""}
                      />
                    </div>
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
          author={selectedCard.author}
          description={selectedCard.description}
          image={selectedCard.image}
          title={selectedCard.title}
          isOpen={isOpen}
          rating={selectedCard.rating}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}
