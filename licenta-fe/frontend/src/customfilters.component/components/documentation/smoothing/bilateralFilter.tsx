import React from "react";

import blur from "./images/smoothing.png";
import output from "./images/output.png";
import { Image } from "react-bootstrap";

export default class Bilateral extends React.Component {
  render() {
    return (
      <div>
        <h3>Filtru Bilateral</h3>
        <p>
          Spre deosebire de celalte filtre prezentate filtru biateral dizolva
          zgomotul din imagine dar si netezeste marginile imaginii.Într-un mod
          similar filtrului Gaussian, filtrul bilateral ia în considerare și
          pixelii vecini cu greutăți atribuite fiecăruia dintre ei. Aceste
          greutăți au două componente, dintre care prima este aceeași ponderare
          utilizată de filtrul Gaussian. A doua componentă ia în considerare
          diferența de intensitate între pixelii vecini și cel evaluat.
        </p>
        <p>
          Filtrul bilateral se foloseste de 5 argumente in apelul de functie
          (imaginea sursa, imagine rezultata , dimensiunea pixelilor vecini,
          deviatia standard a culorii si a coordonatelor ).Fcuntia din care
          rezulta imagine procesata arata astfel:
        </p>
        <p>processedImage = this.image.bilateralFilter(9, 2.0, 2.0);</p>
        <p>
          Imaginea procesata va fi transmisa mai depare in functia de proccess ,
          pentru a se putea fi codificata si transmisa mai departe catre
          utilizator
        </p>
        <Image src={blur}></Image>
        <Image src={output}></Image>
      </div>
    );
  }
}
