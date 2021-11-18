//create html elements
const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.className = className;
  element.innerText = text;
  return element;
};

const theBestFeature = ({
  name,
  message
}) => {
  return `${name} thinks Trevor's feature is the best feature in the world! ${message}`;
}

console.log(theBestFeature({
  name: 'Carter',
  message: 'I love this feature.'
}));

const addSimple = (x , y) =>{
    const answer = x + y;
    return answer;
}


const simpleDivide = (x, y) => {
    if(x<y){
        return 'Try Again';
    }else { return (x / y)  }
}

