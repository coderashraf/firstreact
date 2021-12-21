import React, {Component} from "react";

class ClassComponent extends Component{
  constructor(){
    super();
    this.state ={
      class:"none",
      flag:false
    }
  }
  dispClassComp(){
    this.state.flag===false 
            ?
            this.setState({class:"card",flag:true}) 
            :
            this.setState({class:"none",flag:false})
        }      
  render(){
    return(
       <div id="ClassComp" >
          <button onClick={ ()=>this.dispClassComp()}>To see styling in Class component</button>
          <div className={this.state.class}>
            <h3>This is created using Class component</h3>
            <p>This is done using external CSS</p>
            <p>This is done using inline CSS</p>
         </div>
       </div>
    )
  }
}
// const btn= document.getElementById("btn")
// class FooterComponent extends Component{
//   constructor(){
//     super();
//     this.state ={
//       message:"Change Message",
//       flag:"0"
//     }
//   }
//   changeMessage(){
//     if(this.state.flag=="0"){
//       this.setState(
//         {
//           message:"Message Changed",
//           flag:"1"
//         }
//       )
//     }
//     else{
//       this.setState(
//         {
//           message:"Change Message",
//           flag:"0"
//         }
//       )
//     }
    // btn.innerHTML ="hi"
    // console.log(btn);
  // }
  // render(){
  //   return(
  //     <div>
  //       <button id="btn" onClick={ ()=>this.changeMessage() }>{this.state.message}</button>
  //     </div>
  //   ) }}

export default ClassComponent