import React, { useState } from "react";
import "../styles/CarouselContent.css";
import { Carousel } from "react-bootstrap";
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

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    toggleModal();
  };

  return (
    <>
      <h2 className="main-header mb-3">{title}</h2>
      <h5 className="sub-header">{subheading}</h5>
      <div className="py-4"></div>
      <Carousel
        interval={null}
        prevLabel=""
        nextLabel=""
        prevIcon={<span className="carousel-control-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon" />}
        indicators={false}
      >
        {chunkedCardData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {chunk.map((card, idx) => (
                <div
                  key={idx}
                  style={{ flex: "1 1 30%" }}
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
          </Carousel.Item>
        ))}
      </Carousel>
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
    </>
  );
}
