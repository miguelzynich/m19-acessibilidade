import React from "react";
import { withValidation } from "./WithValidation";

function ProductValidation ({contentProduct, parsedCPF}) {
    return (
        <div className="validation">
            <div>
                {contentProduct}
                {parsedCPF}
            </div>
            
        </div>
    );
}

export default withValidation(ProductValidation)