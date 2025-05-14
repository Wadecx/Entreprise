import { TableauEntreprise } from "@/containers/home/tableau";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <TableauEntreprise />
    </>
  );
}
