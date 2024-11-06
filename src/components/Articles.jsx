import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const articles = [
  { title: "Grilled Tomatoes", image: "/tomato.png" },
  { title: "Snacks for Travel", image: "/snacks.png" },
  { title: "Post-workout Recipes", image: "/postwout.png" },
  { title: "How to Grill Corn", image: "/grill.png" },
  { title: "Crunchwrap Supreme", image: "/crunch.png" },
  { title: "Broccoli Cheese Soup", image: "/broclli.png" },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Get current articles to display
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <section className="py-16 px-6 lg:px-20">
      <h3 className="text-3xl font-bold text-primary mb-8">Latest Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article, index) => (
          <Card
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-primary">
              {article.title}
            </h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
            <Button className="bg-white text-black border border-black mt-4 rounded-3xl h-8 hover:bg-primary hover:text-white cursor-pointer">
              Read More
            </Button>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => {
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1, e);
                  }
                }}
                className="cursor-pointer hover:bg-default hover:text-black"
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  className={`cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-white text-black border border-black"
                  } hover:bg-primary hover:text-white`}
                  onClick={(e) => handlePageChange(i + 1, e)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={(e) => {
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1, e);
                  }
                }}
                className="cursor-pointer hover:bg-default hover:text-black"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Articles;
