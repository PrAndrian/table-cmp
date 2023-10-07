import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../index.css'

/**
 * A customizable search bar component.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} [props.id='searchbar'] - The unique identifier for the search bar.
 * @param {function} props.onSearch - A callback function to handle search actions (required).
 * @param {string} props.width - The width of the search bar (required).
 * @param {string} props.height - The height of the search bar (required).
 * @param {string} [props.iconColor='black'] - The color of the search icon.
 * @param {string} [props.borderColor='black'] - The border color of the search bar.
 * @param {string} [props.inputTextColor='black'] - The text color of the search input field.
 * @param {string} [props.backgroundColor='white'] - The background color of the search input field.
 * @param {string} [props.placeHolder='Search'] - The placeholder text for the search input field.
 * @return {JSX.Element} The rendered SearchBar component.
 */
const SearchBar = ({ 
    id={id},
    onSearch, 
    width, 
    height, 
    placeHolder,
    iconColor, 
    borderColor, 
    backgroundColor,
    inputTextColor,
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div 
            className={`flex`} 
            style={{height:height,width:width}}
        >
            <div className={`
                flex
                items-center
                rounded-l-lg
                border-l
                border-t
                border-b
                border-opacity-40
                px-2 
            `}

            style={{backgroundColor:backgroundColor, borderColor:borderColor,color:iconColor}}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <input
                id={`${id}-searchbar`}
                type={"text"}
                className={`
                    w-full
                    rounded-r-lg
                    border-r
                    border-t
                    border-b
                    border-opacity-40 
                    font-bold
                    pl-1
                `}
                style={{
                    backgroundColor:backgroundColor, 
                    color:inputTextColor,
                    borderColor:borderColor,            
                }}
                onChange={handleSearchChange}
                placeholder={placeHolder}
                value={searchTerm}
            />
        </div>
    );
}

SearchBar.propTypes = {
    id: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    iconColor: PropTypes.string, // Couleur de l'icône
    borderColor: PropTypes.string, // Couleur de la bordure
    inputTextColor: PropTypes.string, // Couleur du texte de l'placeholder
    backgroundColor: PropTypes.string, // Couleur de fond de l'input
    placeHolder: PropTypes.string, // Couleur de fond de l'input
};


SearchBar.defaultProps = {
    id: "searchbar",
    iconColor: "black",
    borderColor: "black",
    inputTextColor: "black",
    backgroundColor: "white",
    placeHolder: "Search",
    width:"full",
    height:"45px", 
    onSearch: () => {},
  };

export default SearchBar;
