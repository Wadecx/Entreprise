import React from "react";
import Image from "next/image";

const data = [
  {
    Entreprise: "PCKraft",
    Expertises: "Usine de fabrications de composants d'ordinateur",
    Password: "WPA-2 > 12ch + hashage",
    Securite:
      "Filtrage MAC (NAC), limitation de connexions, tests de phishing annuels, Cloudflare Anti-DDoS, Fail2Ban, détection de scans (NMAP), accès serveur via badge sécurisé (OSDP + AES-128, MIFARE DESFire EV2, HTTPS/VPN).",
    Logiciels: "Cloudflare, Wazuh, Fail2ban",
    Status: "Online",
  },
];

export const TableauEntreprise = () => {
  return (
    <div className="bg-gray-900 text-gray-100 flex flex-col min-h-screen">
      {/* Tableau en haut */}
      <div className="w-full overflow-x-auto">
        <table className="w-full bg-gray-800 text-sm sm:text-base md:text-lg border-separate border-spacing-0">
          <thead className="bg-gray-700 text-gray-300 sticky top-0">
            <tr>
              <th className="p-4 text-left">Entreprise</th>
              <th className="p-4 text-left">Expertises</th>
              <th className="p-4 text-left">Mot de passe</th>
              <th className="p-4 text-left">Sécurité</th>
              <th className="p-4 text-left">Logiciels</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-700/30 transition"
              >
                <td className="p-4 font-semibold text-white">
                  {row.Entreprise}
                </td>
                <td className="p-4">{row.Expertises}</td>
                <td className="p-4">{row.Password}</td>
                <td className="p-4 text-justify">{row.Securite}</td>
                <td className="p-4">{row.Logiciels}</td>
                <td className="p-4 text-green-400 font-medium">{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image en bas */}
      <div className="w-full h-[60vh] relative mt-0">
        <Image
          src="/assets/images/schema.png"
          alt="Schéma de sécurité"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};
