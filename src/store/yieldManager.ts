import { atom, useAtom, useSetAtom, useAtomValue } from "jotai";
import type { PrimitiveAtom, Atom, WritableAtom } from "jotai";
import { SurveyDetails } from "./surveys";
import { v4 as uuidv4 } from "uuid";

export interface YieldManager {
  id: string | undefined;
  name: string;
  display_name: string;
  duration: string;
  reward_text: string;
  reward: string;
  enabled: boolean;
}

export interface Operation {
  value: string;
  label: string;
}

export interface Conditions {}

export interface ConditionInterface {
  id?: string;
  data_field: string;
  operator: Operation;
  filter_value: string;
  filter_end_value?: string;
  type: 'survey' | 'profile';
  survey?: string;
}

export interface ConditionGroupInterface {
  id?: string;
  conditions: ConditionInterface[];
  childrenMatchType: string;
  survey: SurveyDetails | null;
}

export const yieldManagerAtom = atom<YieldManager | null>(null);
export const operationsAtom = atom<Operation[] | null>(null);
export const dataFieldAtom = atom<string | null>(null);
export const conditionGroupsAtom = atom<ConditionGroupInterface[] | null>([
  {
    id: uuidv4(),
    childrenMatchType: "and",
    conditions: [
      {
        data_field: "age",
        operator: {
          value: "eq",
          label: "Equal to",
        },
        filter_value: "18",
        filter_end_value: "18",
        type: "survey",
        survey: "survey1",
      },
    ],
    survey: null,
  },
]);
