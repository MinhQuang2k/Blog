export default function ({ $axios, app, redirect, store }) {
  $axios.onRequest((config) => { });

  $axios.onError((error) => {
    const statusCode = error?.response?.status || 500;
    const config_url = error?.response?.config?.url || "";

    if (!error.response) {
      sessionStorage.clear();
      return app.$auth.logout();
    }
    if (statusCode === 401) {
      localStorage.setItem("timeout", true);
      sessionStorage.clear();
      return app.$auth.logout();
    }
    if (statusCode === 403) {
      sessionStorage.clear();
      return app.$auth.logout();
    }
    if (statusCode === 500) {
      alert("error 500");
    }
    if (statusCode === 504) {
      alert("Gateway Timeout");
    }

    try {
      const token = app.$auth.strategy.token.get() || null;

      if (token && config_url && !config_url.includes("error-log")) {
        app.store.dispatch("error", { errorInfo: error?.response });
      }
    } catch (error) { }
  });
}
