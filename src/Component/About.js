import React, { useState } from 'react'

export default function About() {
    const [mystyle, setmystyle]=useState(  {
        color:'black',
        backgroundColor:'white'
    })
    const [Toggle,ToggleButton] =useState("Dark Mode");
    const ToggleStyle = () =>{
        if(mystyle.color=='black'){
            setmystyle({
                color:'white',
                backgroundColor:'black' ,
                border : '1px solid white'
            })
            ToggleButton('Light Mode');
        }
        else {
            setmystyle({
                color:'black',
                backgroundColor: 'white'
            })
            ToggleButton('Dark Mode')
        }
    }

    return (
        <div className='container rounded-4' style = {mystyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample"style = {mystyle}>
                <div className="accordion-item"style = {mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style = {mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style = {mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
             <button type="button" onClick={ToggleStyle} className="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left mx-2 my-2">{Toggle}</button>
            </div>
            <br />
        </div>
    )
}
// import React, { useState } from 'react'

// export default function About() {
//     const handleDarkMode = () => {
//         setBgColor(!bgColor);
//     }
//     const handleBtnToggle = () => {
//         setBtnName(!btnName);
//     }
//     const [bgColor, setBgColor] = useState(false);
//     const [btnName, setBtnName] = useState(false);
//     // let mystyle = {
//     //     backgroundColor: bgColor ? "black" : "white", 
//     //     color: bgColor ? "white" : "black"}
//     // }
//     return (
//         <div className='container' style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
//             <h1 className='my-3'>About Us</h1>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             Accordion Item #1
//                         </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
//                             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                             Accordion Item #2
//                         </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
//                             <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                             Accordion Item #3
//                         </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
//                             <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='container my-3'>
//                 <button type="button" className="btn btn-primary" onClick={() => {handleDarkMode(); handleBtnToggle();}}>{btnName ? "Disable Dark Mode" : "Enable Dark Mode"}</button>
//             </div>
//             <br />
//         </div>
//     )
// }
