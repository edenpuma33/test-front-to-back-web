import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware"; //ช่วยเก็บข้อมูลไว้ใน Local Storage

// Step 1 Create Store
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      const { payload, token } = res.data;
      set({ user: payload, token: token });

      return { success: true, role: payload.role };
    } catch (error) {
      return { success: false, error: error.response.data.message };
    }
  },
});


// Step 2 Exports Store
const useAuthStore = create(persist(authStore,{name: 'auth-store'}));

export default useAuthStore;
