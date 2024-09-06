import React, { useState, useEffect } from 'react';
import { FaUser, FaTable, FaThLarge } from 'react-icons/fa';  // Importa los íconos necesarios

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
  const usersPerPage = 5;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.address.city.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetails = () => {
    setSelectedUser(null);
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'card' ? 'table' : 'card');
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderCardView = () => (
    <div style={styles.userList}>
      {currentUsers.map(user => (
        <div key={user.id} style={styles.userCard} onClick={() => handleUserClick(user)}>
          <h2 style={styles.userName}>
            <FaUser style={styles.userIcon} />
            {user.name}
          </h2>
          <p style={styles.userEmail}>{user.email}</p>
          <p style={styles.userCity}>{user.address.city}</p>
        </div>
      ))}
    </div>
  );

  const renderTableView = () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>ID</th>
          <th style={styles.tableHeader}>Nombre</th>
          <th style={styles.tableHeader}>Email</th>
          <th style={styles.tableHeader}>Compañía</th>
          <th style={styles.tableHeader}>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map(user => (
          <tr key={user.id} style={styles.tableRow} onClick={() => handleUserClick(user)}>
            <td style={styles.tableCell}>{user.id}</td>
            <td style={styles.tableCell}>{user.name}</td>
            <td style={styles.tableCell}>{user.email}</td>
            <td style={styles.tableCell}>{user.company.name}</td>
            <td style={styles.tableCell}>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre, email o ciudad"
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <button onClick={toggleViewMode} style={styles.toggleButton}>
        {viewMode === 'card' ? <FaTable /> : <FaThLarge />}
        {viewMode === 'card' ? ' Ver como Tabla' : ' Ver como Fichas'}
      </button>
      {viewMode === 'card' ? renderCardView() : renderTableView()}
      <div style={styles.pagination}>
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} style={styles.paginationButton}>
            {i + 1}
          </button>
        ))}
      </div>
      {selectedUser && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
            <p>Company: {selectedUser.company.name}</p>
            <p>Address: {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</p>
            <button onClick={closeUserDetails} style={styles.closeButton}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    color: '#003366',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #003366',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  userCard: {
    backgroundColor: '#e0f7fa',
    border: '1px solid #003366',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  userName: {
    color: '#0077b6',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: '10px',
    color: '#0077b6',
  },
  userEmail: {
    color: '#005f73',
    marginBottom: '5px',
  },
  userCity: {
    color: '#003366',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#003366',
    color: 'white',
    padding: '12px',
    textAlign: 'center',
  },
  tableRow: {
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
  },
  tableCell: {
    padding: '12px',
  },
  pagination: {
    marginTop: '20px',
  },
  paginationButton: {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '90%',
  },
  closeButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
