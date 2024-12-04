import { createConnection } from 'mysql';

// Create a connection to the database
const db = createConnection({
  host: 'localhost', // Your XAMPP host
  user: 'root',      // Default XAMPP MySQL username
  password: '',      // Default XAMPP MySQL password (leave blank if none)
  database: 'login_web_page_user_information', // Updated database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Add error handler for lost connections
db.on('error', function(err) {
  console.error('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed.');
  } else if (err.code === 'ER_CON_COUNT_ERROR') {
    console.error('Database has too many connections.');
  } else if (err.code === 'ECONNREFUSED') {
    console.error('Database connection was refused.');
  }
});

export default db;
