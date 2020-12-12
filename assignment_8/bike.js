// Load the Visualization API and the columnchart package.
google.load("visualization", "1", { packages: ["columnchart"] });

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  const path = [
    { lat: 40.454417, lng: -79.93127 },
    { lat: 40.455178, lng: -79.931769 },
    { lat: 40.454737, lng: -79.932541 },
    { lat: 40.449803, lng: -79.929622},
    { lat: 40.452731, lng: -79.921715 },
    { lat: 40.453605, lng: -79.915342 },
    { lat: 40.452993, lng: -79.915192 },
    { lat: 40.448926, lng: -79.919015 },
    { lat: 40.440602, lng: -79.916677 },

    { lat: 40.437866, lng: -79.916065 },
    { lat: 40.437572, lng: -79.915797 },
    { lat: 40.437564, lng: -79.913664 },
    { lat: 40.436196, lng: -79.913626 },

    { lat: 40.436114, lng: -79.913117 },
    { lat: 40.435175, lng: -79.912511 },
    { lat: 40.434297, lng: -79.912103 },
    { lat: 40.433905, lng: -79.912387 },

    { lat: 40.433220, lng: -79.914657 },
    { lat: 40.432648, lng: -79.915101 },
    { lat: 40.430133, lng: -79.915240 },
    { lat: 40.425976, lng: -79.916876 },

    { lat: 40.426433, lng: -79.918700 },
    { lat: 40.426172, lng: -79.919435 },
    { lat: 40.424238, lng: -79.920247 },
    { lat: 40.423634, lng: -79.920101 },

    { lat: 40.423119, lng: -79.919672 },
    { lat: 40.422670, lng: -79.918535 },
    { lat: 40.422343, lng: -79.917580 },
    { lat: 40.422008, lng: -79.917494 },

    { lat: 40.421502, lng: -79.918063 },
    { lat: 40.420800, lng: -79.920048 },
    { lat: 40.420759, lng: -79.922065 },
    { lat: 40.420212, lng: -79.922752 },

    { lat: 40.418913, lng: -79.922634 },
    { lat: 40.417843, lng: -79.923417 },
    { lat: 40.419607, lng: -79.927183 },
    { lat: 40.419754, lng: -79.929189 },

    { lat: 40.422784, lng: -79.930026 },
    { lat: 40.424198, lng: -79.933362 },
    { lat: 40.424361, lng: -79.935781 },
    { lat: 40.424059, lng: -79.936768 },

    { lat: 40.424288, lng: -79.937390 },
    { lat: 40.426493, lng: -79.938602 },
    { lat: 40.427317, lng: -79.938560 },
    { lat: 40.429227, lng: -79.937532 },

    { lat: 40.429113, lng: -79.936854 },
    { lat: 40.429284, lng: -79.936114 },
    { lat: 40.429749, lng: -79.935792 },
    { lat: 40.429749, lng: -79.934902 },

    { lat: 40.429113, lng: -79.936854 },
    { lat: 40.429284, lng: -79.936114 },

    { lat: 40.430716, lng: -79.931599 },
    { lat: 40.430847, lng: -79.930106 },
    { lat: 40.429807, lng: -79.928955 },
    { lat: 40.429295, lng: -79.927398 },

    { lat: 40.438012, lng: -79.927710 },
    { lat: 40.437559, lng: -79.935651 },
    { lat: 40.438665, lng: -79.939396 },
    { lat: 40.438894, lng: -79.940801 },

    { lat: 40.440164, lng: -79.942265 },
    { lat: 40.439968, lng: -79.943241 },
    { lat: 40.438915, lng: -79.944357 },
    { lat: 40.438668, lng: -79.945736 },

    { lat: 40.438888, lng: -79.946469 },
    { lat: 40.440243, lng: -79.947005 },
    { lat: 40.440797, lng: -79.948170 },
    { lat: 40.441499, lng: -79.947215 },
    
    { lat: 40.440929, lng: -79.944278 },
    { lat: 40.444603, lng: -79.942910 },
    { lat: 40.443893, lng: -79.938788 },
    { lat: 40.445247, lng: -79.935743 },

    { lat: 40.445647, lng: -79.931248 },
    { lat: 40.444096, lng: -79.927878 },
    { lat: 40.444040, lng: -79.926049 },
    { lat: 40.453416, lng: -79.931757 },
    { lat: 40.453697, lng: -79.930873 },
    { lat: 40.454322, lng: -79.931251 }

  ]; // Pittsburgh Route
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: path[55],
    mapTypeId: "roadmap",
  });
  // Create an ElevationService.
  const elevator = new google.maps.ElevationService();
  // Draw the path, using the Visualization API and the Elevation service.
  displayPathElevation(path, elevator, map);
}

function displayPathElevation(path, elevator, map) {
  // Display a polyline of the elevation path.
  new google.maps.Polyline({
    path: path,
    strokeColor: "#2F6356",
    strokeOpacity: 0.8,
    map: map,
  });
  // Create a PathElevationRequest object using this array.
  // Ask for 256 samples along that path.
  // Initiate the path request.
  elevator.getElevationAlongPath(
    {
      path: path,
      samples: 250,
    },
    plotElevation
  );
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(elevations, status) {
  const chartDiv = document.getElementById("elevation_chart");

  if (status !== "OK") {
    // Show the error code inside the chartDiv.
    chartDiv.innerHTML =
      "Cannot show elevation: request failed because " + status;
    return;
  }
  // Create a new chart in the elevation_chart DIV.
  const chart = new google.visualization.ColumnChart(chartDiv);
  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  const data = new google.visualization.DataTable();
  data.addColumn("string", "Sample");
  data.addColumn("number", "Elevation");

  for (let i = 0; i < elevations.length; i++) {
    data.addRow(["", elevations[i].elevation]);
  }
  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 100,
    legend: "none",
    titleY: "Elevation (m)",
  });
}