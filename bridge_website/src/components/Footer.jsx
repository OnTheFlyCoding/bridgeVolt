function Footer(){
    return(
        <>
            <div style={{backgroundColor:'white'}}>
                <h2 style={{ borderTop:'1px solid black', marginTop:'30px'}}>
                    Want To See More?
                </h2>
                <h4>
                To stay updated on all things BridgeVolt, follow us on Facebook, Twitter, and Instagram!
                </h4>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
                    <button ><a style={{color:'white'}} href="https://www.facebook.com/bridgevolt">Facebook</a></button>
                    <button>X</button>
                    <button>Instagram </button>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'20px'}}>
                    <h4>bridgevolt@gmail.com</h4>
                    <h4>P.O. Box 4366, Hamden CT, 06514</h4>
                </div>
            </div>
        </>
    )
}
export default Footer;