import React from "react";
import blur from "./images/smoothing.png";
import output from "./images/output.png";
import { Image } from "react-bootstrap";
export default class Blur extends React.Component {
  render() {
    return (
      <div>
        <h3>Blur</h3>
        <p>
          Acest filtru este cel mai simplu dintre toate! Fiecare pixel de ieșire
          este media vecinilor săi din nucleu (toți contribuie cu greutăți
          egale)
        </p>
        <p>
          In mod normal acest filtru se foloseste de 4 argumente (imaginea sursa
          , imaginea destinatie , marimea si punctul de ancora).Se va crea o
          functie process care va face o filtrare in functie de numele fiecarui
          filtru.In acest caz functia care creaza respectivul filtru v-a arata :
          <p>processedImage = cv.blur(this.image, new cv.Size(10, 10));</p>
          <p>
            Imaginea procesata va fi transmisa mai depare in functia de proccess
            , pentru a se putea fi codificata si transmisa mai departe catre
            utilizator
          </p>
          <Image src={blur}></Image>
          <Image src={output}></Image>
        </p>
        <p></p>
      </div>
    );
  }
}
