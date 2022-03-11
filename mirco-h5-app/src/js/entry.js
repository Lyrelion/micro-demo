const render = ($) => {
  // $('#micro-h5-app-container').html('Hello, render with jQuery');
  return Promise.resolve();
};

((global) => {
  global['micro-h5-app'] = {
    bootstrap: () => {
      console.log('micro-h5-app bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('micro-h5-app mount');
      return render($);
    },
    unmount: () => {
      console.log('micro-h5-app unmount');
      return Promise.resolve();
    },
  };
})(window);