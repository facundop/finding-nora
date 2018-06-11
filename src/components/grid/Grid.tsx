import * as React from 'react'
import Item from './Item'

export interface IGridProps {
  children: React.ReactNode
}

class Grid extends React.Component<IGridProps, object> {
  public static Item: typeof Item
  public render() {
    return <div className="grid">{this.props.children}</div>
  }
}

export default Grid