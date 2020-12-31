import gql from "graphql-tag";

export const state = () => ({
  headers: [],
  mainmessages: [],
  services: [],
  footers: [],
  templatebody: [],
  junkluggers: []
});

export const mutations = {
  headers: (state, data) => {
    state.headers = data;
  },
  mainmessages: (state, data) => {
    state.mainmessages = data;
  },
  services: (state, data) => {
    state.services = data;
  },
  footers: (state, data) => {
    state.footers = data;
  },
  templatebody: (state, data) => {
    state.templatebody = data;
  },
  junkluggers: (state, data) => {
    state.junkluggers = data;
  }
};

export const actions = {
  async callApollo({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
      query {
        templatebody(order_by: {id: asc}) {
          id
          name
          html
          css
        }
        headers(order_by: {id: asc}) {
          id
          name
          html
          css
        }
        mainmessages(order_by: {id: asc}) {
          id
          name
          html
          css
          js
        }
        services(order_by: {id: asc}) {
          id
          name
          html
          css
        }
        footers(order_by: {id: asc}) {
          id
          name
          html
          css
        }
        junkluggers(order_by: {id: asc}) {
          id
          name
          html
          css
          inline
        }
      }
      `
    });

    await commit("headers", response.data.headers);
    await commit("mainmessages", response.data.mainmessages);
    await commit("services", response.data.services);
    await commit("footers", response.data.footers);
    await commit("templatebody", response.data.templatebody);
    await commit("junkluggers", response.data.junkluggers);
  }
};
