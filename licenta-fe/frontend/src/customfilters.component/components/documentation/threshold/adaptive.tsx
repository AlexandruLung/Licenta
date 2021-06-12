import React from "react";
import { Image } from "react-bootstrap";
import example from "./images/example.png";
import output from "./images/output.png";

export default class Adatptive extends React.Component {
  render() {
    return (
      <div>
        <h3>Threshold Adaptiv</h3>
        <p>
          In cazul in care imaginea are diferite variatii de lumina threshoudul
          simplu se poate sa nu fie cea mai buna alegerea .În acest caz, optăm
          pentru praguri adaptive. În aceasta, algoritmul calculează pragul
          pentru o regiune mică a imaginii. Deci, obținem praguri diferite
          pentru diferite regiuni ale aceleiași imagini și ne oferă rezultate
          mai bune pentru imagini cu iluminare diferită.
        </p>
        <p>Metode care decid cum va fi calculata valoarea thresholdului:</p>
        <ul>
          <li>
            cv.ADAPTIVE_THRESH_MEAN_C:valoarea prag este media zonei invecinate.
          </li>
          <li>
            cv.ADAPTIVE_THRESH_GAUSSIAN_C:valoarea prag este suma ponderată a
            valorilor vecinătății în care greutățile sunt o fereastră gaussiană.
          </li>
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
