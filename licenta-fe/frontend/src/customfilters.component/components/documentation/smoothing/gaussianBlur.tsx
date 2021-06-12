import React from "react";
import blur from "./images/smoothing.png";
import output from "./images/output.png";
import { Image } from "react-bootstrap";

export default class Gaussian extends React.Component {
  render() {
    return (
      <div>
        <h3>Filtrul Gaussian</h3>
        <p>
          Probabil cel mai util filtru (deși nu cel mai rapid). Filtrarea
          gaussiană se realizează prin implicarea fiecărui punct din matricea de
          intrare cu un nucleu gaussian și apoi însumarea tuturor pentru a
          produce matricea de ieșire.
        </p>
        <p>
          Presupunând că o imagine este 1D, puteți observa că pixelul situat în
          mijloc ar avea cea mai mare greutate. Greutatea vecinilor săi scade pe
          măsură ce crește distanța spațială dintre ei și pixelul central.
        </p>
        <p>
          Acest filtru foloseste 4 argumente in apelul de functie (imagiea
          sursa, imaginea destinatie , marimea kernelului,deviatia starndard a
          lui x,y).Apelul functiei care efectueaza transfomrarea v-a arata :
          <p>
            processedImage = cv.gaussianBlur(this.image, new cv.Size(5, 5), 1.2,
            1.2);
          </p>
          <p>
            Imaginea procesata va fi transmisa mai depare in functia de proccess
            , pentru a se putea fi codificata si transmisa mai departe catre
            utilizator
          </p>
          <Image src={blur}></Image>
          <Image src={output}></Image>
        </p>
      </div>
    );
  }
}
