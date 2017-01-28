import React, { PropTypes, Component, Children } from "react"
import TabTitle from "./TabTitle"

const styles = {
  container : {
    display : "flex",
    flexDirection : "column"
  },
  ul : {
    display : "flex",
    flexDirection : "row",
    alignItems : "flex-end",
    margin : 0,
    padding : 0,
    listStyleType : "none",
    cursor : "default"
  },
  content : {
    flex : 1,
    border : "1px solid #ddd",
    padding : 5,
    borderRadius : "0 0 3px 3px"
  }
}

class Tabs extends Component {

  constructor(props) {

    super(props)

    this.state = { active : 0 }

  }

  handleClick(i) {

    this.setState({ active : i })

  }

  renderHeader() {

    const { active } = this.state

    return Children.map(this.props.children, (child, i) => {

      const { label } = child.props

      return (
        <TabTitle
          active={ active === i }
          onClick={ this.handleClick.bind(this, i) }
          key={ "panelTitle" + i }
        >
          { label }
        </TabTitle>
      )

    })

  }

  componentWillUpdate(nextProps) {

    let { active } = this.state
    const children = Children.toArray(nextProps.children)

    if (!children[active]) {
      while (!children[active]) active--
      this.setState({ active })
    }

  }

  renderActivePanel() {

    const { children } = this.props
    const { active } = this.state

    return Children.toArray(children)[active]

  }

  render() {

    const { style, ...rest } = this.props

    delete rest.children

    return (
      <div { ...rest } style={ { ...styles.container, ...style } }>
        <ul style={ styles.ul }>
          { this.renderHeader() }
        </ul>
        <div style={ styles.content }>
          { this.renderActivePanel() }
        </div>
      </div>
    )

  }
}

Tabs.propTypes = {
  style : PropTypes.object,
  children : PropTypes.node
}

export default Tabs
