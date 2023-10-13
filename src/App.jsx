import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import ShowingRowTable from "./components/ShowingRowTable";
import PaginationTable from "./components/PaginationTable";
import { useState } from "react";
import EmployeeTableVariants from "./examples/EmployeeTableVariants";
import PaginationTableVariants from "./examples/PaginationTableVariants";
import SearchBarVariants from "./examples/SearchBarVariants";
import ShowingRowTableVariants from "./examples/ShowingRowTableVariants";

const App = () => {
  const employees = [
    {
        firstName: "John",
        lastName: "Doe",
        birthdate: "15/03/1985",
        startDate: "12/07/2010",
        department: "Engineering",
        street: "123 Main Street",
        city: "New York",
        state: "New York",
        zipCode: "10001",
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        birthdate: "25/06/1990",
        startDate: "10/02/2015",
        department: "Marketing",
        street: "456 Elm Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
    },
    {
        firstName: "David",
        lastName: "Johnson",
        birthdate: "05/11/1982",
        startDate: "20/09/2008",
        department: "Finance",
        street: "789 Oak Avenue",
        city: "Chicago",
        state: "Illinois",
        zipCode: "60601",
    },
    {
        firstName: "Emily",
        lastName: "Brown",
        birthdate: "12/12/1988",
        startDate: "05/04/2013",
        department: "Sales",
        street: "567 Pine Road",
        city: "San Francisco",
        state: "California",
        zipCode: "94101",
    },
    {
        firstName: "Michael",
        lastName: "Williams",
        birthdate: "18/09/1980",
        startDate: "30/11/2007",
        department: "Engineering",
        street: "890 Cedar Lane",
        city: "Seattle",
        state: "Washington",
        zipCode: "98101",
    },
    {
        firstName: "Linda",
        lastName: "Miller",
        birthdate: "03/05/1993",
        startDate: "15/08/2016",
        department: "Marketing",
        street: "234 Birch Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90002",
    },
    {
        firstName: "William",
        lastName: "Jones",
        birthdate: "28/07/1977",
        startDate: "10/03/2005",
        department: "Finance",
        street: "678 Oak Lane",
        city: "Chicago",
        state: "Illinois",
        zipCode: "60602",
    },
    {
        firstName: "Sarah",
        lastName: "Davis",
        birthdate: "21/06/1995",
        startDate: "25/09/2017",
        department: "Sales",
        street: "345 Elm Road",
        city: "San Francisco",
        state: "California",
        zipCode: "94102",
    },
    {
        firstName: "Robert",
        lastName: "Taylor",
        birthdate: "09/08/1983",
        startDate: "17/12/2012",
        department: "Engineering",
        street: "456 Maple Avenue",
        city: "Seattle",
        state: "Washington",
        zipCode: "98102",
    },
    {
        firstName: "Karen",
        lastName: "Wilson",
        birthdate: "14/04/1991",
        startDate: "05/07/2014",
        department: "Marketing",
        street: "789 Cedar Road",
        city: "Los Angeles",
        state: "California",
        zipCode: "90003",
    },
    {
        firstName: "John",
        lastName: "Doe",
        birthdate: "15/03/1985",
        startDate: "12/07/2010",
        department: "Engineering",
        street: "123 Main Street",
        city: "New York",
        state: "New York",
        zipCode: "10001",
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        birthdate: "25/06/1990",
        startDate: "10/02/2015",
        department: "Marketing",
        street: "456 Elm Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
    },
    {
        firstName: "David",
        lastName: "Johnson",
        birthdate: "05/11/1982",
        startDate: "20/09/2008",
        department: "Finance",
        street: "789 Oak Avenue",
        city: "Chicago",
        state: "Illinois",
        zipCode: "60601",
    },
    {
        firstName: "Emily",
        lastName: "Brown",
        birthdate: "12/12/1988",
        startDate: "05/04/2013",
        department: "Sales",
        street: "567 Pine Road",
        city: "San Francisco",
        state: "California",
        zipCode: "94101",
    },
    {
        firstName: "Michael",
        lastName: "Williams",
        birthdate: "18/09/1980",
        startDate: "30/11/2007",
        department: "Engineering",
        street: "890 Cedar Lane",
        city: "Seattle",
        state: "Washington",
        zipCode: "98101",
    },
    {
        firstName: "Linda",
        lastName: "Miller",
        birthdate: "03/05/1993",
        startDate: "15/08/2016",
        department: "Marketing",
        street: "234 Birch Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90002",
    },
    {
        firstName: "William",
        lastName: "Jones",
        birthdate: "28/07/1977",
        startDate: "10/03/2005",
        department: "Finance",
        street: "678 Oak Lane",
        city: "Chicago",
        state: "Illinois",
        zipCode: "60602",
    },
    {
        firstName: "Sarah",
        lastName: "Davis",
        birthdate: "21/06/1995",
        startDate: "25/09/2017",
        department: "Sales",
        street: "345 Elm Road",
        city: "San Francisco",
        state: "California",
        zipCode: "94102",
    },
    {
        firstName: "Robert",
        lastName: "Taylor",
        birthdate: "09/08/1983",
        startDate: "17/12/2012",
        department: "Engineering",
        street: "456 Maple Avenue",
        city: "Seattle",
        state: "Washington",
        zipCode: "98102",
    },
    {
        firstName: "Karen",
        lastName: "Wilson",
        birthdate: "14/04/1991",
        startDate: "05/07/2014",
        department: "Marketing",
        street: "789 Cedar Road",
        city: "Los Angeles",
        state: "California",
        zipCode: "90003",
    },
  ];

  const listEmployees = employees

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setSearchResults] = useState(listEmployees); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Définition des colonnes du tableau
    const columns = [
      { label: "First Name", value: "firstName" },
      { label: "Last Name", value: "lastName" },
      { label: "Birthday", value: "birthdate" },
      { label: "Start Date", value: "startDate" },
      { label: "Department", value: "department" },
      { label: "Street", value: "street" },
      { label: "City", value: "city" },
      { label: "State", value: "state" },
      { label: "Zip Code", value: "zipCode" }
  ];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    if(searchTerm===''){
      setSearchResults(listEmployees)
      return;
    }

    const filteredResults = listEmployees.filter((employee) =>{
      return Object.values(employee).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
    setCurrentPage(1);
  };

  return (
    <>
      <main className="px-10">
        <h1 className="text-3xl font-bold">Example</h1>
        <div className="
          flex 
          justify-end 
          items-center 
          pt-[32px] 
          pb-[50px]
        ">
          <SearchBar 
            id={"table"}
            onSearch={handleSearch} 
            width="300px" 
            height="45px"
            placeHolder={'Search'}
            borderColor={'#414A3D'}
            backgroundColor={'transparent'}
          />
        </div>
        
        <div className="overflow-y-hidden overflow-x-auto grow">
          <EmployeeTable 
            headColumns={columns}
            listEmployees={
              currentItems.slice(indexOfFirstItem, indexOfLastItem)
            }
            headerBgColor={'black'} 
            sortedColumnColor ={'red'}
            headerTextColor={"white"}
            bodyTextColor={"orange"}
            bodyColor={"blue"}
            minWidth={'1440px'}
            height={'500px'}
          />
        </div>

        <footer className="
          flex
          justify-between
          items-centers
          py-6
          h-[105px]
          border-t 
          border-[#414A3D] 
          border-opacity-40
        ">
          <ShowingRowTable
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={listEmployees.length}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            height={'40px'}
            labelColor="#414A3D" // Couleur de l'étiquette "Show"
            selectBorderColor={'#414A3D'} // Couleur de la bordure du select
            selectBackgroundColor="transparent" // Couleur de fond du select
            selectTextColor="#414A3D" // Couleur du texte du select
            selectCursor="#414A3D" // Type de curseur pour le select
            spanTextColor="#414A3D" // Couleur du texte dans la balise <span>
          />
          <PaginationTable
            totalItems={currentItems.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            activeButtonColor={'orange'} // Couleur du bouton actif
            hoverButtonColor={'red'} // Couleur du bouton en survol
            width="370px"
            height="45px"
          />
        </footer>
        <div>
          <h2 className="text-xl font-bold">Employee Management Dashboard</h2>
          <p>Description: This example demonstrates an Employee Management Dashboard built with React. The dashboard allows users to search, filter, and display a list of employees with various details, including first and last names, birthdate, start date, department, address, and more. It features various components and their variants to enhance the user interface and experience.</p>

          <ul>
              <li>
                  <h2>Components Used</h2>
                  <ul>
                      <li> -<strong>SearchBar:</strong> A search bar component for filtering employees by name.</li>
                      <li> -<strong>EmployeeTable:</strong> A table component to display the list of employees with sorting and custom styling.</li>
                      <li> -<strong>ShowingRowTable:</strong> A component displaying information about the number of items shown per page.</li>
                      <li> -<strong>PaginationTable:</strong> A pagination component for navigating through the list of employees.</li>
                  </ul>
              </li>
          </ul>

          <h2>Sample Employee Data</h2>
          <p>Here is some sample employee data used in the dashboard:</p>
          <ul>
              <li> -First Name: John</li>
              <li> -Last Name: Doe</li>
              <li> -Birthdate: 15/03/1985</li>
              <li> -Start Date: 12/07/2010</li>
              <li> -Department: Engineering</li>
              <li> -Street: 123 Main Street</li>
              <li> -City: New York</li>
              <li> -State: New York</li>
              <li> -Zip Code: 10001</li>
          </ul>

          <h2>Functionality</h2>
          <p>The Employee Management Dashboard provides the following functionality:</p>
          <ul>
              <li> -Searching and filtering employees based on their names.</li>
              <li> -Sorting the employee list by various criteria.</li>
              <li> -Pagination to navigate through a large list of employees.</li>
              <li> -Custom styling and variants for components, enhancing user experience.</li>
          </ul>
        </div>
      </main>
      <SearchBarVariants/>
      <ShowingRowTableVariants/>
      <PaginationTableVariants/>
      <EmployeeTableVariants/>
    </>
  )
}

export default App