{
  ui: {
  },
  errors: {
    signup: ["Invalid username\password"],
    session: ["Invalid username\password"]
  },
  session: {
    currentUser: {
      id: 1,
      username: "Atai"
    }
  },
  entities: {
    projects: {
      "1": {
        id: 1,
        title: "AppStarter",
        shortDescription: "short description",
        imageUrl: "ulr",
        rewardsId: [1,2,3],
        categories: [1,2],
        backedByCurrentUser: true
      },
      "2": {
        id: 1,
        title: "AppStarter2",
        shortDescription: "short description",
        imageUrl: "ulr",
        rewardsId: [4,5,6],
        categories: [2,3],
        backedByCurrentUser: false
      }
    },
    categories: {
      1: "tech",
      2: "art"
    },
    rewards: {
      "1": {
        id: 1,
        title: "some reward",
        pledgeAmount: 100,
        description: "reward",
        projectId: 1
      }
    }
  }
}
