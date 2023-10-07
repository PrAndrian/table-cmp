import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

/**
 * A pagination component for navigating through a list of items.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} props.totalItems - The total number of items to paginate.
 * @param {number} props.itemsPerPage - The number of items to display per page.
 * @param {number} props.currentPage - The current page number.
 * @param {function} props.onPageChange - A callback function to handle page changes.
 * @param {string} props.activeButtonColor - The color of the active page button.
 * @param {string} props.hoverButtonColor - The color of the page button on hover.
 * @param {string} props.width - The width of the pagination component.
 * @param {string} props.height - The height of the pagination component.
 * @return {JSX.Element} The rendered PaginationTable component.
 */
const PaginationTable = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  activeButtonColor, // Couleur du bouton actif
  hoverButtonColor, // Couleur du bouton en survol
  width,
  height
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => {
      const pageNumber = i + 1;
      const isActive = currentPage === pageNumber;
      const buttonClasses = `inline-block px-3 py-1 rounded-full focus:outline-none hover:bg-${hoverButtonColor}`;

      return (
        <button
          key={pageNumber}
          className={buttonClasses}
          onClick={() => handlePageChange(pageNumber)}
          style={{backgroundColor : 
            isActive && activeButtonColor 
          }}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <nav className={`flex justify-end ${totalPages === 1 ? 'invisible' : 'visible'}`}
      style={{ width:width, height:height }}
    >
      <ul className="inline-flex items-center space-x-2">
        <li className={`rounded-md ${currentPage === 1 ? 'invisible' : ''}`}>
          <button
            className={`px-3 py-1 rounded-full hover:bg-${hoverButtonColor} focus:outline-none hover:opacity-80`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`rounded-md ${currentPage === totalPages + 1 || currentPage === totalPages ? 'invisible' : ''}`}>
          <button
            className={`px-3 py-1 rounded-full hover:bg-${hoverButtonColor} focus:outline-none hover:opacity-80`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

PaginationTable.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  activeButtonColor: PropTypes.string.isRequired, // Prop pour la couleur du bouton actif
  hoverButtonColor: PropTypes.string.isRequired, // Prop pour la couleur du bouton en survol
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
PaginationTable.defaultProps = {
  activeButtonColor: "green", // Prop pour la couleur du bouton actif
  hoverButtonColor: "green", // Prop pour la couleur du bouton en survol
  width: "auto",
  height: "auto",
};

export default PaginationTable;
