import { useState } from "react";
import { Sparkles } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function ProfileVisual({ className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showPhoto = portfolio.profileImage && !imageFailed;

  return (
    <div className={`profile-photo ${className}`}>
      {showPhoto ? (
        <img
          src={portfolio.profileImage}
          alt={`${portfolio.name} profile`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className="profile-fallback"
          role="img"
          aria-label={`${portfolio.name} initials: ${portfolio.initials}`}
        >
          <span aria-hidden="true">{portfolio.initials}</span>
          <Sparkles size={22} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
