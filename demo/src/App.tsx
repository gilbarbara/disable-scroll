import React from 'react';
import disableScroll from 'disable-scroll';

import { Button, Header, H1, Input, Step, Steps, Wrapper } from './components';
import GitHubRepo from "./GitHubRepo";

import './styles.css';

class App extends React.Component {
  state = {
    isDisabled: false,
  };

  handleClick = () => {
    const { isDisabled } = this.state;

    disableScroll[isDisabled ? 'off' : 'on']();
    this.setState({ isDisabled: !isDisabled });
  };

  renderSteps() {
    const colors = [
      '#5bc0eb',
      '#fde74c',
      '#9bc53d',
      '#e55934',
      '#fa7921',
      '#8F7892',
      '#f25f5c',
      '#ffe066',
      '#247ba0',
      '#98A584',
    ];
    const steps = [];
    let colorIdx = 0;

    for (let i = 200; i <= 5000; ) {
      steps.push(
        <Step
          key={i}
          style={{
            backgroundColor: colors[colorIdx % 10],
          }}
        >
          {i}
        </Step>,
      );
      i += 200;
      colorIdx++;
    }

    return <Steps>{steps}</Steps>;
  }

  render() {
    const { isDisabled } = this.state;

    return (
      <Wrapper>
        <GitHubRepo />

        <Header style={{ backgroundColor: '#fff' }}>
          <H1>disable-scroll</H1>
          <div>
            <Button
              onClick={this.handleClick}
              disabled={isDisabled}
            >
              turn it on
            </Button>
            <Button
              onClick={this.handleClick}
              disabled={!isDisabled}
              style={{ marginLeft: 20 }}
            >
              turn it off
            </Button>
          </div>
          <Input type="text" placeholder="testing..." />
        </Header>
        {this.renderSteps()}
      </Wrapper>
    );
  }
}

export default App;
