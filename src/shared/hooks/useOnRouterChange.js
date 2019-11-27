import { useHistory } from 'react-router-dom';


const useOnRouterChange = (handler) => {
  const history = useHistory();
  history.listen(handler);
};


export default useOnRouterChange;
