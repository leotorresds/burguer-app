import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal";

const withErrorHandler = (WrappedComponent, api) => {
  return props => {
    const [error, setError] = useState(null);
    useEffect(() => {
      const reqInterceptor = api.interceptors.request.use(req => {
        setError(null);
        return req;
      });
      const resInterceptor = api.interceptors.response.use(
        res => res,
        error => {
          setError(error);
        }
      );

      return () => {
        api.interceptors.request.eject(reqInterceptor);
        api.interceptors.response.eject(resInterceptor);
      };
    }, []);
    return (
      <>
        <Modal show={error} modalClosed={() => setError(null)}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
