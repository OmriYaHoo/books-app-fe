import React, {Component} from 'react';

class Footer extends Component {
    render() {

        return (
            <footer>
                {/*<div className="footer">*/}
                    @Copyrights by Omri Ratson - {new Date().getFullYear()}
                {/*</div>*/}
            </footer>
        );
    }

}

export default Footer;