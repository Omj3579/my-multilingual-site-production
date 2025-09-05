// Stub file to prevent build errors
export const createClient = () => ({
  auth: {
    signInWithPassword: () => Promise.resolve({ error: null }),
    signOut: () => Promise.resolve({ error: null }),
  },
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ error: null, data: null }),
    }),
  },
});

export default createClient;
