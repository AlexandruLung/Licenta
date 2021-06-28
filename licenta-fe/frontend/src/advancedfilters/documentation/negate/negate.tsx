import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import { Image } from "react-bootstrap";

export default class Negate extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "220px" }}>
        <h3>NEGATE</h3>
        <p>e_neagte</p>
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
          <Image src={getUpdTrans}></Image>
        </p>
      </div>
    );
  }
}
