"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMap = () => {
  useEffect(() => {
    // Check if window is defined (i.e., we are in the browser)
    if (typeof window !== 'undefined') {
      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();

      // Cleanup function to remove map instance on component unmount
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div id="map" style={{ height: "500px", width: "100%" }}></div>
  );
};

export default GoogleMap;
