 
  const UserData=[
    { name:"sri",
    img:"girl2.jpg",
    city:"chennai",
    role:"frontend",
    online:true},

   {
   
  name: "ananya",
  img: "girl1.jpeg",
  city: "bangalore",
  role: "backend",
  online: false
}
,

   {
   
  name: "ananya Vidhya",
  img: "girl1.jpeg",
  city: "bangalore| chennai",
  role: "backend developer || UIUX designer",
  online: false
},
{ name:"sri",
    img:"girl2.jpg",
    city:"chennai",
    role:"frontend",
    online:true},
      {
   
  name: "ananya Vidhya",
  img: "girl1.jpeg",
  city: "bangalore| chennai",
  role: "backend developer || UIUX designer",
  online: false
},



  

  ]
 
 function User(props){
  return (
    <div >
   
       <div className="Card">
       <h4 className={props.online?"online":"offline"}
       >{props.online?"ONLINE":"OFFLINE"}</h4>
        <img src={props.img} alt="" className="img"
          />
        <h3> {props.name}</h3>
         <h3>{props.city}</h3>
         <p>{props.role }</p>
      <div className="btn">
         <button className="mt">Message</button>
          <button className="fo"> Following</button>
      </div>
        </div>
    </div>
  )
 }

 const UserCard = () => {
  return (

     <>
      <div className="simple">
        <h1>THis is a simple cards </h1>
      </div>





   <div  style={{ display: "flex", gap: "20px" , marginTop:"50px" , flexWrap:"wrap"}}>




      {UserData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        role={user.role}
        img={user.img}
        online={user.online}/>
      ))}
   </div>
    </>
  )
};
export default UserCard;

