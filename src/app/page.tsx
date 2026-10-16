import { HomeShell } from "@/components/HomeShell";
import { JsonLd } from "@/components/JsonLd";
import {
  personSchema,
  websiteSchema,
  portfolioSchema,
} from "@/data/structuredData";

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={portfolioSchema()} />
      <HomeShell variant="v1" defaultMode="dark" bodyClass="counter-scroll" />
    </>
  );
}
