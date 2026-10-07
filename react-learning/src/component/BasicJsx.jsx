import './BasicJsx.css';
import React from 'react'


function BasicJsx() {

    const myName = "abhishek kale";  // js code
    const age = 10;

    const firstname = "abhishek";
    const middlename = "Sahebrao";
    const lastname = "kale";
    const isActive = false;

    // JSX मध्ये JavaScript expression execute/value दाखवा.
    return (
        // <div>

        //     {/* html code */}
        //     {/* string  */}
        //     <h5>My Name Is : {myName}</h5>
        //     <h5>My Name Is : {myName.toUpperCase()}</h5>

        //     {/* Number/Expression */}
        //     <p>10 + 5 = {10 + 5}</p>

        //     {/* Ternary Operator */}

        //     {/* <h5>{age >= 18 ? "Adult" : "Minor"}</h5> */}

        //     {age >= 18 ? (
        //         <h1>Adult</h1>
        //     ) : (
        //         <h1>Minor</h1>
        //     )}

        //     {/* fullname */}

        //     <h4> My FullName : {firstname} {middlename} {lastname}</h4>

        //     {/* classname write and apply to the styling */}
        //     <div className="card">
        //         <h2>User Card</h2>
        //         <p>This is User Card Component.</p>
        //     </div>

        //     <div>
        //         <h1 style={{ color: 'red', backgroundColor: 'wheat', padding: '20px', border: '2px solid green', borderRadius: '10px', margin: '10px 0 10px' }}>Hello inline styling....</h1>
        //     </div>
        // </div>

        // fragment:-

        // sort sentax:-

        // <>
        //     <div>
        //         <h1 style={{ color: 'red', backgroundColor: 'wheat', padding: '20px', border: '2px solid green', borderRadius: '10px', margin: '10px 0 10px' }}>Hello inline styling....</h1>
        //     </div>
        // </>

        //long syntax:-

        // <React.Fragment>
        //     <h1>Hello</h1>
        //     <p>Welcome</p>
        // </React.Fragment>

        // for--> htmlfor:-

        <>
            {/* <label htmlFor='something' className='mx-3'>SomeThing</label>
            <input type="text" name="something" id="something" placeholder='Enter Your Something....'/> */}


            <h5>{isActive ? 'userIsActive' : 'userIsNotActive'}</h5>
        </>

    )
}

export default BasicJsx
