function showPage(pageId) {
  // Hide all pages
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));

  // Show the selected page
  document.getElementById(pageId).classList.add("active");
}

$(document).ready(function () {
  $(".select2").select2({
    placeholder: "",
    allowClear: true,
  });

  // implement google map using leaflet

  // Step 1: Initialize the map
  const map = L.map("map").setView([37.7749, -122.4194], 13); // Centered on San Francisco

  // Step 2: Add the OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright"></a>',
  }).addTo(map);

  // Step 3: Add a marker
  const marker = L.marker([37.7749, -122.4194]).addTo(map);
  marker.bindPopup("<b>Hello!</b><br>This is San Francisco.").openPopup();

  // Step 4: Add a circle (optional)
  const circle = L.circle([37.7749, -122.4194], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500, // Radius in meters
  }).addTo(map);

  // Step 5: Add a custom click event
  map.on("click", function (e) {
    alert(
      `You clicked the map at latitude: ${e.latlng.lat}, longitude: ${e.latlng.lng}`
    );
  });
});

// navbar scrool function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}
