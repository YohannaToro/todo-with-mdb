import React, { Component } from "react";
import axios from 'axios'
import download from 'downloadjs'
import { MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdbreact";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state={
      img:null
    }
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};
  componentDidMount() {
    
    console.log("hi no funca")
    var imagenes=["lion.jpeg","concept-reseau-blockchain-ledger-distribue-technologie-connexion-informatique_1302-8410.jpg","Capturas.PNG","file","Captura3.PNG","pro.PNG","login.PNG","diagram.PNG"]
    axios.get('http://localhost:8080/boards/files/README.pdf')
         .then(Response => {
         
          console.log(Response.headers["content-type"])
          if (Response.headers["content-type"]==="application/pdf"){
            const content = Response.headers['content-type'];
        // download(Response.data, file.file_name, content)

          }

        }
         
         
         )
         .catch(err => console.log(err));
         const min = 1;
    const max = imagenes.length;
    const rand = min + Math.random() * (max - min);
    console.log("send heeeeeeeeeeeeeeeelp   "+"  "+Math.round(rand)+imagenes[rand])
         axios.get('http://localhost:8080/boards/files/'+imagenes[Math.round(rand)]).then(response=>this.setState({img:response.config.url}));
        
}
downloadFile(file) {
  const specificationId = this.$route.params.specificationId;

  axios
      .get(`${this.$API_URL}/api/v1/suppliersmanagement/product-specifications/${specificationId}/fileupload/${file.id}/download`, {
          headers: this.headers,
          responseType: 'blob', // had to add this one here
      })
      .then(response => {
         const content = response.headers['content-type'];
         download(response.data, file.file_name, content)
      })
      .catch(error => console.log(error));
}

  render() {
    var dta = this.props.task.dueDate.toString();

    const {img} = this.state;

    return (
      <MDBCardBody>
        <MDBCardImage style={{width:"auto"}}  src={img} alt="Card image cap"/>
        <MDBCardTitle style={{ fontSize: "90%" }}>
          {this.props.task.name}
        </MDBCardTitle>
        <h4 className="font-weight-bold mb-3" style={{ fontSize: "90%" }}>
          {this.props.task.responsible.name}
        </h4>
        <p className="font-weight-bold blue-text" style={{ fontSize: "90%" }}>
          {this.props.task.responsible.email}
        </p>
        <MDBCardTitle style={{ fontSize: "90%" }}>
          {this.props.task.updateDate}
        </MDBCardTitle>
        <MDBCardText style={{ fontSize: "70%" }}>
          Description: {this.props.task.description}
        </MDBCardText>
        <MDBCardText style={{ fontSize: "70%" }}>
          Status: {this.props.task.isDone}
        </MDBCardText>
        <MDBCardText style={{ fontSize: "70%" }}>Due date: {dta}</MDBCardText>
      </MDBCardBody>
    );
  }
}
