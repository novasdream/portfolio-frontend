import { DocumentNode } from 'graphql'
import { AnyAction } from 'redux'

export interface IPageQuery {
  query: DocumentNode
  variables?: Record<string, unknown>
  context?: Record<string, unknown>
  path?: string
  normalizer?: (pathEntity?: unknown) => unknown
  action?: (pathEntity?: unknown) => AnyAction
  actions?: Array<(pathEntity?: unknown) => AnyAction>
}
