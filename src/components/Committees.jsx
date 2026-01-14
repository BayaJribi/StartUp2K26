import React from "react";
import "../assets/css/Committees.css";
import BardoLogo from "../assets/img/LCs/Bardo.png";
import BizerteLogo from "../assets/img/LCs/Bizerte.png";
import CarthageLogo from "../assets/img/LCs/Carthage.png";
import HadrumetLogo from "../assets/img/LCs/Hadrumet.png";
import MedinaLogo from "../assets/img/LCs/Medina.png";
import NabelLogo from "../assets/img/LCs/Nabel.png";
import RuspinaLogo from "../assets/img/LCs/Ruspina.png";
import SfaxLogo from "../assets/img/LCs/Sfax.png";
import TacapesLogo from "../assets/img/LCs/Tacapes.png";
import ThynaLogo from "../assets/img/LCs/Thyna.png";
import UniversityLogo from "../assets/img/LCs/University.png";

const committees = [
  { name: "LC Bardo", logo: BardoLogo, moto: "باردو ديما قوية" },
  { name: "LC Bizerte", logo: BizerteLogo, moto: " تعيش تعيش تعيش" },
  { name: "LC Carthage", logo: CarthageLogo, moto: "لن تقع اثارنا أبدا" },
  { name: "LC Hadrumet", logo: HadrumetLogo, moto: "حضرموت هنا و ستحقق احلامها الكبرى" },
  { name: "LC Medina", logo: MedinaLogo, moto: "مدينة ما ننساك" },
  { name: "LC Nabel", logo: NabelLogo, moto: "نابل في القلب" },
  { name: "LC Ruspina", logo: RuspinaLogo, moto: "روسبينا أمانة" },
  { name: "LC Sfax", logo: SfaxLogo, moto: "لوكالي و نموت عليه" },
  { name: "LC Tacapes", logo: TacapesLogo, moto: "تكاباس الحب" },
  { name: "LC Thyna", logo: ThynaLogo, moto: "المنارة الي تضويلي طريقي" },
  { name: "LC University", logo: UniversityLogo, moto: "لوكال يشعل بالنار" }
];

function Committees() {
  return (
    <section className="committees">
      <div className="committees__container">
        <h2 className="committees__title">The Allied Fleets</h2>
        <div className="committees__grid">
          {committees.map((committee, index) => (
            <div className="committee__card" key={index}>
              <img src={committee.logo} alt={committee.name} className="committee__logo" />
              <h3 className="committee__name">{committee.name}</h3>
              <p className="committee__moto">{committee.moto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Committees;
