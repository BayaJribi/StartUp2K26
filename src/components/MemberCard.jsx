import React from "react";
import "../assets/css/MemberCard.css";

function MemberCard({ image, name, role, email }) {
    return (
        <div className="member__card">
            <img src={image} alt={name} className="member__photo" />
            <h3 className="member__name">{name}</h3>
            <p className="member__role">{role}</p>
            {email && (
                <p className="member__email">
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            )}
        </div>
    );
}

export default MemberCard;
