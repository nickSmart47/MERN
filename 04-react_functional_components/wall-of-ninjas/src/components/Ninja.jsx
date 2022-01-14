import React, {useState} from 'react';
import styles from './Ninja.module.css'


const Ninja = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");
    
    // this state variable is to toggle their graduation status
    let [graduated, setGraduated] = useState(false)

    // let listOfNinjas = [];
    //create a state variable to store every ninjas that was submitted from the from
    let [listOfNinjas, setListOfNinjas] = useState([]);

    const createNinja = (e)=>{
        e.preventDefault(); //the default behavior of a form when submitting is to reload the page and we are prventing that from happening b/c we don't want the page to reload
        console.log("submitted the form!")
        console.log(ninjaName,imageUrl, favColor)
        let ninjaObj = {ninjaName, imageUrl, favColor, graduated}
        console.log(ninjaObj);

        setListOfNinjas([...listOfNinjas,ninjaObj])

    }

    // toggle graduation for student function that gets called when checkbox is clicked
    const toggleGraduation = (idx)=>{
        // console.log("trying to graduate this student-> logging idx here" + idx)
        // listOfNinjas
        let [...copyOfListOfNinjas] = listOfNinjas;

        copyOfListOfNinjas[idx].graduated = !copyOfListOfNinjas[idx].graduated

        setListOfNinjas(copyOfListOfNinjas);
    }


    return (
        <>
            <form onSubmit = {createNinja}>
                <div className="form-group">
                    <label htmlFor="">Ninja name:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setNinjaName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Url:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setFavColor(e.target.value)}/>
                </div>
                <input type="submit" value="Create Ninja!" />
            </form>
            <hr />
            <h3>Here are our list of ninjas!</h3>

            {
                listOfNinjas.map((ninja, i)=>{
                    return (
                        <div className = {styles.ninja} key = {i} style = {{border: "1px solid black", backgroundColor: ninja.favColor, display: "inline-block", textDecoration:  ninja.graduated? 'line-through': 'none'}}>
                            <h1>{ninja.ninjaName}</h1>
                            <p><img src={ninja.imageUrl} alt="" width= "100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                            <p><input type="checkbox" name="Graduate" id="" onClick = {()=>toggleGraduation(i)} />Graduate</p>
                        </div>
                    )
                })
            }


            {/* {% for ninja in listofninjas %}
                {{ninja.ninjaName}}
            {% endfor %} */}

        </>


    )
}


export default Ninja;