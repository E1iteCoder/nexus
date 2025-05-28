import React from "react";
import "../styles/SocialMedia.css";
import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const links = [
  { href: "https://twitter.com/Nexus", icon: <Twitter />, label: "Twitter" },
  { href: "https://instagram.com/Nexus", icon: <Instagram />, label: "Instagram" },
  { href: "https://linkedin.com/company/Nexus", icon: <LinkedIn />, label: "LinkedIn" },
];

export default function SocialMedia(): JSX.Element {
  return (
    <div className="social-media">
      <p className="social-text">
        Get connected with us on social networks:
      </p>
      <div className="social-icons">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
