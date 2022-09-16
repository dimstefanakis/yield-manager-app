import { atom, useAtom, useSetAtom, useAtomValue } from "jotai";
import type { PrimitiveAtom, Atom, WritableAtom } from "jotai";

export interface SurveyDetails {
  id: string;
  name: string;
  display_name: string;
  duration: string;
  reward_text: string;
  reward: string;
  enabled: boolean;
}

export const surveysAtom = atom<SurveyDetails[]>([]);
export const currentSurveyAtom = atom<SurveyDetails | null | undefined>(null);
