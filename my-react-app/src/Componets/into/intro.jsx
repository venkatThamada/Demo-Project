import { CImage } from "@coreui/react";

import ReactImg from "../../assets/Images/Image.jpeg"

const Intro = () => {
    return (
        <div className="d-flex">
           <div className="d-flex flex-column text-center justify-content-center text-danger fs-1 w-50">
            <label>WEB</label>
            <label>SOLUTION</label>
            <label>COMPANY</label>
           </div>
        <div className="d-flex justify-content-center w-50">
            <CImage className="d-block w-25" src={ReactImg} alt="slide 1" />
        </div>
        </div>
    )

}
export default Intro;
