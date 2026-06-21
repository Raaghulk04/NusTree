import { describe, it, expect } from "vitest";
import { isPrereqTreeSatisfied } from "./eligibility.service";

// {
//       "and": [
//         {
//           "or": [
//             "CS1231:D",
//             "MA1100:D",
//             "MA1100T:D",
//             "CS1231S:D"
//           ]
//         },
//         {
//           "or": [
//             "CS2030S:D",
//             "CS2030:D",
//             "CS2030DE:D",
//             "YSC2229:D",
//             "CS2040:D",
//             "CS2040C:D",
//             "CS2040S:D",
//             "CS2040DE:D",
//             "CS2040HS:D"
//           ]
//         }
//       ]
//     }

describe("isPrereqTreeSatisified", () => {
  it("test nested OR mods", () => {
    expect(
      isPrereqTreeSatisfied(
        {
          and: [
            {
              or: ["CS1231:D", "MA1100:D", "MA1100T:D", "CS1231S:D"],
            },
            {
              or: [
                "CS2030S:D",
                "CS2030:D",
                "CS2030DE:D",
                "YSC2229:D",
                "CS2040:D",
                "CS2040C:D",
                "CS2040S:D",
                "CS2040DE:D",
                "CS2040HS:D",
              ],
            },
          ],
        },
        ["CS1231S", "CS2030S"],
      ),
    ).toEqual(true);
  });

  it("fail test nested OR mods", () => {
    expect(
      isPrereqTreeSatisfied(
        {
          and: [
            {
              or: ["CS1231:D", "MA1100:D", "MA1100T:D", "CS1231S:D"],
            },
            {
              or: [
                "CS2030S:D",
                "CS2030:D",
                "CS2030DE:D",
                "YSC2229:D",
                "CS2040:D",
                "CS2040C:D",
                "CS2040S:D",
                "CS2040DE:D",
                "CS2040HS:D",
              ],
            },
          ],
        },
        ["CS1231S"],
      ),
    ).toEqual(false);
  });
});
