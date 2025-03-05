import { Pharmacy } from "@/types/pharmacy-type";
import { create } from "zustand";

export interface PharmacyStore {
  pharmacy: Pharmacy | null;
  setPharmacy: (pharmacy: Pharmacy) => void;
  clearPharmacy: () => void;
}

const usePharmacyStore = create<PharmacyStore>((set) => ({
  pharmacy: null,
  setPharmacy: (pharmacy: Pharmacy) => set({ pharmacy }),
  clearPharmacy: () => set({ pharmacy: null }),
}));

export default usePharmacyStore;
