export default function checkPrereqComplexity(allMods) {
  let deeplyNestedCount = 0;

  allMods.forEach((mod) => {
    const tree = mod.prereqTree;
    if (tree && tree.or) {
      // Check if any child inside an OR block is an AND block
      const hasNestedAnd = tree.or.some((child) => child && child.and);
      if (hasNestedAnd) {
        deeplyNestedCount++;
        console.log(`Complex Pattern found in: ${mod.id}`);
      }
    }
  });

  console.log(
    `Total modules with (A AND B) OR (C AND D): ${deeplyNestedCount}`,
  );
}
