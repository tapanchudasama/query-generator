import { useCallback, useEffect, useState } from "react";
import { Rule, RuleGroup } from "../types/types";

const CONDITION_TO_OPERATOR: {
  [key in Rule["condition"] as string]: string;
} = {
  Equals: "==",
  "Does not equal": "!=",
  Like: "LIKE",
  "Not like": "NOT LIKE",
  Is: "IS",
  "Is not": "IS NOT",
  "Is Empty": "IS NULL",
};

const CONJUNCTION_TO_OPERATOR: {
  [key in RuleGroup["conjunction"]]: string;
} = {
  AND: "&&",
  OR: "||",
};

export const useRuleQuery = (
  rules: Rule[],
  conjunction: RuleGroup["conjunction"]
) => {
  const [queryString, setQueryString] = useState("");

  const computeQuery = useCallback(() => {
    const query = rules.reduce((acc, curr, index) => {
      if (!curr.field || !curr.condition || !curr.value?.length) {
        return acc;
      }

      acc += `field.${curr.field.toLowerCase()} ${
        CONDITION_TO_OPERATOR[curr.condition || ""]
      } "${curr.value?.join(",")}"`;

      if (index !== rules.length - 1) {
        acc += ` ${CONJUNCTION_TO_OPERATOR[conjunction]} `;
      }

      return acc;
    }, "");

    setQueryString(query);
  }, [rules, conjunction]);

  useEffect(() => {
    computeQuery();
  }, [rules, conjunction, computeQuery]);

  return {
    queryString,
  };
};
