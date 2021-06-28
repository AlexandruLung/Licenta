import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import { Image } from "react-bootstrap";

export default class Distortion extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "220px" }}>
        <h3>DISOTRTION</h3>
        <p>e_distort:(x1:y1, x2:y2, x3:y3, x4:y4)</p>
        <p>
          Distorsionează o imagine sau o suprapunere de text la o nouă formă
          prin ajustarea colțurilor sale pentru a obține deformarea
          percepției.Valorile lui x si ale lui y reprezinta puncte ale imaginii
          , de obicei colturile acesteia. Puncte din care se realizaeaza
          deformarea
        </p>
        <p>
          Imaginea rezultata , reprezentata in al doilea grid ,este data de
          functia getTransformation.
          <Image src={getTrans}></Image>
          <p>
            Aceasta fucntie mapeaz o lista de in care se afla transformarile
            efectuate, intr-un final returnand transformarea dorinta sub forma
            unei imagini rerandate.Imaginea rerandata are aplicat filtrul ales
            de catre utilizator
          </p>
        </p>
        <p>
          Alegerea filtrului dorit se face prin simpla apasare de buton .Mesajul
          receptionat , mai departe este procesat ,iar cu ajutorul functiei
          getUpdatedTransform, se vor adauga in lista de transfomari ,filtrul
          dorit de catre utilizator
        </p>
        <Image src={getUpdTrans}></Image>
      </div>
    );
  }
}
