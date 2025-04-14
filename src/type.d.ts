interface AndroidInterface {
  showAlert: (msg: string) => void;
}

declare global {
  interface Window {
    Android: AndroidInterface;
  }
}

export {};
