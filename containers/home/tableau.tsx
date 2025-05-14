import React from "react";
import Image from "next/image";

const data = [
  {
    Entreprise: "PCKraft",
    Expertises: "Usine de fabrications de composant d'ordinateur",
    Password: "WPA-2 > 12ch + hashage",
    Securite:
      "Filtrage MAC (NAC), limite de connexion pour (X) postes, tests de phishing annuels, Cloudflare Anti-DDoS, Fail2Ban, détection scan NMAP",
    Logiciels: "Cloudflare, Wazuh, Fail2ban",
    Status: "Online",
  },
];

export const TableauEntreprise = () => {
  return (
    <div className="bg-gray-900 text-gray-100 flex flex-col justify-between min-h-screen">
      {/* Tableau en haut */}
      <div className="w-full">
        <table className="w-full bg-gray-800 text-xl border-collapse">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="p-3 text-left">Entreprise</th>
              <th className="p-3 text-left">Expertises</th>
              <th className="p-3 text-left">Mot de passe</th>
              <th className="p-3 text-left">Sécurité</th>
              <th className="p-3 text-left">Logiciels</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-3 font-medium">{row.Entreprise}</td>
                <td className="p-3">{row.Expertises}</td>
                <td className="p-3">{row.Password}</td>
                <td className="p-3 text-justify">{row.Securite}</td>
                <td className="p-3">{row.Logiciels}</td>
                <td className="p-3 text-green-300">{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image en bas */}
      <div className="w-full h-[70vh] relative">
        <Image
          src="/assets/images/schema.png" // Change ça si l'URL est différente
          alt="Schéma de sécurité"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};
