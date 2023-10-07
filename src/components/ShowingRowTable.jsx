import PropTypes from 'prop-types';

/**
 * A component for displaying and selecting the number of rows to show in a table.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} props.itemsPerPage - The number of items to display per page (required).
 * @param {function} props.onItemsPerPageChange - A callback function to handle items per page changes (required).
 * @param {number} props.totalItems - The total number of items in the table (required).
 * @param {number} props.indexOfFirstItem - The index of the first item currently displayed.
 * @param {number} props.indexOfLastItem - The index of the last item currently displayed.
 * @param {string} [props.labelColor] - The color of the "Show" label.
 * @param {string} [props.selectBorderColor] - The border color of the select input.
 * @param {string} [props.selectBackgroundColor] - The background color of the select input.
 * @param {string} [props.selectTextColor] - The text color of the select input.
 * @param {string} [props.spanTextColor] - The text color of the display span.
 * @param {string} props.width - The width of the component (required).
 * @param {string} props.height - The height of the component (required).
 * @return {JSX.Element} The rendered ShowingRowTable component.
 */
const ShowingRowTable = ({
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
  indexOfFirstItem,
  indexOfLastItem,
  labelColor,
  selectBorderColor,
  selectBackgroundColor,
  selectTextColor,
  spanTextColor,
  width, // Largeur du composant
  height, // Hauteur du composant
}) => {
  const handleItemsPerPageChange = (event) => {
    const selectedItemsPerPage = parseInt(event.target.value, 10);
    onItemsPerPageChange(selectedItemsPerPage);
  };

  return (
    <span style={{ width, height }} className='flex items-center gap-2'>
      <label
        htmlFor="show-rows"
        style={{ color: labelColor }}
      >
        Show
      </label>
      <select
        id="show-rows"
        className={`
          rounded-lg
          border
          border-opacity-40
          px-2
          font-bold
          cursor-pointer
        `}
        style={{ color:selectTextColor,height:height,backgroundColor:selectBackgroundColor, borderColor:selectBorderColor }}
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value={10}>10 rows</option>
        <option value={25}>25 rows</option>
        <option value={50}>50 rows</option>
        <option value={100}>100 rows</option>
      </select>
      <span style={{ color: spanTextColor }}>
        {indexOfFirstItem === 0 ? 1 : indexOfFirstItem}-
        {indexOfLastItem + ' of ' + totalItems}
      </span>
    </span>
  );
};

ShowingRowTable.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  indexOfFirstItem: PropTypes.number.isRequired,
  indexOfLastItem: PropTypes.number.isRequired,
  labelColor: PropTypes.string,
  selectBorderColor: PropTypes.string,
  selectBackgroundColor: PropTypes.string,
  selectTextColor: PropTypes.string,
  spanTextColor: PropTypes.string,
  width: PropTypes.string.isRequired, // Largeur du composant
  height: PropTypes.string.isRequired, // Hauteur du composant
};

ShowingRowTable.defaultProps = {
  width : 'auto',
  height:"45px", 
};

export default ShowingRowTable;
