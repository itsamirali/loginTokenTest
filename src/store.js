import { action, createStore } from 'easy-peasy';

const model ={
  gUserData: {},
  setGUserData: action((state, payload) => {
    state.gUserData = payload;
  }),
  

}

export const store = createStore(model);
