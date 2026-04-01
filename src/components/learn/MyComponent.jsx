import './style.css'

const MyComponent = () => {
    //const hoidanit = "Luong1";
    //const hoidanit = 25;
    //const hoidanit = [1 , 2 , 3]
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }
  return (
    <>
    <div>{JSON.stringify(hoidanit)} hoc reactjs update</div>
    <div>{console.log("ERIC")}</div>
    <div className="child"> hay </div>
    </>
  );
}
export default MyComponent;