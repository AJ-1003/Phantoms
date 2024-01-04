import{r,u as w,a as y,b as S,j as e,F as C,S as P,L as E,c as q,Q as o,s as F}from"./index-18b1c63b.js";const U=()=>{const[i,l]=r.useState(""),[u,c]=r.useState(""),[f,d]=r.useState(""),[n,x]=r.useState(""),[m,j]=r.useState(""),N=w(),{userInfo:a}=y(t=>t.auth),[g,{isLoading:p}]=S();r.useEffect(()=>{c(a.firstName),d(a.lastName),l(a.email)},[a.email,a.firstName,a.lastName]);const v=async t=>{var h;if(t.preventDefault(),n!==m)o.error("Passwords do not match");else try{const s=await g({_id:a._id,firstName:u,email:i,password:n}).unwrap();console.log(s),N(F(s)),o.success("Profile updated successfully")}catch(s){o.error(((h=s==null?void 0:s.data)==null?void 0:h.message)||s.error)}};return e.jsxs(C,{children:[e.jsx("h1",{className:"text-center phantoms-heading",children:"Update Profile"}),e.jsxs(b,{onSubmit:v,className:"align-items-center phantoms-secondary-text",children:[e.jsx("div",{className:"input-control",children:e.jsx("input",{type:"name",required:!0,value:u,name:"firstName",placeholder:"Enter firstname",onChange:t=>c(t.target.value)})}),e.jsx("div",{className:"input-control",children:e.jsx("input",{type:"name",required:!0,value:f,name:"lastName",placeholder:"Enter lastname",onChange:t=>d(t.target.value)})}),e.jsx("div",{className:"input-control",children:e.jsx("input",{type:"email",required:!0,value:i,name:"email",placeholder:"Enter email",onChange:t=>l(t.target.value)})}),e.jsx("div",{className:"input-control",children:e.jsx("input",{type:"password",required:!0,value:n,name:"password",placeholder:"Enter password",onChange:t=>x(t.target.value)})}),e.jsx("div",{className:"input-control",children:e.jsx("input",{type:"password",required:!0,value:m,name:"confirmPassword",placeholder:"Confirm password",onChange:t=>j(t.target.value)})}),e.jsx(P,{isLoading:p,text:"Update"}),p&&e.jsx(E,{})]})]})},b=q.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .input-control {
    width: 60%;

    input {
      width: 100%;
    }
  }
`;export{U as default};
