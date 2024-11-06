// Step 1: Registration - Store user information in localStorage
function registerUser(event) {
  event.preventDefault(); // Prevent form submission to server

  // Collect registration input values
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate registration fields
  if (name === '' || mobile === '' || email === '' || password === '') {
      alert("All fields are required!");
      return;
  }

  // Store the user details in localStorage
  localStorage.setItem('userName', name);
  localStorage.setItem('userPhone', mobile);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  // Hide Registration Section and Show Login Section
  document.getElementById('registrationSection').style.display = 'none';
  document.getElementById('loginSection').style.display = 'block';
}

// Step 2: Login - Verify user credentials from localStorage
function loginUser(event) {
  event.preventDefault(); // Prevent form submission to server

  // Collect login input values
  const loginName = document.getElementById('loginName').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Retrieve stored user details from localStorage
  const storedName = localStorage.getItem('userName');
  const storedPassword = localStorage.getItem('userPassword');

  // Validate login credentials
  if (loginName === storedName && loginPassword === storedPassword) {
      // If login is successful, show the options section
      document.getElementById('optionsSection').style.display = 'block';
      document.getElementById('loginSection').style.display = 'none';
  } else {
      alert("Invalid login credentials. Please try again.");
  }
}

// Step 3: Display Hotel Listings
function showHotels() {
  document.getElementById('hotelSection').style.display = 'block';
  document.getElementById('touristPlaceSection').style.display = 'none';
}

// Step 4: Display Tourist Places
function showTouristPlaces() {
  document.getElementById('touristPlaceSection').style.display = 'block';
  document.getElementById('hotelSection').style.display = 'none';
}

// Step 5: Display Maps (Working on it)
function showMaps() {
  document.querySelector('.working-on-it').style.display = 'block';
}

// Step 6: Logout Functionality
function logoutUser() {
  // Hide options and show the login page again
  document.getElementById('optionsSection').style.display = 'none';
  document.getElementById('loginSection').style.display = 'block';
}

// Example Data for Hotels and Tourist Places
function loadHotelData() {
  const hotels = {
      "Mumbai": ["The Taj Mahal Palace", "JW Marriott", "The Oberoi", "Trident Nariman Point"],
      "Kokan": ["MTDC Resort", "Chandreshwar Beach Resort", "Sahyadri Farms"],
      "Pune": ["Hyatt Pune", "Novotel Pune", "Marriott Pune"],
      "Mahabaleshwar": ["Evershine Resort", "Le Meridien Mahabaleshwar"],
      "Thane": ["Vihang's Inn", "Fariyas Resort"],
      "Matheran": ["The Verandah in the Forest", "Westend Hotel"]
  };

  let hotelListHTML = '';
  for (let city in hotels) {
      hotelListHTML += `<h3>Hotels in ${city}</h3><ul>`;
      hotels[city].forEach(hotel => {
          hotelListHTML += `<li>${hotel}</li>`;
      });
      hotelListHTML += '</ul>';
  }
  document.getElementById('hotelSection').innerHTML = hotelListHTML;
}

function loadTouristPlaces() {
  const touristPlaces = {
      "Mumbai": ["Gateway of India", "Marine Drive", "Elephanta Caves"],
      "Kokan": ["Kashid Beach", "Alibaug", "Murud Janjira Fort"],
      "Pune": ["Aga Khan Palace", "Sinhagad Fort", "Shaniwar Wada"],
      "Mahabaleshwar": ["Venna Lake", "Elephant's Head Point", "Pratapgad Fort"],
      "Thane": ["Masunda Lake", "Upvan Lake", "Tikuji-ni-Wadi"],
      "Matheran": ["Charlotte Lake", "Panorama Point", "Echo Point"]
  };

  let placesListHTML = '';
  for (let city in touristPlaces) {
      placesListHTML += `<h3>Tourist Places in ${city}</h3><ul>`;
      touristPlaces[city].forEach(place => {
          placesListHTML += `<li>${place}</li>`;
      });
      placesListHTML += '</ul>';
  }
  document.getElementById('touristPlaceSection').innerHTML = placesListHTML;
}

// Load hotel and tourist place data when the page is loaded
window.onload = function() {
  loadHotelData();
  loadTouristPlaces();
};
