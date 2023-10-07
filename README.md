# Table-Cmp React Component

Table-Cmp is a versatile and customizable React component built using Vite. It provides a responsive and feature-rich table for displaying tabular data. This component is designed to work seamlessly with various data sources and allows for easy sorting, pagination, and searching.

## Prerequisites
To use the SelectMenu component in your React application, you need:

  1. To have node Node : ^16.15.1

  2. To have install tailwindcss : 
    https://tailwindcss.com/docs/installation/framework-guides

## Installation

To use the SelectMenu component in your React application, follow these steps:

1. Install the package:

  ```bash
  npm install table-cmp
  ```

2. Your tailwin.config.js should be like this :

   ```javascript
   /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './node_modules/table-cmp/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```

3. Import the SelectMenu component into your React application:

   ```javascript
   import {
    EmployeeTable,
    SearchBar,
    ShowingRowTable,
    PaginationTable,
   } from "table-cmp";
   ```

4. You can now use the `SelectMenu` component in your application.

## Usage

### EmployeeTable Component

`EmployeeTable` is a table component that accepts the following props:

- `listEmployees` (array): An array of objects representing employee data.
- `headColumns` (array): An array of objects specifying the table's column headers.
- `minWidth` (string): The minimum width of the table.
- `height` (string): The height of the table.
- `headerBgColor` (string): The background color of the table header.
- `headerTextColor` (string): Text color of the table header.
- `sortedColumnColor` (string): The color of the sort icons.
- `bodyTextColor` (string): Text color of the table body.
- `bodyColor` (string): Background color of the table body.

Example usage:

```jsx
import { EmployeeTable } from 'table-cmp';

const App = () => {
  // Define your data and column headers
  const listEmployees = [...];
  const headColumns = [...];

  return (
    <EmployeeTable
      listEmployees={listEmployees}
      headColumns={headColumns}
      minWidth="200px"
      height="300px"
      headerBgColor="gray"
      headerTextColor="white"
      sortedColumnColor="blue"
      bodyTextColor={"black"}
      bodyColor={"white"}
    />
  );
};
```

### PaginationTable Component

`PaginationTable` is a pagination component that can be used to navigate through data pages. It accepts the following props:

- `totalItems` (number): The total number of items to paginate.
- `itemsPerPage` (number): The number of items displayed per page.
- `currentPage` (number): The current active page.
- `onPageChange` (function): A callback function invoked when a page is changed.
- `activeButtonColor` (string): The color of the active page button.
- `hoverButtonColor` (string): The color of the page buttons on hover.
- `width` (string): The width of the pagination component.
- `height` (string): The height of the pagination component.

Example usage:

```jsx
import { PaginationTable } from 'table-cmp';

const App = () => {
  const totalItems = 1000;
  const itemsPerPage = 10;
  const currentPage = 1;

  const handlePageChange = (newPage) => {
    // Handle page change logic here
  };

  return (
    <PaginationTable
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      activeButtonColor="blue"
      hoverButtonColor="gray"
      width="300px"
      height="40px"
    />
  );
};
```

### SearchBar Component

`SearchBar` is a search input component that allows users to search for specific data. It accepts the following props:

- `onSearch` (function): A callback function invoked when the search term changes.
- `width` (string): The width of the search input.
- `height` (string): The height of the search input.
- `placeHolder` (string): The placeholder text for the input.
- `iconColor` (string): The color of the search icon.
- `borderColor` (string): The color of the input border.
- `backgroundColor` (string): The background color of the input.
- `inputTextColor` (string): The text color of the input.

Example usage:

```jsx
import { SearchBar } from 'table-cmp';

const App = () => {
  const handleSearch = (searchTerm) => {
    // Handle search logic here
  };

  return (
    <SearchBar
      onSearch={handleSearch}
      width="300px"
      height="40px"
      placeHolder="Search"
      iconColor="black"
      borderColor="black"
      backgroundColor="white"
      inputTextColor="black"
    />
  );
};
```

### ShowingRowTable Component

`ShowingRowTable` is a component that displays information about the current page and items per page. It accepts the following props:

- `itemsPerPage` (number): The number of items displayed per page.
- `onItemsPerPageChange` (function): A callback function invoked when the items per page is changed.
- `totalItems` (number): The total number of items.
- `indexOfFirstItem` (number): The index of the first item on the current page.
- `indexOfLastItem` (number): The index of the last item on the current page.
- `labelColor` (string): The color of the "Show" label.
- `selectBorderColor` (string): The border color of the select input.
- `selectBackgroundColor` (string): The background color of the select input.
- `selectTextColor` (string): The text color of the select input.
- `spanTextColor` (string): The text color of the information span.
- `width` (string): The width of the component.
- `height` (string): The height of the component.

Example usage:

```jsx
import { ShowingRowTable } from 'table-cmp';

const App = () => {
  const itemsPerPage = 10;
  const totalItems = 100;
  const indexOfFirstItem = 1;
  const indexOfLastItem = 10;

  const handleItemsPerPageChange = (newItemsPerPage) => {
    // Handle items per page change logic here
  };

  return (
    <ShowingRowTable
      itemsPerPage={itemsPerPage}
      onItemsPerPageChange={handleItemsPerPageChange}
      totalItems={totalItems}
      indexOfFirstItem={indexOfFirstItem}
      indexOfLastItem={indexOfLastItem}
      labelColor="black"
      selectBorderColor="black"
      selectBackgroundColor="white"
      selectTextColor="black"
      spanTextColor="gray"
      width="auto"
      height="40px"
    />
  );
};
```

## PropTypes

Please refer to the PropTypes documentation for each component above for information on the expected prop types and their default values.

## License

This package is distributed under the MIT License. Feel free to use and customize it to suit your needs.

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/example/table-cmp/issues) on GitHub. We appreciate your feedback!