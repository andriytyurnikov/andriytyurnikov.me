import { writable } from 'svelte/store';

class TransitionMap {
  constructor() {
    this._matchers = writeable([]);
  }

  transition() {
    newMatcher = new TransitionMatcher();
    this._matchers.update(v => [...v, newMatcher]);
    return newMatcher;
  }
}

class TransitionMatcher {
  constructor() {
    this._constraints = writeable([]);
    this._rules = writeable([]);
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

  use() {}

  matches() {}
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

export default TransitionMap;