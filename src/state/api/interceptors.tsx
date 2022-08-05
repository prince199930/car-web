export const isHandlerEnabled = (config:any = {}) => {
    return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
  };
  
  export const requestHandler = (request:any) => {
    if (isHandlerEnabled(request)) {
      // DO SOMETHING
    }
    return request;
  };
  
  export const successHandler = (response:any) => {
    if (isHandlerEnabled(response)) {
      // DO SOMETHING
    }
    return response;
  };
  
  export const errorHandler = (error:any) => {
    if (isHandlerEnabled(error.config)) {
      // DO SOMETHING
      window.location.href = "/error/404";
    }
    return Promise.reject({ ...error });
  };
  