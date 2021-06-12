import React from "react";
import { Image } from "react-bootstrap";
import example from "./images/example2.png";
import output from "./images/output.png";

export default class Threshold extends React.Component {
  render() {
    return (
      <div>
        <h3>Threshold</h3>
        <p>
          In cazult thresholdului dacă valoarea pixelului este mai mare decât o
          valoare prag, i se atribuie o valoare (poate fi albă), altfel i se
          atribuie o altă valoare (poate fi neagră). Funcția utilizată este
          cv.threshold. Primul argument este imaginea sursă, care ar trebui să
          fie o imagine în tonuri de gri. Al doilea argument este valoarea
          pragului care este utilizată pentru a clasifica valorile pixelilor. Al
          treilea argument este maxVal care reprezintă valoarea care trebuie
          dată dacă valoarea pixelului este mai mare decât (uneori mai mică
          decât) valoarea pragului. OpenCV oferă diferite stiluri de prag și
          este decis de al patrulea parametru al funcției. Diferite tipuri sunt:
        </p>
        <ul>
          <li>cv.THRESH_BINARY</li>
          <li>cv.THRESH_BINARY_INV</li>
          <li>cv.THRESH_TRUNC</li>
          <li>cv.THRESH_TOZERO</li>
          <li>cv.THRESH_TOZERO_INV</li>
        </ul>
        <p>
          <Image src={example}></Image>
        </p>
        <p>
          Imaginea rezultata va fi transmisa mai depare in functia de proccess ,
          pentru a se putea fi codificata si transmisa mai departe catre
          utilizator
          <Image src={output} style={{ width: "500px" }}></Image>
        </p>
      </div>
    );
  }
}
