import { Hero } from '@modules/home/components/hero';
import { Nav } from '@modules/home/components/nav';
import * as React from 'react';

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Hero />
        <Nav />
      </React.Fragment>
    );
  }
}

export default Home;
