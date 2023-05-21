async function initMocks() {
     if (typeof window !== "undefined") {
          const { worker } = await import("./browser");
     }
}

export {};
