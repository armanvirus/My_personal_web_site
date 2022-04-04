import React from 'react';
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail"


function Contact(){
            return(
                <div style={styles.contact} className="contact">
                    <div className="contact-main" style={styles.contactMain}>
                    <form style={styles.form}>
                        <div className="form-left" style={styles.formLeft}>
                            <h2>Write Us</h2>
                            <div className="line"></div>
                            <div style={styles.inputs}>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name"/>
                                <label for="Email">Email</label>
                                <input type="email" name="email" id="Email"/>
                                <label for="name">Terms and conditions</label>
                                <input type="checkbox" name="name" id="check"/>
                            </div>
                        </div>
                        <div style={styles.formRight} className="form-right">
                            <textarea> write us here </textarea>
                            <button className="Sbtn">Send</button>
                        </div>
                    </form>
                    <div style={styles.ordinary}>
                        <div><PhoneIcon/><span style={styles.span}>+2347011911909</span></div>
                        <div> <MailIcon/><span style={styles.span}>abdurrahmangrema19@gail.com</span></div>
                    </div>
                    </div>
                </div>
            )
}

const styles = {
    contact:{
        background:"rgb(231, 234, 240)",
        display:"flex",
        height:"100vh",
        width:"100vw",
        justifyContent:"center",
        alignItems:"center"
    },
    contactMain:{
        background: "rgb(41 ,44 ,53)",
        padding: "30px 50px",
        boxShadow:"5px 5px 10px rgba(0, 0 , 8, 0.5)"
    },
    form:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    formLeft:{
        display:"flex",
        flexDirection:"column",
        paddingRight:"20px"
    },
    formRight:{
        display:"flex",
        flexDirection:"column",
        padding:"0",
        borderLeft:"solid 1px #f2f2f2"
    },
    inputs:{
        display:"flex",
        flexDirection:"column"
    }
    ,
    ordinary:{
        padding:"20px 0 0 0",
        borderTop:"solid 1px rgb(8, 215 ,87)",
        marginTop:"20px",
        color:"rgb(8, 215 ,87)",
        alignItems:"center"
    },
    span:{
        padding:"5px",
        color:"#fff",
        transform:"translate(-100px)"
    }
}

export default Contact;