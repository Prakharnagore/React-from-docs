import React,{useEffect,useState} from 'react'

function withLoading(Component) {
    return function(props) {
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
  
      if (isLoading) {
        return <p>Loading...</p>;
      } else {
        return <Component {...props} loading={isLoading} />;
      }
    };
  }

function MyComponent(props) {
    return (
      <div>
        <p>MyComponent</p>
        <p>loading: {props.loading.toString()}</p>
      </div>
    );
}

const MyComponentWithLoading = withLoading(MyComponent);

export default MyComponentWithLoading