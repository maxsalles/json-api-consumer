import consume from './consume'

const ModelMixin = Class => class extends Class {
  constructor (id, attributes, relationships, included) {
    this._id = id
    this._relationships = []
    this.buildAttributes(attributes, relationships, included)
    this.buildRelationships(relationships, included, attributes)
  }

  get id () {
    return this._id
  }

  buildAttributes (attributes, _ = null, __ = null) {
    Object.entries(attributes).map(
      ([attribute, value]) => this[attribute] = value
    )
  }

  buildRelationships (relationships, included, _ = null) {
    Object.entries(relationships).forEach(
      ([relationship, data]) => relatesTo(relationship, data, included)
    )
  }

  relatesTo (relationship, data, included) {
    const value = consume({ data, included })

    this._relationships = [...this._relationships, relationship].filter(
      (v, i, a) => a.indexOf(v) === i
    )

    this[relationship] = value

    return this
  }
}

export default ModelMixin
