import { getModules } from "@/server/module.service";

export default async function getAllMods() {
  return getModules();
}
