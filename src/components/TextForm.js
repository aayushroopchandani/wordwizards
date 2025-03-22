import React, { useState } from 'react'
// import tickIcon from "./tick.svg";
export default function TextForm({ heading, mode,showAlert }) {
    // const [styBox, setStyBox] = useState({ height: "300px", width: "50%" });

    // const toggle=()=>{
    //     setStyBox({
    //         height: "300px",
    //         width: "50%",
    //         backgroundColor: '#282828'
    //     })
    // }
    // if (mode === 'dark') {
    //     console.log('hello its dark');
    // }

    const [text, setText] = useState('');

    const [inputFind, setInputFind] = useState('');

    const [inputReplace, setInputReplace] = useState('');

    const [copy, setCopy] = useState('beforeCopy.svg');
    const [copyText, setCopyText] = useState('Copy');


    const handleUpClick = () => {
        setText(text.toUpperCase());
        showAlert('Converted to Uppercase','success');
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        showAlert('Converted to Lowercase','success');

    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const countOccurences = (str, ch) => {
        let arr = str.split(ch);
        return arr.length - 1;
    };

    const handleReplace = () => {
        setText(text.replace(new RegExp(inputFind, "gi"), inputReplace));
        showAlert(`"${inputFind}" is replaced by "${inputReplace}"`,"success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        // navigator is generally used for text like selecting and all see in chatgpt
        //navigator.clipboard: This is an API in modern web browsers that allows JavaScript to interact with the clipboard (copying and pasting text). 
        setCopy('afterCopy.svg');
        setCopyText('Copied');
        setTimeout(() => {
            setCopy('beforeCopy.svg');
            setCopyText('Copy');

        }, 3000);
        showAlert('Copied to Clipboard!','success');
    };

    const handleSpaces = () => {
        setText(text.trim().replace(/\s+/g, " ")); // /s is basically all types of spaces single or multiple times . /g means globally , all the occurences of the character in the string
    };
    // countOccurences("aayush is a very good boy   "," ");
    const dynamicStyles = `
    
    .dark-mode::placeholder {
      color: lightgray;
    }
  `;
    return (
        <>
            <style>{dynamicStyles}</style>
            <div className="container" >
                <div className="d-flex  align-items-center justify-content-center m-4 flex-column">
                    <h2 className='m-3'>{heading}</h2>
                    <textarea className={`form-control ${mode === "dark" ? "dark-mode" : ""}`} placeholder="Paste your Text here" onChange={handleChange} value={text} id="myBox" style={{
                        height: "300px",
                        width: "50%",
                        backgroundColor: mode === 'dark' ? '#282828' : 'white',
                        color: mode === 'dark' ? 'white' : 'black'


                    }}></textarea>
                    <div className='my-3 d-flex gap-3 flex-wrap align-items-center justify-content-center'>
                        <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary`} onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary`} onClick={handleLowClick}>Convert to Lowercase</button>
                        <div className="dropdown">
                            <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Find & Replace
                            </button>
                            <ul className="dropdown-menu">
                                <div className="input-group my-1">
                                    <input type="text" className="form-control" placeholder="Find" aria-label="Find" aria-describedby="button-addon2" onChange={(e) => setInputFind(e.target.value)} />
                                </div>
                                <div className="input-group my-1">
                                    <input type="text" className="form-control" placeholder="Replace" aria-label="Replace" aria-describedby="button-addon2" onChange={(e) => setInputReplace(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleReplace()} />
                                    <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary`} type="button" id="button-addon2" onClick={handleReplace}><img src="tick.svg" alt="" /></button>
                                </div>
                            </ul>
                        </div>
                        <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary`} onClick={handleSpaces}>Remove extra spaces</button>
                        <button className={`btn btn${mode === 'light' ? '-outline' : ''}-secondary`} onClick={() => setText("")}>Clear Text</button>
                        <button className="p-1" onClick={handleCopy} id='copy' style={{ border: '1px solid grey', color: `${mode === 'dark' ? 'white' : 'grey'}`, backgroundColor: `${mode === 'dark' ? '#6c757d' : 'white'}`, borderRadius: '5px' }}><img src={copy} alt="Copy" />{copyText}</button>

                    </div>
                    <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
                        <h2>Your Text Analysis</h2>
                        <p>{text === '' ? '0' : countOccurences(text.trim().replace(/\s+/g, " "), " ") + 1} {text.indexOf(" ") === -1 ? 'word' : 'words'}</p>
                        <p>{text.trim().length} characters(including spaces)</p>
                        <p>{text.length - countOccurences(text, " ")} characters(without spaces)</p>
                        <p> Time to read {Math.round(((countOccurences(text, " ") + 1) / 125) * 100) / 100} minutes(slow reader approx)</p>
                        <p> Time to read {Math.round(((countOccurences(text, " ") + 1) * 0.0032) * 100) / 100} minutes(Average person approx)</p>
                        {/* Math.round(num * 100) / 100; */}
                    </div>
                </div>
            </div >

        </>
    )
}
