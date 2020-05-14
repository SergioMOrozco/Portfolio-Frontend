import React from "react";

const _loaded = {};

class ImageLoader extends React.Component {
  
  //initial state: image loaded stage 
  state = {
    loaded: _loaded[this.props.src]
  };

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "opacity-0",
    loadedClassName: "fade-in-no-delay-fast"
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    this.props.onLoad();
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };


  render() {
  
    let { className, loadedClassName, loadingClassName} = this.props;

    className = `${className} ${this.state.loaded
      ? loadedClassName
      : loadingClassName}`;

    return <img 
             src={this.props.src} 
             onClick={this.props.onClick}
             onMouseEnter={this.props.onMouseEnter}
             onMouseOut={this.props.onMouseOut}
             className={className + " " + this.props.className} 
             onLoad={this.onLoad}
             alt={this.props.alt} />;
  }
}

export default ImageLoader;