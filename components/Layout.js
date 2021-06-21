import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    console.log(children.type.name)

    if(children.type.name === 'Home'){
        return ( 
            <div className="wrapper">
                <Navbar />
                { children }
            </div>
        );
    }else{
        return ( 
            <div className="wrapper">
                <Navbar />
                
                { children }
                <Footer />
            </div>
        );
    }
    
}
 
export default Layout;