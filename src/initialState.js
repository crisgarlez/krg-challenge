export default {
  users: [
    {
      username: 'admin',
      password: 'admin',
      isAdmin: true,
    }
  ],
  user: {
    isAuthenticated: false,
    isLoading: false,
    user: {},
    error: {},
  },
  employees: [],
  vaccineTypes: [
    {
      id: 'sputnik',
      name: 'Sputnik',
    },
    {
      id: 'astrazeneca',
      name: 'AstraZeneca',
    },
    {
      id: 'pfizer',
      name: 'Pfizer',
    },
    {
      id: 'jhonsonjhonson',
      name: 'Jhonson&Jhonson',
    },
  ],
};
