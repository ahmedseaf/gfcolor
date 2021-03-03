import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';




class ColorBox extends Component{
  constructor(props){
    super(props);
    this.state = {isCopied: false}
    this.showBackground = this.showBackground.bind(this);
  }

  showBackground(){
    this.setState({ isCopied: true }, () => {
      setTimeout(() => this.setState({isCopied : false}), 1500);
    });
  }

  render(){
    const {background,colorId, mainPalletId,isLink, colorName} = this.props;
    const isCopied = this.state.isCopied;
    const isDark = chroma(background).luminance() <= 0.22;
    // console.log(chroma(background).luminance());
    return(
      <CopyToClipboard text={background} onCopy={this.showBackground}>
        <div className="color-box" style={{background}} >
          <div style={{ background }} className={`copy-overlay ${isCopied && 'show'}`}></div>
          <div className={`copy-overlay-text ${isCopied && 'show'}`}>
            <h1 className={isDark ? "is-dark" : ""}>Copied</h1>
            <p className={isDark ? "is-dark" : ""}>{this.props.background}</p>
          </div>
          <button className="copy-color">Copy</button>
          <div className="footer-container">
            <div className="footer">
              <span className={isDark ? "is-dark" : ""}>{colorName}</span>
              {isLink && (
                <Link className="more-link" to={`/flat-pallet/${mainPalletId}/${colorId}`} onClick={e => e.stopPropagation()}>
                  <span className={isDark ? "more more-dark" : "not-dark more"}>more</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
///flat-pallet/:palletId/colorId
export default ColorBox