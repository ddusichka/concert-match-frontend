import ConcertImportPanel from "@/components/ConcertImportPanel";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      Import concerts
      <ConcertImportPanel />
    </div>
  );
}
