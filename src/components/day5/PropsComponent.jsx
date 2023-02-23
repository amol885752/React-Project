const PropsComponent =(props)=>{
    console.log(props.user);
    // props.name ="Akshay";- props are read only - can not change its value
    return(
        <>
            {/* <h1>This is Props concept</h1> */}
            <h2>My name is:Amol {props.user}</h2>
        </>
    )
}
export default PropsComponent