(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(13),o=a.n(r),i=(a(20),a(21),a(3)),c=a(4),d=a(2),p=a(6),l=a(5),m=a(9),h=(a(22),a(14)),j=a(7),b=a(0),u=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleAdd=e.handleAdd.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleAdd",value:function(e){e.preventDefault();var t={petName:this.state.petName,ownerName:this.state.ownerName,aptDate:this.state.aptDate+" "+this.state.aptTime,aptNotes:this.state.aptNotes};this.props.addAppointment(t),this.setState({petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""}),this.props.toggleForm()}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"card textcenter mt-3 "+(this.props.formDisplay?"":"add-appointment"),children:[Object(b.jsxs)("div",{className:"apt-addheading card-header bg-primary text-white",onClick:this.props.toggleForm,children:[Object(b.jsx)(j.a,{})," Add Appointment"]}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{id:"aptForm",noValidate:!0,onSubmit:this.handleAdd,children:[Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"petName",readOnly:!0,children:"Pet Name"}),Object(b.jsx)("div",{className:"col-md-10",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"petName",placeholder:"Pet's Name",value:this.state.petName,onChange:this.handleChange})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName",children:"Pet Owner"}),Object(b.jsx)("div",{className:"col-md-10",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:this.state.ownerName,onChange:this.handleChange})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptDate",children:"Date"}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("input",{type:"date",className:"form-control",name:"aptDate",id:"aptDate",value:this.state.aptDate,onChange:this.handleChange})}),Object(b.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptTime",children:"Time"}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:this.state.aptTime,onChange:this.handleChange})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-md-2 text-md-right",htmlFor:"aptNotes",children:"Apt. Notes"}),Object(b.jsx)("div",{className:"col-md-10",children:Object(b.jsx)("textarea",{className:"form-control",rows:"4",cols:"50",name:"aptNotes",id:"aptNotes",placeholder:"Appointment Notes",value:this.state.aptNotes,onChange:this.handleChange})})]}),Object(b.jsx)("div",{className:"form-group form-row mb-0",children:Object(b.jsx)("div",{className:"offset-md-2 col-md-10",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary d-block ml-auto",children:"Add Appointment"})})})]})})]})}}]),a}(n.Component),O=a(15),f=a.n(O),N=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"appointment-list item-list mb-3",children:this.props.appointments.map((function(t){return Object(b.jsxs)("div",{className:"pet-item col media py-3",children:[Object(b.jsx)("div",{className:"mr-3",children:Object(b.jsx)("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return e.props.deleteAppointment(t)},children:Object(b.jsx)(j.b,{})})}),Object(b.jsxs)("div",{className:"pet-info media-body",children:[Object(b.jsxs)("div",{className:"pet-head d-flex",children:[Object(b.jsx)("span",{className:"pet-name",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("petName",a.target.innerText,t.aptId)},children:t.petName}),Object(b.jsx)("span",{className:"apt-date ml-auto",children:Object(b.jsx)(f.a,{date:t.aptDate,parse:"YYYY-MM-DD hh:mm",format:"MMM-DD h:mm a"})})]}),Object(b.jsxs)("div",{className:"owner-name",children:[Object(b.jsx)("span",{className:"label-item",children:"Owner: "}),Object(b.jsx)("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("ownerName",a.target.innerText,t.aptId)},children:t.ownerName})]}),Object(b.jsx)("div",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("aptNotes",a.target.innerText,t.aptId)},children:t.aptNotes})]})]},t.aptId)}))})}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"search-appointments row justify-content-center my-4",children:Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{id:"SearchApts",type:"text",className:"form-control","aria-label":"Search Appointments",onChange:function(t){return e.props.searchApts(t.target.value)}}),Object(b.jsxs)("div",{className:"input-group-append",children:[Object(b.jsxs)("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:["Sort by: ",Object(b.jsx)("span",{className:"caret"})]}),Object(b.jsxs)("div",{className:"sort-menu dropdown-menu dropdown-menu-right",children:[Object(b.jsx)("button",{className:"sort-by dropdown-item "+("petName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("petName",e.props.orderDir)},href:"#",children:"Pet Name"}),Object(b.jsx)("button",{className:"sort-by dropdown-item "+("aptDate"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("aptDate",e.props.orderDir)},href:"#",children:"Date"}),Object(b.jsx)("button",{className:"sort-by dropdown-item "+("ownerName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("ownerName",e.props.orderDir)},href:"#",children:"Owner"}),Object(b.jsx)("div",{role:"separator",className:"dropdown-divider"}),Object(b.jsx)("button",{className:"sort-by dropdown-item "+("asc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"asc")},href:"#",children:"Asc"}),Object(b.jsx)("button",{className:"sort-by dropdown-item "+("desc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"desc")},href:"#",children:"Desc"})]})]})]})})})}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={myAppointments:[],formDisplay:!1,orderBy:"petName",orderDir:"asc",queryText:"",lastIndex:0},e.deleteAppointment=e.deleteAppointment.bind(Object(d.a)(e)),e.toggleForm=e.toggleForm.bind(Object(d.a)(e)),e.addAppointment=e.addAppointment.bind(Object(d.a)(e)),e.changeOrder=e.changeOrder.bind(Object(d.a)(e)),e.searchApts=e.searchApts.bind(Object(d.a)(e)),e.updateInfo=e.updateInfo.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"toggleForm",value:function(){this.setState({formDisplay:!this.state.formDisplay})}},{key:"searchApts",value:function(e){this.setState({queryText:e})}},{key:"changeOrder",value:function(e,t){this.setState({orderBy:e,orderDir:t})}},{key:"updateInfo",value:function(e,t,a){var n=this.state.myAppointments;n[Object(m.findIndex)(this.state.myAppointments,{aptId:a})][e]=t,this.setState({myAppointments:n})}},{key:"addAppointment",value:function(e){var t=this.state.myAppointments;e.aptId=this.state.lastIndex,t.unshift(e),this.setState({myAppointments:t,lastIndex:this.state.lastIndex+1})}},{key:"deleteAppointment",value:function(e){var t=this.state.myAppointments;t=Object(m.without)(t,e),this.setState({myAppointments:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then((function(e){return e.json()})).then((function(t){var a=t.map((function(t){return t.aptId=e.state.lastIndex,e.setState({lastIndex:e.state.lastIndex+1}),t}));e.setState({myAppointments:a})}))}},{key:"render",value:function(){var e,t=this,a=this.state.myAppointments;return e="asc"===this.state.orderDir?1:-1,a=a.sort((function(a,n){return a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e})).filter((function(e){return e.petName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.ownerName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.aptNotes.toLowerCase().includes(t.state.queryText.toLowerCase())})),Object(b.jsx)("main",{className:"page bg-white",id:"petratings",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12 bg-white",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(u,{formDisplay:this.state.formDisplay,toggleForm:this.toggleForm,addAppointment:this.addAppointment}),Object(b.jsx)(x,{orderBy:this.state.orderBy,orderDir:this.state.orderDir,changeOrder:this.changeOrder,searchApts:this.searchApts}),Object(b.jsx)(N,{appointments:a,deleteAppointment:this.deleteAppointment,updateInfo:this.updateInfo})]})})})})})}}]),a}(n.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),r(e),o(e)}))};a(12),a(25);o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.37b0b53d.chunk.js.map