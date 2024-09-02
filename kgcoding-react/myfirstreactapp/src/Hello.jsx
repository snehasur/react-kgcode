function Hello(){
  let myName='sneha';
  let fullName=()=>{
    return 'sneha sur';
  }
  let number =456;
  return <h3>
    Message no:{number}
    hello this is the future speaking.I am {myName}.
    hello this is the future speaking.I am {fullName()}.
    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    
  </h3>
}
export default Hello;