export const MODULE_STATUS = {
  notInGraph: -1,
  locked: 0,
  eligible: 1,
  completed: 2,
  invalid: 3,
};

export const MODULE_STATUS_COLORS = {
  [MODULE_STATUS.locked]: "#e5e7eb",
  [MODULE_STATUS.eligible]: "#93c5fd",
  [MODULE_STATUS.completed]: "#86efac",
  [MODULE_STATUS.invalid]: "#fde68a",
};

export const MODULE_STATUS_BORDER_COLORS = {
  [MODULE_STATUS.locked]: "#d1d5db",
  [MODULE_STATUS.eligible]: "#3b82f6",
  [MODULE_STATUS.completed]: "#22c55e",
  [MODULE_STATUS.invalid]: "#d97706",
};

export const SELECTED_MODULE_BORDER_COLOR = "#f59e0b";

export function getModuleGraphStatus({
  prereqFulfilled,
  planTime,
  inPlanner,
}) {
  if (!prereqFulfilled && !planTime && !inPlanner) {
    return MODULE_STATUS.notInGraph;
  }

  if (!prereqFulfilled && !planTime && inPlanner) {
    return MODULE_STATUS.invalid;
  }

  if (!prereqFulfilled && planTime && !inPlanner) {
    return MODULE_STATUS.notInGraph;
  }

  if (!prereqFulfilled && planTime && inPlanner) {
    return MODULE_STATUS.locked;
  }

  if (prereqFulfilled && !planTime && inPlanner) {
    return MODULE_STATUS.completed;
  }

  return MODULE_STATUS.eligible;
}

export function getModuleNodeBackground(status) {
  return MODULE_STATUS_COLORS[status] ?? MODULE_STATUS_COLORS[MODULE_STATUS.locked];
}

export function getModuleNodeBorder(status) {
  const width = status === MODULE_STATUS.locked ? 1 : 2;
  const color =
    MODULE_STATUS_BORDER_COLORS[status] ??
    MODULE_STATUS_BORDER_COLORS[MODULE_STATUS.locked];

  return `${width}px solid ${color}`;
}
