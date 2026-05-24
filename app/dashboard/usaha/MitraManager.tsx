"use client";

import { useOptimistic, startTransition } from "react";
import MitraForm from "./MitraForm";
import MitraList from "./MitraList";

export default function MitraManager({ initialMitras }: { initialMitras: any[] }) {
  
  const [optimisticMitras, setOptimisticMitras] = useOptimistic(
    initialMitras,
    (currentValues, { action, id, newData }: { action: any; id: any; newData?: any }) => {
      switch (action) {
        case "add":
          return [newData, ...currentValues];
        case "update":
          return currentValues.map((item) => (item.id === id ? { ...item, ...newData } : item));
        case "delete":
          return currentValues.filter((item) => item.id !== id);
        default:
          return currentValues;
      }
    }
  );

  return (
    <div className="space-y-6">
      <MitraForm setOptimisticMitras={setOptimisticMitras} />

      <MitraList mitras={optimisticMitras} setOptimisticMitras={setOptimisticMitras} />
    </div>
  );
}