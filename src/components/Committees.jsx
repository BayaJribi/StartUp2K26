import React from "react";
import "../assets/css/Committees.css";

const committees = [
  { name: "LC Bardo", logo: "src/assets/img/LCs/Bardo.png", moto: "باردو نعطيها عينيا و وقت طويل" },
  { name: "LC Bizerte", logo: "src/assets/img/LCs/Bizerte.png", moto: " تعيش تعيش تعيش" },
  { name: "LC Carthage", logo: "src/assets/img/LCs/Carthage.png", moto: "لن تقع اثارنا أبدا" },
  { name: "LC Hadrumet", logo: "src/assets/img/LCs/Hadrumet.png", moto: "حضرموت هنا و ستحقق احلامها الكبرى" },
  { name: "LC Medina", logo: "src/assets/img/LCs/Medina.png", moto: "مدينة ما ننساك" },
  { name: "LC Nabel", logo: "src/assets/img/LCs/Nabel.png", moto: "نابل في القلب" },
  { name: "LC Ruspina", logo: "src/assets/img/LCs/Ruspina.png", moto: "روسبينا أمانة" },
  { name: "LC Sfax", logo: "src/assets/img/LCs/Sfax.png", moto: "لوكالي و نموت عليه" },
  { name: "LC Tacapes", logo: "src/assets/img/LCs/Tacapes.png", moto: "تكاباس الحب" },
  { name: "LC Thyna", logo: "src/assets/img/LCs/Thyna.png", moto: "المنارة الي تضويلي طريقي" },
  { name: "LC University", logo: "src/assets/img/LCs/University.png", moto: "لوكال يشعل بالنار" }
];

function Committees() {
  return (
    <section className="committees">
      <div className="committees__container">
        <h2 className="committees__title">Passengers on Board</h2>
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
