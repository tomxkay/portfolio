import { getAge } from "@utils/getAge";
import * as React from "react";
import { Typography } from "@material-ui/core";

interface IState {
  ageInterval: number;
  age: string;
}

class AgeDisplay extends React.Component<{}, IState> {
  public state = {
    age: "",
    ageInterval: 0
  };

  public componentWillMount() {
    const dob = new Date("Jan 01, 1993 00:00:00");
    // Initial
    this.setState(() => ({
      age: getAge(dob)
    }));

    const ageInterval = window.setInterval(() => {
      this.setState(() => ({
        age: getAge(dob)
      }));

      // tslint:disable-next-line:no-console
      console.log("asdfasdf");
    }, 1000);

    this.setState(() => ({ ageInterval }));
  }

  public componentWillUnmount() {
    window.clearInterval(this.state.ageInterval);
  }

  public render() {
    const { age } = this.state;
    return (
      <React.Fragment>
        <Typography>AGE:</Typography>
        {age}
      </React.Fragment>
    );
  }
}

export default AgeDisplay;
