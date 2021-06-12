import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import updColor from "./images/updateColorValue.png";
import { Image } from "react-bootstrap";

export default class HsvDocumentation extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <p>
          HUE
          <p>
            Atributul unei senzații vizuale conform căruia o zonă pare să fie
            similară cu una dintre culorile percepute: roșu, galben, verde și
            albastru sau cu o combinație a două dintre ele.
          </p>
          Luminozitate
          <p>
            Atributul unei senzații vizuale conform căreia o zonă pare să emită
            mai multă sau mai puțină lumină.
          </p>
          Saturatie
          <p>
            Coloritatea unui stimul în raport cu propria luminozitate.
            Luminozitatea și culorile sunt măsuri absolute, care descriu de
            obicei distribuția spectrală a luminii care intră în ochi, în timp
            ce luminozitatea și cromitatea sunt măsurate în raport cu un anumit
            punct alb și, prin urmare, sunt adesea utilizate pentru descrierea
            culorilor de suprafață, rămânând aproximativ constante chiar și ca
            luminozitate și colorare schimbați cu o iluminare diferită.
            Saturația poate fi definită fie ca raportul dintre culorile și
            luminozitatea, fie cel dintre crom și luminozitate.
          </p>
          <p>
            Imaginea reprezentata in al doilea cadran este imaginea rezultata
            dupa aplicarea filtrelor de imagine .Aceasta este data de functia
            getTransformation
            <p>
              <Image src={getTrans}></Image>
            </p>
            .La fiecare schimbare se creaza un nou array care contine
            modificarile aplicate pe imagine
            <p>
              <Image src={getUpdTrans}></Image>
            </p>
            . Pe baza acetor tranformari care sunt o pereche de tipul
            (key,value), se va face o re-randare a imaginii
            <Image src={updColor}></Image>
          </p>
        </p>
      </div>
    );
  }
}
