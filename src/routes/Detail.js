import React from "react";

class Detail extends React.Component {

    componentDidMount() {//handling the case user entered detail page forcely not through clicking the movie card
      const { location, history } = this.props;
      if (location.state === undefined) {
        history.push("/");
      }
    }

    render() {
        const { location } = this.props;
        if (location.state) {//checking the 'location' exist. for the case clicking in the detail page
          return <span>{location.state.title}</span>;
        } else { 
          return null; //after return null, we go to componentDidMount()
        }
      }
}

export default Detail