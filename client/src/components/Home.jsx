import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import backgroundImage from "../assets/luxury_livi.jpg";

const Home = () => {
  const [dragPosition, setDragPosition] = useState(0); // Position des Draggen
  const [imageSize, setImageSize] = useState({ width: window.innerWidth * 1.5, height: window.innerHeight });
  
  // Prozentuale Koordinaten des Punktes (bezogen auf das Bild)
  const [pointPosition, setPointPosition] = useState({ xPercent: 0.38, yPercent: 0.22 });

  // Funktion zum Anpassen der Bildgröße und Position des Punktes bei Resize
  const handleResize = () => {
    const newWidth = window.innerWidth * 1.1; // 110% der Fensterbreite
    const newHeight = window.innerHeight; // Höhe des Fensters
    
    // Berechne die neue Position des Punktes basierend auf der prozentualen Position relativ zum neuen Bild
    const newX = pointPosition.xPercent * newWidth;
    const newY = pointPosition.yPercent * newHeight;
    
    // Aktualisiere die Bildgröße und die neue Position des Punkts
    setImageSize({ width: newWidth, height: newHeight });
    setPointPosition({ x: newX, y: newY });
  };

  // useEffect zum Hinzufügen und Entfernen des Resize-Event Listeners
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Initiale Anpassung beim Laden
    handleResize();

    // Cleanup-Funktion, um den Event-Listener zu entfernen
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Draggable
        axis="x"
        position={{ x: dragPosition, y: 0 }} // Aktuelle Drag-Position
        onDrag={(e, data) => {
          // Setze die neue Drag-Position
          setDragPosition(data.x);
        }}
        bounds={{ left: -(imageSize.width - window.innerWidth), right: 0 }} // Drag-Bereich anpassen
      >
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover", // Vollständige Abdeckung
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center", // Zentrierte Position des Bildes
            width: `${imageSize.width}px`, // Dynamische Breite
            height: `${imageSize.height}px`, // Dynamische Höhe
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* Punkt auf der Lampe */}
          <a
            href="/new-page" // Link zur neuen Seite
            style={{
              position: "absolute",
              top: `${pointPosition.y}px`, // Y-Position des Punkts relativ zum Bild
              left: `${pointPosition.x}px`, // X-Position des Punkts relativ zum Bild
              width: "15px", // Größe des Punkts
              height: "15px", // Größe des Punkts
              backgroundColor: "white", // Farbe des Punkts
              borderRadius: "50%", // Kreisförmiger Punkt
              cursor: "pointer", // Zeiger ändert sich beim Hovern
              transform: "translate(-50%, -50%)", // Punkt zentriert auf der Lampe
            }}
            title="Zur Lampe"
          />
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
