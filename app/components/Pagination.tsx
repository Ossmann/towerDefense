
interface PaginationProps {
  gamesPerPage: number;
  totalGames: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }: PaginationProps) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, number: number) => {
      e.preventDefault(); // Prevent default anchor behavior
      paginate(number);
    };
  
    return (
            <nav className="flex justify-center mt-8">
              <ul className="flex flex-row space-x-2">
                {/* Display first page */}
                {pageNumbers.length > 0 && (
                  <li>
                    <a
                      onClick={(e) => handleClick(e, 1)}
                      href="#!"
                      className={`flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-md shadow-sm transition-all duration-200 hover:shadow-md ${
                        currentPage === 1
                          ? "bg-blue-600 text-white border-blue-600 transform translate-y-[-2px]"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      1
                    </a>
                  </li>
                )}
          
                {/* Show ellipsis if currentPage > 3 */}
                {currentPage > 3 && (
                  <li className="flex items-center">
                    <span className="w-10 text-center text-gray-500">...</span>
                  </li>
                )}
          
                {/* Show pages around current page */}
                {pageNumbers
                  .filter(number => number !== 1 && number !== pageNumbers.length && 
                          number >= currentPage - 1 && number <= currentPage + 1)
                  .map(number => (
                    <li key={number}>
                      <a
                        onClick={(e) => handleClick(e, number)}
                        href="#!"
                        className={`flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-md shadow-sm transition-all duration-200 hover:shadow-md ${
                          currentPage === number
                            ? "bg-blue-600 text-white border-blue-600 transform translate-y-[-2px]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                        aria-current={currentPage === number ? "page" : undefined}
                      >
                        {number}
                      </a>
                    </li>
                  ))}
          
                {/* Show ellipsis if currentPage < lastPage - 2 */}
                {currentPage < pageNumbers.length - 2 && (
                  <li className="flex items-center">
                    <span className="w-10 text-center text-gray-500">...</span>
                  </li>
                )}
          
                {/* Display last page if there are more than 1 page */}
                {pageNumbers.length > 1 && (
                  <li>
                    <a
                      onClick={(e) => handleClick(e, pageNumbers.length)}
                      href="#!"
                      className={`flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-md shadow-sm transition-all duration-200 hover:shadow-md ${
                        currentPage === pageNumbers.length
                          ? "bg-blue-600 text-white border-blue-600 transform translate-y-[-2px]"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumbers.length}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          );
  };