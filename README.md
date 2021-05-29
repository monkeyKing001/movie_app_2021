React app course 2021


2.1

1. react returns html

2. react can render only one component
if you want to render more than 2 comp, comp in the comp can be rendered (children component)
ex) index <- app <- movie


import React from "react";

function Food({ favourite }) {  ({name}) means argument is name in props
  return <h1>I like {favourite}</h1>;
  }

// function Food(props){
    return <h1> I like {prop.favourite}</h1>
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}


2.2
map은 function을 취해서 fun의 인자 각각을 어레이 아이템에 적용함. map은 array를 반환한다!!!!



3.0 
class component 안의 state!!!(클래스 안의 데이터가 저장될 장소이다!!! state 또한 하나의 object이라고)

3.1 
setState() make app development more comfortable which is auto rendering(refresh)!!! 
'current =>'  this way is much smarter!!



setState vanilla
this.setState({count : this.state.count +1})

vs

setState current
this.setState(current => ({count : current.count +1})  'current' means 'this.state.' ?? maybe??  



3.2
component life cycle:
constructor -> render ->componentDidMount

render -> update


4.0
async() makes function asuinchronized. makes function wait(awit)


5.0
1) npm i ph-pages
2) "homepage":https://{githubusername}.github.io/{projectname} (lowercase is recommended) (eg.
  "homepage": "https://gatsby0814.github.io/Movie_app_2021/")
3) deploy predeploy(eg.
    "deploy":"gh-pages -d build",
    "predeploy":"npm run build")