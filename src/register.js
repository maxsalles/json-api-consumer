import modelStorage from "./modelStorage";

export default function register (models) {
  for (type in models) modelStorage.set(type, models[type])
}
