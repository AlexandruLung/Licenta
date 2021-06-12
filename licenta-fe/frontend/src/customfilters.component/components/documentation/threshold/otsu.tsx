import React from "react";
import { Image } from "react-bootstrap";
import example from "./images/example2.png";
import output from "./images/output.png";
import otsu from "./images/otsu.png";
import otsuCode from "./images/otsuCode.png";

export default class Otsu extends React.Component {
  render() {
    return (
      <div>
        <h3>Otsu</h3>
        <p>
          În pragurile globale, am folosit o valoare arbitrară pentru valoarea
          pragului, nu? Deci, cum putem ști că o valoare pe care am selectat-o
          ​​este bună sau nu? Răspunsul este, metoda de încercare și eroare. Dar
          ia în considerare o imagine bimodală (În cuvinte simple, imaginea
          bimodală este o imagine a cărei histogramă are două vârfuri). Pentru
          acea imagine, putem lua aproximativ o valoare în mijlocul acelor
          vârfuri ca valoare prag, nu? Asta face binarizarea Otsu. Deci, în
          cuvinte simple, calculează automat o valoare prag din histograma
          imaginii pentru o imagine bimodală. (Pentru imaginile care nu sunt
          bimodale, binarizarea nu va fi exactă.)
          <p>
            Pentru aceasta, este utilizată funcția noastră cv.threshold (), dar
            treceți un flag suplimentar, cv.THRESH_OTSU. Pentru valoarea prag,
            pur și simplu treceți zero. Apoi algoritmul găsește valoarea
            pragului optim și vă returnează ca a doua ieșire, retVal. Dacă nu se
            utilizează pragul Otsu, retVal este același cu valoarea pragului pe
            care ați folosit-o.
          </p>
          <Image src={otsuCode}></Image>
        </p>
        <p>
          {" "}
          Deoarece lucrăm cu imagini bimodale, algoritmul lui Otsu încearcă să
          găsească o valoare prag (t) care minimizează varianța ponderată în
          cadrul clasei. De fapt, găsește o valoare de t care se află între două
          vârfuri, astfel încât variațiile la ambele clase sunt minime.
        </p>
        <Image src={otsu}></Image>
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
