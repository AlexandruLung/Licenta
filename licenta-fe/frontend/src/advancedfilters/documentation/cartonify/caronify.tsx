import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import { Image } from "react-bootstrap";

export default class Cartoonify extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "220px" }}>
        <h3>CARTOONIFY</h3>
        <p>e_cartoonify("intensitate","reducerea_culorii")</p>
        <p>
          <p>
            Intensitatea este o valoare de tip integer care poate sa ia valori
            in intervaul 0-100 si care are ca valoare de baza 50.Aceatsa valoare
            reprezinta grosimea liniilor (contur) aplicate pe imagine
          </p>
          <p>
            Al doilea parametru al functiei "readucerea_culorii" este o
            constanta de tip integer.Aceasta este folosita pentru reducerea
            numarului de culori din imagine si cresterea intensitatii culorilor
            ramase. Cu cat valoarea este mai mare cu atat imaginea devine mai
            putin realista.
          </p>
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
