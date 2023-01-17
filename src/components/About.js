import React from 'react'
import "../index.css";

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

  return (
    <>
    <div className="container">
      <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743', paddingTop:'5px'}} >About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" style={{color: myStyle.color, backgroundColor: myStyle.backgroundColor, '&::after': {filter: 'invert(1)'}}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, character count or preview of your text <strong>& DO MUCH MORE !!</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={{color: myStyle.color, backgroundColor: myStyle.backgroundColor, '&::after': {filter: 'invert(1)'}}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={{color: myStyle.color, backgroundColor: myStyle.backgroundColor, '&::after': {filter: 'invert(1)'}}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
