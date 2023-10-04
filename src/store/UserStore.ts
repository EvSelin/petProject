import { defineStore } from 'pinia'

interface UserData {
  email: string;
  password: string;
}

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    auth: false,
    users: []
  }),
  getters: {
    getAuth: (state) => state.auth
  },
  actions: {
    userAuthentication({ email, password }: UserData) {
      console.log(email, password)
      console.log(this.auth);
      this.auth = !this.auth
    }
  }
})

