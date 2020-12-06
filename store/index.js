import gql from "graphql-tag";

export const state = () => ({
  headers: [],
  footers: [],
  templatebody: []
});

export const mutations = {
  headers: (state, data) => {
    state.headers = data;
  },
  footers: (state, data) => {
    state.footers = data;
  },
  templatebody: (state, data) => {
    state.templatebody = data;
}
};

export const actions = {
  async callApollo({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
      query {
        footers {
          id
          name
          html
          css
        }
        headers {
          id
          name
          css
          html
        }
        templatebody {
          name
          html
          css
          id
        }
      }
      `
    });

    await commit("headers", response.data.headers);
    await commit("footers", response.data.footers);
    await commit("templatebody", response.data.templatebody);
  }
};
