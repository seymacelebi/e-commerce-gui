import { defineStore } from "pinia";

// AuthStore'u tanımla
export const useAuthStore = defineStore("auth", {
  // Store durumu (state) tanımı
  state: () => ({
    user: null, // Kullanıcıyı temsil eden bir değişken, başlangıçta null
    isAuthenticated: false, // Oturum açıldığında true olacak bir değişken
  }),

  // Store eylemleri (actions) tanımı
  actions: {
    // Oturum açma işlemi
    async login(username: any, password: any) {
      try {
        // Fake API çağrısı yapılacak
        const response = await fakeApi.login(username, password);

        // Kimlik doğrulama başarılı ise, kullanıcıyı oturum açmış olarak işaretleyin
        this.user = response.user; // Kullanıcı bilgilerini saklayın
        this.isAuthenticated = true; // isAuthenticated değerini true olarak ayarlayın
      } catch (error) {
        // Kimlik doğrulama başarısız oldu, hata işlemleri yapılabilir
        console.error(error);
        throw new Error("Kimlik doğrulama başarısız.");
      }
    },

    // Oturum kapatma işlemi
    logout() {
      // Kullanıcıyı oturumdan çıkarmak için gerekli işlemler yapılır

      this.user = null; // Kullanıcıyı null olarak sıfırlayın
      this.isAuthenticated = false; // isAuthenticated değerini false olarak ayarlayarak oturum açık değil olarak işaretleyin
    },
  },
});

// Fake API işlemlerini simüle eden bir nesne
const fakeApi = {
  async login(username: any, password: any) {
    // Fake API çağrısı yapılacak, aslında backend ile iletişim yerine basit bir simülasyon yapılıyor
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          // Kimlik doğrulama başarılı ise, kullanıcı bilgilerini döndür
          resolve({
            user: {
              username,
              // Diğer kullanıcı bilgilerini burada ekleyebilirsiniz
            },
          });
        } else {
          // Kimlik doğrulama başarısız ise, hata döndür
          reject(new Error("Kimlik doğrulama başarısız."));
        }
      }, 1000); // 1 saniye süren bir fake işlem
    });
  },
};
