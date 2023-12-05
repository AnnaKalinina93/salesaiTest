export type UserCard = {
    name: {
        title: string,
        first: string,
        last: string,
      },
    email: string,
    phone: string,
    id: {
        name: string,
        value: string,
      },
    
  }

export type UserCards = {
    results: UserCard[],
}

