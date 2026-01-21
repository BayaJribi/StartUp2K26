import React from "react";
import MemberCard from "../components/MemberCard";
import "../assets/css/Contact.css"; // Reusing grid styles or create new one

// Import OC Images
import OCPImg from "../assets/img/OCs/LCVP F&L.png";
import BayaImg from "../assets/img/OCs/LCVP TM&IM.png";
import LinaImg from "../assets/img/OCs/LCVP oGT.png";
import AlaImg from "../assets/img/OCs/LCP.png";
import YassineBImg from "../assets/img/OCs/LCVP MKT.png";
import LogoImg from "../assets/img/LogoStartup.png";
import DybabaImg from "../assets/img/OCs/OC Sales 1.png";
import MahdiImg from "../assets/img/OCs/OC Sales 2.png";
import YassineSImg from "../assets/img/OCs/OC Sales 3.png";
import OumaImg from "../assets/img/OCs/OC DXP.png";
import DreamyImg from "../assets/img/OCs/OC MKT 1.png";

// Data structure organized by hierarchy
const teamStructure = {
  ocp: {
    name: "Imen Mtibaa",
    role: "Organizing Committee President",
    image: OCPImg,
  },
  departments: [
    {
      name: "Finance",
      ocvp: {
        name: "Baya Jribi",
        role: "OCVP Finance",
        image: BayaImg,
      },
      ocs: [],
    },
    {
      name: "Delegate Experience",
      ocvp: {
        name: "Lina Ben Hmida",
        role: "OCVP Delegate Experience",
        image: LinaImg,
      },
      ocs: [
        {
          name: "Oumaima Chaari",
          role: "OC Delegate Experience",
          image: OumaImg,
        },
      ],
    },
    {
      name: "Sales",
      ocvp: {
        name: "Ala Bardaa",
        role: "OCVP Sales",
        image: AlaImg,
      },
      ocs: [
        {
          name: "Ayoub Derbala",
          role: "OC Sales",
          image: DybabaImg,
        },
        {
          name: "Mahdi Karray",
          role: "OC Sales",
          image: MahdiImg,
        },
        {
          name: "Yassine Souissi",
          role: "OC Sales",
          image: YassineSImg,
        },
      ],
    },
    {
      name: "Marketing",
      ocvp: {
        name: "Yassine Ben Bahri",
        role: "OCVP Marketing",
        image: YassineBImg,
      },
      ocs: [
        {
          name: "Khadija Gaddour",
          role: "OC Marketing",
          image: DreamyImg,
        },

      ],
    },
  ],
};

function OCPage() {
  const { ocp, departments } = teamStructure;

  return (
    <section className="oc-page container">
      <h2 className="oc-page__title">Command Crew of 2K26</h2>
      <p className="oc-page__description">
        Here you can learn more about the Organizing Committee of Start'Up 2K26.
      </p>

      {/* OCP Section */}
      <div className="oc-page__grid" style={{ marginBottom: "4rem" }}>
        <MemberCard
          image={ocp.image}
          name={ocp.name}
          role={ocp.role}
        />
      </div>

      {/* Departments Grid - Render each department as a column/group */}
      <div className="oc-page__departments">
        {departments.map((dept, index) => (
          <div key={index} className="oc-page__dept">
            {/* OCVP */}
            <div className="oc-page__ocvp">
              <MemberCard
                image={dept.ocvp.image}
                name={dept.ocvp.name}
                role={dept.ocvp.role}
              />
            </div>

            {/* OCs under the OCVP */}
            {dept.ocs.length > 0 && (
              <>
                <div className="oc-page__connector"></div> {/* Visual connector line if needed, or just gap */}
                <div className="oc-page__ocs">
                  {dept.ocs.map((oc, idx) => (
                    <MemberCard
                      key={idx}
                      image={oc.image}
                      name={oc.name}
                      role={oc.role}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OCPage;
