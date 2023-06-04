type props ={
  heading :string;
}

function Banner({heading} :props) {
  return (
    <div  className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">
        <h1>{heading}</h1>
    </div>
  )
}

export default Banner