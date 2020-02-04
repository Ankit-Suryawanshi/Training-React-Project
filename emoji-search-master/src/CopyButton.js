import React, { Component } from "react"

export default class CopyButton extends Component {
  copyCodeToClipboard = () => {
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
        <button onClick={() => this.copyCodeToClipboard()}>
          Copy to Clipboard
        </button>
      </div>
    )
  }
}
