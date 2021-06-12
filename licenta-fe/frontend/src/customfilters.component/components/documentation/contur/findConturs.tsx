import React from "react";
import { Image } from "react-bootstrap";
import findall from "./images/findall.png";
import findall2 from "./images/findall2.png";
import output from "./images/output.png";
export default class FindAllConturs extends React.Component {
  render() {
    return (
      <div>
        <h3>Toate contururile</h3>
        <p>
          Contururile pot fi explicate pur și simplu ca o curbă care unește
          toate punctele continue (de-a lungul limitei), având aceeași culoare
          sau intensitate. Contururile sunt un instrument util pentru analiza
          formei și detectarea și recunoașterea obiectelor. Pentru o precizie
          mai bună, utilizați imagini binare. Deci, înainte de a găsi contururi,
          aplicați un filtru threshold sau canny.
        </p>
        <p>
          Pentru a desena contururile, se utilizează funcția cv.drawContours.
          Poate fi, de asemenea, utilizat pentru a desena orice formă, cu
          condiția să aveți punctele sale limită. Primul său argument este
          imaginea sursă, al doilea argument este contururile care ar trebui
          transmise ca o listă , al treilea argument este indicele contururilor
          (util la desenarea conturului individual. Pentru a desena toate
          contururile, treceți -1), iar argumentele rămase sunt culoarea,
          grosimea etc.
        </p>
        <p>this.image.drawContours(imgContours, -1, color, 2);</p>
        <p style={{ display: "flex" }}>
          <Image src={findall} style={{ width: "500px" }}></Image>
          <Image src={findall2} style={{ width: "500px" }}></Image>
        </p>
        <p>
          Dupa cum se poate observa diferenta dintre cele doua filtre nu este
          foarte mare la prima vedere. Singurul lucru ce le diferentiaza pe cele
          doua functii este primul parametru din apelul functiei
        </p>
        <p>
          In prima poza se paote observa ca apare parametrul CV_RETR_TREE.Acesta
          returneaza toate contururile și reconstruiește o ierarhie completă a
          contururilor imbricate.Iar parametrul CV_RETR_LIST returneaza toate
          conturuile fara a stabili o relatie ierarhica
        </p>
        <p>
          Aceste filtre sunt aplicate in functie de alegerea
          utilizatorului.Functia returneaza imaginea rezultat care mai tarziu
          este procesata si transmisa catre partea de UI pentru ca rezultatul sa
          fie vizibil de catre utilizator.
          <p>
            <Image src={output} style={{ width: "500px" }}></Image>
          </p>
        </p>
      </div>
    );
  }
}
