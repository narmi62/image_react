import Child from "./Child"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"

var imageList = [
    {  
        img:img1,
        title: "Tandoori Chicken",
        desc: "Flavourful,Mouthwatering and tasty"
    },
    {  
        img:img2,
        title: "Sea food fry",
        desc: "Delicious,Fantastic and tossed with capsicum and herbs"
    },
    {  
        img:img3,
        title: "Vegetable Hakka Noodles",
        desc: "Stir-fried noodles tossed with colourful vegetables and sauces."
    },
    {  
        img:img4,
        title: "Paneer Butter Masala",
        desc: "Soft paneer cubes cooked in a creamy, buttery tomato gravy"
    },

    {  
        img:img5,
        title: "Chilli Chicken",
        desc: "Crispy chicken tossed with spicy sauce, herbs and sesame seeds."
    },
      {  
        img:img6,
        title: "Kadai Paneer",
        desc:"Paneer cooked with capsicum, tomatoes and aromatic Indian spices."
    }

]

function Parent(props) {
    return (
        <div className="images_sec">
            {imageList.map(function (item) {
                return (


                    <Child



                        img={item.img}
                        title={item.title}
                        desc={item.desc}>


                    </Child>
                )

            })}

        </div>
    )



}

export default Parent