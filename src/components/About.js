import React, { useState, useEffect } from 'react'

export default function About({ mode }) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    // const[text,setText]=useState('Enable Dark Mode');

    useEffect(() => {
        if (mode === 'light') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: '#282828'
            })
        }
    }, [mode]);

    const dynamicStyles = `
    .accordion-button::after {
        ${mode === 'dark' ? 'filter: invert(1);' : ''}
    }
  `;

    return (
        <>
            <style>{dynamicStyles}</style>
            <div className='border rounded container  my-4 p-4' style={myStyle}>
                <h3 className='my-3' style={myStyle}>About Us</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is WordWizard?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body lh-lg p-4" style={myStyle}>
                                <strong>WordWizard is a powerful text analysis tool</strong> that helps you process and manipulate text efficiently. Whether you need to count words, replace text, change case, or perform other text operations, WordWizard makes it quick and easy. It's designed for students, writers, and anyone who works with text frequently.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Features of WordWizard
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <ul style={{ lineHeight: '3' }}>
                                    <li><strong>Word & Character Count – </strong>Instantly see how many words and characters are in your text.</li>
                                    <li><strong>Find & Replace – </strong>Quickly find words or phrases and replace them with new ones.</li>
                                    <li><strong>Case Converter – </strong>Convert text to uppercase, lowercase, or title case with one click.</li>
                                    <li><strong>Copy to Clipboard – </strong>Easily copy the processed text with a single button.

                                    </li>
                                    <li><strong>More Features Coming Soon! –</strong>Stay tuned for new updates and enhancements.</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How to Use WordWizard?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <ol style={{ lineHeight: '3' }}>
                                    <li><strong>Enter or paste </strong> your text into the input box.</li>
                                    <li>Choose a tool (Word Count, Find & Replace, Case Conversion, etc.).</li>
                                    <li>Click the corresponding button to apply the action.</li>
                                    <li>View the results and use the "Copy" button if needed.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
