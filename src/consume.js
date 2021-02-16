import modelStorage from './modelStorage'
import buildModelInstance from './buildModelInstance'

export default function consume (payload, models = modelStorage) {
  const { data, included } = payload

  if (Array.isArray(data)) return data.map(item => buildModelInstance(data, included, modelStorage))

  return buildModelInstance(data, included, modelStorage)
}
