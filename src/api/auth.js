export const signInAsync = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "1234") {
        resolve({ id: "u1", name: "어드민", email });
      } else {
        reject(new Error("INVALID_CREDENTIALS"));
      }
    }, 1000);
  });
};
