export default function buildModelInstance (data, included, modelStorage) {
  const { type, id, attributes, relationships } = data
  const Model = modelStorage.get(type)

  return new Model(id, attributes, relationships, included)
}
