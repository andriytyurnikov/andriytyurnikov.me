import { writable } from 'svelte/store';

class TransitionMapper {
  constructor() {
    this._map = writeable([]);
  }
}

class TransitionMatcher {
  constructor() {
    this._map = writeable([]);
  }

  fromValue() {}

  toValue() {}

  betweenValues() {}

  matchSelector() {}

  matchMediaQuery() {}

  toRoute() {}

  fromRoute() {}

  withinRoute() {}

  onInitialRenderRule() {}

  includingInitialRender() {}

  use()
}

// map
// .transition
// .fromRoute()
// .use()

//    TransitionMatcher
  //   .fromValue()
  //   .toValue()
  //   .betweenValues()
  //   .matchSelector()
  //   .matchMediaQuery()
  //   .toRoute()
  //   .fromRoute()
  //   .withinRoute()
  //   .onInitialRenderRule()
  //   .includingInitialRender()
  //   .use()

const matcher = Object.freeze( new TransitionMatcher() );

export default matcher;