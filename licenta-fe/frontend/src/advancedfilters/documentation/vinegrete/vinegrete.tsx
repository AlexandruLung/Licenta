import React from "react";
import getUpdTrans from "./images/getUpdatedTransform.png";
import getTrans from "./images/getTransformation.png";
import { Image } from "react-bootstrap";

export default class Vignette extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "220px" }}>
        <h3>VIGNETTE</h3>
        <p>
          Vignette este un filtru folosit pentru punerea in evidenta a centrului
          inei imagini .Acest lucru este posbil prin aplicarea umbrirea sau
          cresterea luminozitatii unei poze.Tranzitia fiind facuta scalar pentru
          a oferi un efct mai placut
        </p>
        <p>e_vignette ("nivel ")</p>
        <p>
          Nivelul care apare ca si parametru in functia de mai sus este o
          valoare de tip int care are valori in intervalul [0,100].Valoare de
          baza a acestui nivel este 20
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
