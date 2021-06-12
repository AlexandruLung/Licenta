import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import { Image } from "react-bootstrap";

export default class Vibrance extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "220px" }}>
        <h3>VIBRANCE</h3>
        <p>
          Vibrance este un filtru ce are la baza scoaterea in evidenta a
          culorilor "mute", lasand culorile satureate la intensiatea lor
          normala. Acest filtru da impresia de luminozitate .
        </p>
        <p>e_vibrance("putere")</p>

        <p>
          Parametru denumit "putere" reprezinta intensitatea filtrului , acesta
          are la baza o valoare de tip int cuprinsa intre -100 si 100. Valoarea
          de baza a acestui parametru este 20
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
          <Image src={getUpdTrans}></Image>
        </p>
        <p></p>
      </div>
    );
  }
}
