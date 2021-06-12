import React from "react";
import blur from "./images/smoothing.png";
import output from "./images/output.png";
import { Image } from "react-bootstrap";

export default class Median extends React.Component {
  render() {
    return (
      <div>
        <h3>Filtru Median</h3>
        <p>
          Filtrul median trece prin fiecare element al semnalului (în acest caz
          imaginea) și înlocuiește fiecare pixel cu mediana pixelilor săi vecini
          (situată într-un cartier pătrat în jurul pixelului evaluat).
        </p>
        <p>
          Acest filtru floseste 3 argumente spre desosebire de alte filtre in
          apelul de functie ( imaginea sursa , imaginea rezultat,marimea
          kernelului).Trebuie specificat ca in in cazul filtrului median marimea
          kernelului este un numar impar .
        </p>
        <p>processedImage = cv.medianBlur(this.image, 3);</p>
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
