import React from "react";
import { Image } from "react-bootstrap";
import image from "./images/getTransformation.png";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import updColor from "./images/updateColorValue.png";

export default class RgbDocumentation extends React.Component {
  render() {
    return (
      <div>
        <p>
          Amprenta foarte digitală a imaginii conține pixeli. Fiecare pixel
          determinat de unele valori. Există diferite mecanisme pentru a defini
          și stoca aceste valori ale pixelilor. Valoarea pixelilor poate fi
          reprezentată cu RGB, RGBA. Fiecare pixel cuprinde valori ale codului
          de culoare și, în combinație, reprezintă un punct. Când conectați mai
          multe puncte, este construită întreaga imagine. În timp ce multe
          sisteme de procesare a imaginilor manipulează aceste valori și oferă
          câteva filtre interesante pe care le-ați fi putut vedea și pe
          Instagram. Fiecare valoare dintr-un pixel poate fi spusă ca un canal.
          Canalul de transparență denumit și A (Alpha) conține detalii despre
          transparență. Diferența dintre RGB și RGBA se datorează canalului de
          transparență.
        </p>
        <p>
          O imagine poate fi reprezentată cu valori RGB pe pixeli. Fiecare pixel
          conține un set de valori care vor determina modul în care va fi
          afișată imaginea. Vom oferi un mecanism pentru a modifica fiecare
          dintre aceste valori ale canalului.
        </p>
        <p>
          Funcția getTransformations a apelului de cod de imagine de ieșire și
          solicită aplicarea transformării curente conform transformării
          selectate în interfața de utilizare. Păstrăm transformarea selectată
          în stare de reacție.
          <Image
            className="imageRgb"
            style={{ width: "400px" }}
            src={image}
          ></Image>
        </p>
        <p>
          Imaginea reprezentata in al doilea cadran este imaginea rezultata dupa
          aplicarea filtrelor de imagine .Aceasta este data de functia
          getTransformation .La fiecare schimbare se creaza un nou array care
          contine modificarile aplicate pe imagine
          <p>
            <Image src={getUpdTrans}></Image>
          </p>
          . Pe baza acetor tranformari care sunt o pereche de tipul (key,value),
          se va face o re-randare a imaginii
          <Image src={updColor}></Image>
        </p>
      </div>
    );
  }
}
